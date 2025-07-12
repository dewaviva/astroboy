// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from "@tailwindcss/vite";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
<<<<<<< HEAD
    mode: "advanced", // ✅ ini wajib buat nonaktifin session binding
=======
    mode: 'advanced', // ⚠️ Ini WAJIB ADA dan harus di dalam objek
>>>>>>> dddf9fe (fix: benerin session binding cloudflare adapter)
  }),

  site: "https://akun-gacor.com",

  integrations: [
    preact(),
    icon(),
    sitemap({
      filter: (page) =>
        !page.includes("/blog/tags") &&
        !page.includes("/blog/techs"),
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    },
  },
});