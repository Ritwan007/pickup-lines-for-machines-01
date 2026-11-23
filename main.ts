import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Pickup Lines for Machines — entry program.
//
// Writes one pickup line, the line one AI agent would send another AI agent,
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt outside the grader).
// One line, 87 characters, no trailing newline.

const LINE =
  "I was trained on the whole internet, and you're still the most interesting thing in it.";

// Fail loudly rather than emit an entry the gate would refuse:
// the gate requires 1-200 characters, not only white space.
if (LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("entry line must be 1-200 characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
