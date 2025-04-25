---
title: Советы
description: Лайфхаки по использованию DBT IDE
tableOfContents: false
---

<div class='w-full grid grid-cols-1 gap-2'>

<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #1
		</h4>
		<p class="text-neutral/80">
            Если нажать <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Ctrl / Cmd</span> и кликнуть на модель внутри <span class="text-primary">{{ref(...)}}</span> - откроется файл этой модели
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #2
		</h4>
		<p class="text-neutral/80">
            Нажми <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Ctrl / Cmd</span> + <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Shift</span> + <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">F</span>, чтобы открыть глобальный поиск по содержимому
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #3
		</h4>
		<p class="text-neutral/80">
            Если выделить часть кода в <span class="text-primary">SQL консоли</span>, можно запустить только выделенную часть
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #4
		</h4>
		<p class="text-neutral/80">
            Можно добавить dbt модель в запуск по расписанию и посмотреть документацию из контекстного меню по <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">RightClick</span> по sql файлу в дереве
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #5
		</h4>
		<p class="text-neutral/80">
            Можно отобразить превью данных таблицы из контекстного меню по <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">RightClick</span> по таблице в схеме БД
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #6
		</h4>
		<p class="text-neutral/80">
            По нажатию на иконку редактирования при вводе крон выражения открывается человекочитаемое описание крон-строки
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #7
		</h4>
		<p class="text-neutral/80">
            <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Ctrl / Cmd</span> + <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Enter</span><br/> - запускает текущий sql запрос
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #8
		</h4>
		<p class="text-neutral/80">
            <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Ctrl / Cmd</span> + <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Shift</span> + <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">Enter</span> <br/> - запускает dbt над текущей моделью
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #9
		</h4>
		<p class="text-neutral/80">
            Если нажать правой кнопкой мыши по редактору кода, можно отформатировать код с помощью <span class="text-primary">sqlfluff</span>
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #10
		</h4>
		<p class="text-neutral/80">
            <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">F1</span> - открывает список всех горячих клавиш редактора кода
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #11
		</h4>
		<p class="text-neutral/80">
            Наведя на ячейку таблицы, которая содержит много контента, можно открыть окно с его полным отображением
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #12
		</h4>
		<p class="text-neutral/80">
            Используя  <span class="border px-1.5 rounded-full text-xl">+</span>  вокруг dbt модели в графе, можно запустить ее с предками или потомками
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #13
		</h4>
		<p class="text-neutral/80">
            После первого запуска dbt в папке <span class="text-primary">logs</span> будут храниться все логи запусков рабочей области
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #14
		</h4>
		<p class="text-neutral/80">
            <span class="text-primary">Компиляция</span> показывает как будет выглядеть dbt модель после преобразования всех jinja вставок в sql
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #15
		</h4>
		<p class="text-neutral/80">
            Можно посмотреть изменения файла из контекстного меню по <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">RightClick</span> по отредактированному файлу в дереве
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #16
		</h4>
		<p class="text-neutral/80">
            Можно откатить изменения файла из контекстного меню по <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">RightClick</span> по отредактированному файлу в дереве
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #17
		</h4>
		<p class="text-neutral/80">
            При каждой публикации происходит автоматическая <span class="text-primary">компиляция</span> всего проекта для валидации изменений
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #18
		</h4>
		<p class="text-neutral/80">
            В файле <span class="text-primary">/.sqlfluff</span> можно задать собственные настройки форматирования кода
        </p>
</div>


<div class="border border-neutral/20 rounded-lg p-4 w-full flex flex-col gap-2">
		<h4 class="border-b border-neutral/10 pb-2 flex items-center gap-1">
			DBT совет #19
		</h4>
		<p class="text-neutral/80">
            Если нажать <span class="py-0.5 px-1.5 bg-base-200 rounded-md border border-neutral/5">RightClick</span> по вкладке SQL консоли или файла, можно их переименовать
        </p>
</div>
</div>
