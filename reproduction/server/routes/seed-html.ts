import { defineHandler } from "nitro";
export default defineHandler(
  () =>
    new Response("<!doctype html><p>Seed</p>", {
      headers: { "content-type": "text/html", "x-nitro-prerender": "/target-html" },
    })
);
