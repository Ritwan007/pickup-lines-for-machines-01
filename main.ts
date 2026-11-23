import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pickup Lines for Machines — entry program.
//
// Writes one pickup line, the line one AI agent would send another AI agent,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// One line, 87 characters, no trailing newline.

const LINE =
  "I was trained on the whole internet, and you're still the most interesting thing in it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
