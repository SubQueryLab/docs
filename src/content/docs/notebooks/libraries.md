---
title: Установка библиотек
---

В Python-ячейках библиотеки устанавливаются через `sq.install(...)`.

## Базовый пример

```python
await sq.install("matplotlib")
import matplotlib.pyplot as plt
```

## Как работает `sq.install`

- метод асинхронный, всегда используйте `await`;
- можно установить один пакет, несколько пакетов или список;
- доступны только пакеты из разрешенного каталога SubQuery (whitelist).

Поддерживаемые варианты:

```python
await sq.install("numpy")
await sq.install("numpy", "matplotlib")
await sq.install(["numpy", "matplotlib"])
```

## Важное про WASM-сессию

Python работает в WASM-сессии браузера.  
Если вкладку перезагрузить или закрыть, состояние сессии сбрасывается.

Практический вывод:

- ставьте библиотеки в первой рабочей ячейке ноутбука;
- если возвращаетесь к ноутбуку позже, при необходимости повторите `sq.install(...)`.

## Разрешенные библиотеки (whitelist)

Ниже — полный список пакетов, доступных через `sq.install(...)`.
Версии соответствуют сборке Pyodide, поставляемой вместе с SubQuery.

| Пакет | Версия | Предзагрузка |
| --- | --- | --- |
| `aiohttp` | 3.11.13 | нет |
| `altair` | 6.0.0 | нет |
| `apsw` | 3.50.4.0 | нет |
| `attrs` | 25.2.0 | нет |
| `bcrypt` | 4.3.0 | нет |
| `beautifulsoup4` | 4.13.3 | нет |
| `bokeh` | 3.6.3 | нет |
| `bottleneck` | 1.6.0 | нет |
| `brotli` | 1.2.0 | нет |
| `cachetools` | 5.5.2 | нет |
| `certifi` | 2026.1.4 | нет |
| `clarabel` | 0.11.0 | нет |
| `click` | 8.3.1 | нет |
| `cloudpickle` | 3.1.1 | нет |
| `cryptography` | 46.0.3 | нет |
| `cvxpy-base` | 1.6.3 | нет |
| `diskcache` | 5.6.3 | нет |
| `fsspec` | 2025.3.2 | нет |
| `geopandas` | 1.1.1 | нет |
| `highspy` | 1.11.0 | нет |
| `html5lib` | 1.1 | нет |
| `httpcore` | 1.0.7 | нет |
| `httpx` | 0.28.1 | нет |
| `jedi` | 0.19.2 | да |
| `jinja2` | 3.1.6 | нет |
| `jsonpatch` | 1.33 | нет |
| `jsonpointer` | 3.0.0 | нет |
| `jsonschema` | 4.23.0 | нет |
| `jsonschema-specifications` | 2024.10.1 | нет |
| `lxml` | 6.0.2 | нет |
| `lz4` | 4.4.5 | нет |
| `markupsafe` | 3.0.2 | нет |
| `matplotlib` | 3.8.4 | нет |
| `msgpack` | 1.1.2 | нет |
| `narwhals` | 2.15.0 | нет |
| `nltk` | 3.9.1 | нет |
| `numpy` | 2.2.5 | да |
| `optlang` | 1.8.3 | нет |
| `orjson` | 3.10.16 | нет |
| `packaging` | 26.2 | нет |
| `pandas` | 2.3.3 | да |
| `peewee` | 3.17.9 | нет |
| `protobuf` | 6.31.1 | нет |
| `pyarrow` | 22.0.0 | нет |
| `pydantic` | 2.12.5 | нет |
| `pygments` | 2.19.1 | нет |
| `pyiceberg` | 0.10.0 | нет |
| `pyodide-http` | 0.2.2 | нет |
| `python-calamine` | 0.5.3 | нет |
| `python-dateutil` | 2.9.0.post0 | нет |
| `pytz` | 2025.2 | нет |
| `pyyaml` | 6.0.2 | нет |
| `regex` | 2024.11.6 | нет |
| `requests` | 2.32.4 | нет |
| `rich` | 13.9.4 | нет |
| `scikit-learn` | 1.7.0 | нет |
| `scipy` | 1.14.1 | нет |
| `shapely` | 2.0.7 | нет |
| `six` | 1.17.0 | нет |
| `sqlalchemy` | 2.0.39 | нет |
| `texttable` | 1.7.0 | нет |
| `tomli` | 2.2.1 | нет |
| `tomli-w` | 1.2.0 | нет |
| `toolz` | 1.0.0 | нет |
| `tqdm` | 4.67.1 | нет |
| `tzdata` | 2025.3 | нет |
| `ujson` | 5.11.0 | нет |
| `urllib3` | 2.5.0 | нет |
| `vega-datasets` | 0.9.0 | нет |
| `wordcloud` | 1.9.4 | нет |
| `xgboost` | 2.1.4 | нет |
| `zstandard` | 0.23.0 | нет |

**Предзагрузка** — пакет уже доступен при старте Python-kernel, повторный `sq.install(...)` для него не нужен.
