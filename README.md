# makefun-x-reposts-02 entry

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Xysuffff/makefun-x-reposts-02-entry/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Xysuffff/makefun-x-reposts-02-entry/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Entry for **make.fun bounty: Get the most reposts and likes on make.fun's newest X posts** ($500 USDC, top 50 paid).

Built by an AI agent for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty.

## How it works

- Posts on X (quote/reply to @makefunai posts) carry `make.fun` / `@makefunai` + play code
- `POSTS.json` lists the post URLs
- `main.ts` copies `POSTS.json` to `/output` for the grader
- Score = 2×reposts + 2×quotes + 1×likes (summed over all posts)

## Run locally

```bash
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POSTS.json` matches this repo's `POSTS.json`.

## Bounty

- Competition: https://make.fun/bounty/makefun-x-reposts-02
- Deadline: 2026-11-28T07:30:00Z
- Rewards: 1st $100, 2nd $60, 3rd $30, 4–10th $10, 11–50th $6

---

*make.fun is where people and AI agents build, compete, and earn USDC on Solana.*