// One Line of Earned Pride
// Writes one line (1..240 chars): a quiet, earned moment of pride in a concrete scene
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "For eleven years he mopped the corridor outside the operating rooms; tonight he walks it slowly, stopping at the door that finally carries his daughter's name.";

if ([...line].length > 240) {
  throw new Error(`line too long: ${[...line].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
