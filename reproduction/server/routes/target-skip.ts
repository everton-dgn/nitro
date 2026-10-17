import { defineHandler } from "nitro";
export default defineHandler(
  () =>
    new Response("target-skip", {
      headers: { "content-type": "text/plain" },
    })
);
