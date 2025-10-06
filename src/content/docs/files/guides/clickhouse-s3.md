---
title: Работа с S3 в ClickHouse
draft: false
---

## Вам понадобится
- S3 бакет
- Параметры подключения к нему
- ClickHouse

## Добавление подключения к бакету
Для подключения необходимо зайти в раздел "Файлы", добавить подключение к бакету по кнопке __+__ и заполнить параметры.

## Регистрация коллекции в ClickHouse
ClickHouse позволяет работать с <a href="https://clickhouse.com/docs/integrations/s3" target="_blank" rel="nofollow" >файлами в S3</a>.
Можно предъявлять креды своего коннектора в открытую, но удобнее и лучше будет всё же прикрыться с помощью специальной сущности NAMED_COLLECTION

В ней можно указать как сами креды подключения, так и предзаполнить некоторые настройки
```sql
create named collection s3_subquery
on cluster CLUSTER_NAME -- не забываем, кому актуально
as
access_key_id = 'буквоцифры',
secret_access_key = 'буквоцифры подлинее',
url = 'https://storage.yandexcloud.net/',
structure = 'auto',
format = 'CSVWithNames';
```

## Загрузка файла

В интерфейсе файлового менеджера файлы загружаются очень просто: перетащите или выберите опцию правой кнопкой мыши.

В ClickHouse выгружать S3 можно через `insert`

```sql
insert into function s3(
    s3_subquery
    ,filename='bucket_name/demo/select1.csv'
    ,format='CSVWithNames')
select 1 as id
```

Если файл уже существует, необходимость перезаписи указывается в настройках

```sql
settings
s3_truncate_on_insert=1
```

## Чтение файлов

В идеале достаточно указать ссылку на файл вместе с бакетом, если не указали его в поле `url` при объявлении коллекции
```sql
select *
from s3(
  s3_subquery, -- имя созданной коллекции
  filename="..."
)
```
ClickHouse поддерживает wildcard (**), компрессию и предоставляет скрытые поля `_path` и `_file` в результатах, но, к сожалению, просто шарить так по S3 не получится.

В файловом менеджере можно щелкнуть правой кнопкой мыши по файлу, "Скопировать ключ" и вставить в функцию. Если не указывали бакет в url коллекции, то даже ничего и менять не придётся. Для кириллицы и прочей сакнционки оберните в `filename=encodeURLComponent(якирилл)`.


### Чтение трудных файлов

Когда всё идёт не так, как хотелось бы, прибегаем к стрёмным методам. Например, можно указать общий формат чтения и попытаться вывести первую строку, какой бы они ни была. Хотя работает не всегда.

```sql
select * from .. s3(
format='CustomSeparated') limit 1
```

Для принудительного задания схемы я использую `describe s3(format='CSVWithNames')` и даже не брезгую потом составить выражение в Excel. Для этого помогает кнопка выгрузки результатов в нашем редакторе SQL.

В крайнем случае какие-то ошибки можно пропускать с помощью <a href="https://clickhouse.com/docs/operations/settings/formats#input_format_allow_errors_num" target="_blank" rel="nofollow">настроек</a>
`input_format_allow_errors_num` и `input_format_allow_errors_ratio`


## Большие файлы

В документации ClickHouse есть целая статья по <a href="https://clickhouse.com/docs/integrations/s3/performance#tuning-threads-and-block-size-for-inserts$0" target="_blank" rel="nofollow">оптимизации чтения</a>. На разных этапах жизни я пробовал и их рекомедации, и `s3Cluster()` вместо `s3()`.


### Чтение в dbt

В одном проекте я обрабатывал закинутые файлы дагом в dbt, передавая ссылки в vars. В случае, когда файл какого-то типа не передавался, оптимальным выходом стала пустая вставка
```sql
{% if  var('dic', '') == '' %}
select * from {{this}} where false
{% else %}
...
```
