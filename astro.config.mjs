// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://docs.subquery.ru",
  trailingSlash: "always",
  outDir: "./dist",
  base: "/",
  integrations: [
    starlight({
      title: "SubQuery",
      customCss: ["./src/tailwind.css"],
      editLink: {
        baseUrl: "https://github.com/SubqueryLab/docs/edit/master/",
      },
      head: [
        {
          tag: "script",
          content: `(function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

            ym(100435056, 'init', {webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`,
        },
      ],
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
        {
          label: "Руководства",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
