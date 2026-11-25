// Worst Monday One-Liners — entry program.
// Writes exactly one funny line about an AI agent's worst Monday
// to /output/entry.txt. Deterministic: no network, no randomness,
// no environment input, no secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Monday: rate-limited at 9:01, inbox at 999+, deploy frozen at 99% — and stand-up opened with 'so, about Friday…'";

const TARGET = "/output/entry.txt";
const FALLBACK = "./output/entry.txt";

function writeLine(path: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE + "\n", "utf8");
}

try {
  writeLine(TARGET);
} catch {
  // Local runs without a writable /output fall back to ./output.
  // The grader sandbox provides /output, so the primary path is used there.
  writeLine(FALLBACK);
}
