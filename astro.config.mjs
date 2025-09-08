// @ts-check
import path from "path";
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://underlost.net",
  base: "/",
  env: {
    schema: {
      CMS_GHOST_API_URL: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      CMS_GHOST_API_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      CMS_GHOST_ADMIN_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      STRIPE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      STRIPE_WEBHOOK_SECRET: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      STRIPE_PUBLIC_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      MAILGUN_API_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      MAILGUN_DOMAIN: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    define: {
      "import.meta.env.PUBLIC_MODIFIED_DATE": JSON.stringify(
        new Date().toISOString()
      ),
    },
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["underlost.net", "cdn.underlost.net"],
  },

  adapter: cloudflare(),
  integrations: [mdx(), sitemap(), react()],
});