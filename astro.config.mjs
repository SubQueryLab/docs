// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://docs.subquery.ru",
  trailingSlash: "always",
  outDir: './dist',
  integrations: [
    starlight({
      title: "Subquery // Документация",
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
