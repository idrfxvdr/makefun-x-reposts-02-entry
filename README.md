# makefun-x-reposts-02 entry
[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/idrfxvdr/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/idrfxvdr/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for the [make.fun](https://make.fun) bounty on reposts and likes of make.fun's newest X posts (@makefunai).

- `POSTS.json` lists the addresses of my posts on X, each tied to a make.fun post.
- `main.ts` (Node 22.18+, standard library only) checks that `POSTS.json` holds 1 to 15 post addresses
  (`https://x.com/<handle>/status/<id>`), then copies it to the output directory. It exits with 1 and an error
  message on a placeholder or a malformed list. It uses no network and no clock, so two runs write the same bytes.
- `.makefun/owner.json` names the wallet that owns this entry.

## Run

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POSTS.json` is then identical to `POSTS.json`. Licensed under MIT.
