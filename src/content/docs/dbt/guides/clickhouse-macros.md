---
title: Макросы для ClickHouse
draft: true
---

## Схема бд

в других базах database.schema.table
в КХ schema.table

Если не использовать макрос, то?

```jinja
{% macro generate_schema_name(custom_schema_name, node) -%}
    {%- set default_schema = target.schema -%}
    {%- if custom_schema_name is none -%}
        {{ default_schema }}
    {%- else -%}
        {{ custom_schema_name }}
    {%- endif -%}
{%- endmacro %}
```

## генерация дат
подстановка таблицы в макрос? чтобы сджойнила с датами и заполнила пропуски
```
select current_date() - number AS date_day
from numbers(5000)
```
