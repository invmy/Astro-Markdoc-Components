// @ts-check

import markdoc from "@astrojs/markdoc";
import { defineConfig } from "astro/config";
import { passthroughImageService } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-markdoc-components.pages.dev/",
  base: "/",

  integrations: [
    // react(),
    markdoc({ allowHTML: true, ignoreIndentation: true }),
    // keystatic(),
  ],

  vite: {
    plugins: [tailwindcss()],
    //for keystatic
    // optimizeDeps: {
    //   include: ["lodash-es", "lodash"],
    // },
    // ssr: {
    //   noExternal: ["@keystatic/core", "@keystatic/astro"],
    // },
  },

  image: {
    service: passthroughImageService(), // Deployment to Cloudflare requires enabling
  },

  // adapter: node({
  //   mode: "standalone",
  // }),
});
