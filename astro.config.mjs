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
    mode: "advanced", // ✅ wajib untuk menghindari error session
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
