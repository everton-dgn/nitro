# Nitro response header prerender reproduction

This project tests whether response headers queue additional routes when link crawling is disabled. It uses real Nitro handlers and a real build, based on the [Nitro starter](https://github.com/nitrojs/starter/tree/e00d9c9e50514ffcd1b1a79b80dae3d1a3f56b87).

## Run

Tested with Node 24.22.0 and pnpm 11.28.5. Keep this directory named `reproduction`, next to `source`. The relative Nitro dependency tests the pinned source revision rather than the npm release.

From the parent directory containing `reproduction/`:

```sh
git clone https://github.com/nitrojs/nitro.git source
git -C source checkout --detach 59940084f51a3c1dd6120a10fed50ea4767141c7
cd source
pnpm install --frozen-lockfile
pnpm build --stub
cd ../reproduction
pnpm install --frozen-lockfile --ignore-workspace
pnpm build
pnpm check
```

## Cases

The config sets `crawlLinks: false`, `failOnError: true`, and three explicit seeds. Every destination has a handler and is absent from the configured route list. HTML bodies contain no links.

| Seed | Content-Type | Response header destination | Generate hook |
| --- | --- | --- | --- |
| `/seed-json` | `application/json` | `/target-json` | unchanged |
| `/seed-html` | `text/html` | `/target-html` | unchanged |
| `/seed-skip` | `text/html` | `/target-skip` | `route.skip = true` |

The header is `x-nitro-prerender` in all cases. `REPRO_ROUTE` lines record the prerender lifecycle.

At the pinned revision, only `/target-html` is processed and written. `check.mjs` verifies that observed output, including the absence of the skipped seed. These assertions describe current behavior; they do not define the intended API contract.
