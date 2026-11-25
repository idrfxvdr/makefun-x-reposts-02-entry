// makefun-x-reposts-02 entry: copies POSTS.json from the repository to the output directory.
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output outside the grader.
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POST_URL = /^https:\/\/(x|twitter)\.com\/[A-Za-z0-9_]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(message);
  process.exit(1);
}

// Check that POSTS.json lists 1 to 15 post addresses before it is copied.
function validate(path: string): void {
  let posts: unknown;
  try {
    posts = (JSON.parse(readFileSync(path, 'utf8')) as { posts?: unknown }).posts;
  } catch (err) {
    fail(`POSTS.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  }
  if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
    fail('POSTS.json must hold {"posts": [...]} with 1 to 15 addresses');
  }
  for (const p of posts) {
    if (typeof p !== 'string' || !POST_URL.test(p)) fail(`not a post address: ${String(p)}`);
  }
}

const source = join(BOT_DIR, 'POSTS.json');
validate(source);
mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(source, join(OUTPUT_DIR, 'POSTS.json'));
