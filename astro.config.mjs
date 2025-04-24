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
  session: {
    /**
     * FS driver is the default driver and stores session data in the file system. This does not work well in serverless environments like the WP Engine Headless Platform.
     * Here is an example of how to use the Redis driver.
     * see: https://unstorage.unjs.io/drivers/redis for more information.
     * driver: "redis",
     * options: {
     *   url: "redis://default:password@redis.server.com:6379",
     * },
     *
     */
    driver: "fs",
    cookie: {
      name: "wpe-astro-test-session",
      sameSite: "strict",
      secure: true,
    },
  },

  integrations: [svelte()],
});
