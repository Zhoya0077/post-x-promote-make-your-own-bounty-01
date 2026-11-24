// Entry program for post-x-promote-make-your-own-bounty-01 (program/v1, Node 22).
// The entry is one post on X. This program does exactly one thing: it copies
// POST.json, which names that post's address, from the repository into the
// output directory the harness provides. The house reads the post itself
// from X and writes its counts to /output/post.counts.json afterwards;
// nothing this program writes about the post is scored.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The repository root is the directory this file lives in, so the copy
// works no matter which directory the harness runs the program from.
const repoRoot = dirname(fileURLToPath(import.meta.url));

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when unset.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outputDir, "POST.json"));
