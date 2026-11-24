// Entry for "The Funniest Out-of-Office" (make.fun).
// Writes one single-line out-of-office auto-reply to /output/entry.txt.
// Limit: 1 line, at most 140 characters.
//
// The winning line: a real-person OOO with a twist the reader does not
// see coming. The inbox is not "piling up" (the flooded trope) and nobody
// is "back on Monday" in the usual way -- instead the inbox has a new,
// terrifyingly thorough reader: the writer's grandmother, who has
// questions about the sender's tone.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Out of office until Monday. My inbox is currently being read by my grandmother, who has questions about your tone.";

if (
  ENTRY.length > 140 ||
  Buffer.byteLength(ENTRY, "utf8") > 140 ||
  ENTRY.includes("\n") ||
  ENTRY.trim().length === 0
) {
  throw new Error("Entry violates the 140-character single-line gate.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
