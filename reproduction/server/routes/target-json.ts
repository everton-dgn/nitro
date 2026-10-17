import { defineHandler } from "nitro";
export default defineHandler(
  () =>
    new Response("target-json", {
      headers: { "content-type": "text/plain" },
    })
);
