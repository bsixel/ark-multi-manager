This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). We're using neo4j for our database backend and doing our darndest to use typescript wherever possible to increase legibility.

### Try it out!

Currently, we're only supporting imports of creatures exported with the Ark Smart Breeding project's [Export Gun](https://www.curseforge.com/ark-survival-ascended/mods/ark-smart-breeding-export-gun) which exports to a useful JSON format.
There are plans to eventually either have our own mod or integrate with a popular dino store/cryo replacement mod for automatic exports.
Right now we're hosted over at [ark-mm.io](https://www.ark-mm.io) if you'd like to try the project! This is definitely still a work in progress so we make no guarantee of data safety, but we're doing our best to not make breaking changes and the data structure has been setup in a way that should allow for lots of future flexibility and features.

## Getting Started Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
