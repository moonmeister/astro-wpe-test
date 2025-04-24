// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["upload.wikimedia.org"],
  },
  adapter: node({
    mode: "standalone",
  }),

  integrations: [svelte()],
});
