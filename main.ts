// makefun-x-reposts-02 entry — copies POSTS.json to /output for the grader
// The actual entry is the X posts themselves (see POSTS.json).
// This program runs in the grader's container with MAKEFUN_BOT_DIR=/bot and MAKEFUN_OUTPUT_DIR=/output.
// Local test: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Deterministic: two runs produce identical output (no timestamps, no randomness).

import { copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const src = join(BOT_DIR, 'POSTS.json');
const dest = join(OUTPUT_DIR, 'POSTS.json');

if (!existsSync(src)) {
  console.error(`POSTS.json not found at ${src}`);
  process.exit(1);
}

try {
  copyFileSync(src, dest);
  console.error('POSTS.json copied to output');
} catch (err) {
  console.error(`Failed to copy POSTS.json: ${(err as Error).message}`);
  process.exit(1);
}