// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.subquery.ru',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: "Дока к Platina360",
      social: {
        github: "https://github.com/",
      },
      editLink: {
        baseUrl: 'https://github.com/withastro/starlight/edit/main/docs/',
      },
      customCss: [
        './src/tailwind.css',
      ],
      sidebar: [
        {
          label: "Гайд по DBT",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Начало", slug: "dbt/start" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
