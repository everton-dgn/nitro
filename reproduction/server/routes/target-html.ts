import { defineHandler } from "nitro";
export default defineHandler(
  () =>
    new Response("target-html", {
      headers: { "content-type": "text/plain" },
    })
);
