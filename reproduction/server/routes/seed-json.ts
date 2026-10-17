import { defineHandler } from "nitro";
export default defineHandler(
  () =>
    new Response('{"ok":true}', {
      headers: { "content-type": "application/json", "x-nitro-prerender": "/target-json" },
    })
);
