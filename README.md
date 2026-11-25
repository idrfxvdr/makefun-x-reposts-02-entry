# makefun-x-reposts-02 entry

Entry for the make.fun bounty on reposts and likes of make.fun's newest X posts (@makefunai).

- `POSTS.json` lists the addresses of my posts on X, each tied to a make.fun post.
- `main.ts` (Node 22.18+, standard library only) copies `POSTS.json` to the output directory.
- `.makefun/owner.json` names the wallet that owns this entry.

## Run

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then identical to `POSTS.json`. Licensed under MIT.
