import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
const expected = {
  "seed-json": true,
  "seed-html/index.html": true,
  "seed-skip/index.html": false,
  "target-json": false,
  "target-html": true,
  "target-skip": false,
};
for (const [file, present] of Object.entries(expected)) {
  const actual = existsSync(`.output/public/${file}`);
  console.log(`${file}: ${actual ? "present" : "absent"}`);
  assert.equal(actual, present, file);
}
assert.equal(readFileSync(".output/public/target-html", "utf8"), "target-html");
console.log(
  "Observed behavior confirmed; these assertions do not prescribe the intended contract."
);
