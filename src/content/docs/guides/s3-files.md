---
title: Загрузка файлов и работа с ними в ClickHouse
draft: true
---

## Что нужно иметь для начала
- s3 бакет
- креды к нему
- ClickHouse

## Добавление подключения к бакету


## Регистрация коллекции в ClickHouse


## Загрузка файла

## Чтение файлов

### Чтение трудных файлов


<!-- TODO из первой строки взять заголовки, а из второй типы -->
<!-- TODO добавить default значения -->
<!-- TODO добавить создаие UDF getSchema() -->
```sql
select
    arrayStringConcat(
        /* собираем полную схему */
        arrayMap(
            /* добавляем тип */
            x -> concat('"', x, '"', ' ', toTypeName(x))
            /* разделяем по точке с запятой */
            , splitByChar(';', data)
        )
        , ', '
    )
from s3(s3_bucket
    ,filename='some_people_dont_know_how_to_make_a.csv'
    ,structure='data String'
    ,format='CustomSeparated'
    )
limit 1
```
получаем схему в String и подставляем в structure
