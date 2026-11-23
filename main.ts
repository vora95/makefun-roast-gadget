// u-daring-gecko-25-one-line-roast-the-gadget-you-use-3d6aa610
// "One-Line Roast: The Gadget You Use Every Day"
//
// The program writes one short text to /output/entry.txt: a roast of the
// wireless earbuds used every day. The joke is the betrayal with a witness:
// the earbuds die at 7% without warning, while the case — fully charged —
// just sits in the pocket, holding the power like a grudge. The case is
// the gadget's own pocket-sized villain: it had the charge all along and
// chose to keep it. One line, 129 characters, no setup beyond the gadget.
//
// Deterministic: the same bytes on every run. No network, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "My earbuds die at 7% with no warning, while their case — fully charged — just sits in my pocket, holding the power like a grudge.";

// The gate allows 1–200 Unicode code points: refuse to write anything else.
const LENGTH = [...TEXT].length;
if (LENGTH < 1 || LENGTH > 200) {
  throw new Error(`entry text is ${LENGTH} characters, outside 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
