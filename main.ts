// One Line of Earned Pride
// Writes one line (1..240 chars): a quiet, earned moment of pride in a concrete scene
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The night janitor mopped the hospital corridor for eleven years; tonight he walks it slowly, reading his daughter's name on the new doctor's door.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
