// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.subquery.ru",
  trailingSlash: "always",
  outDir: "./dist",
  integrations: [
    starlight({
      title: "docs.subquery.ru",
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: "https://github.com/OgnivoLab/docs/edit/master/",
      },
      sidebar: [
        { label: "С чего начать", slug: "index" },
        {
          label: "dbt",
          items: [
            { label: "Что такое dbt?", slug: "dbt/start" },
            { label: "Создание и настройка dbt проекта", slug: "dbt/project" },
            { label: "dbt модели", slug: "dbt/models" },
            {
              label: "Создание и редактирование моделей в dbt",
              slug: "dbt/models_subquery",
            },
            {
              label: "Ускоряем работу с данными в SubQuery",
              slug: "dbt/subquery_options",
            },
            {
              label: "Советы",
              slug: "dbt/tips",
            },
          ],
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
