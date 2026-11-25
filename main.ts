import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a one-line commit message for a bug fix that made everything worse —
// the tired engineer's rationalization, typed at 1am, defending the damage.
const LINE =
  "fix: correct timezone math; it is now yesterday everywhere, which is simpler";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const artifact = LINE.trimEnd() + "\n";
writeFileSync(outDir + "/entry.txt", artifact);
console.log(`entry written: ${LINE.length} characters`);
