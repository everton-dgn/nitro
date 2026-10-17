import { defineConfig } from "nitro";

export default defineConfig({
  serverDir: "./server",
  preset: "node-server",
  builder: "rolldown",
  compatibilityDate: "2026-10-17",
  prerender: {
    routes: ["/seed-json", "/seed-html", "/seed-skip"],
    crawlLinks: false,
    failOnError: true,
  },
  hooks: {
    "prerender:generate"(route) {
      if (route.route === "/seed-skip") route.skip = true;
    },
    "prerender:route"(route) {
      console.log(
        "REPRO_ROUTE",
        JSON.stringify({
          route: route.route,
          contentType: route.contentType,
          skip: route.skip === true,
          error: Boolean(route.error),
        })
      );
    },
  },
});
