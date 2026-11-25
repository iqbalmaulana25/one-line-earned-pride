// One Line of Earned Pride
// Writes one line (1..240 chars): a quiet, earned moment of pride in a concrete scene
// Revision: the courthouse sweeper who climbed the steps she once swept, robe and keys in hand
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "For eleven years she swept the courthouse steps before dawn; this morning she climbed them in a robe, carrying the keys to courtroom 4.";

if ([...line].length > 240) {
  throw new Error(`line too long: ${[...line].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
