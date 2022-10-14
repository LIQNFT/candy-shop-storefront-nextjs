# Candy Shop Storefront NextJS

Solana NFT storefront powered by [Candy Shop](https://github.com/LIQNFT/candy-shop).

- [Docs](https://liqnft.gitbook.io/candy-shop/candy-shop/getting-started)
- [Website](https://candy.liqnft.com/)

Key features:

- SOL and SPL token marketplace
- SOL and SPL token auctions
- Marketplace with modal or single NFT view
- NFT filtering, sort and search
- Multi collection marketplace
- Multi currency marketplace
- Marketplace activity

<img width="1363" alt="Solana NFT Storefront NextJS" src="https://candy.metadefi.com/storefront.png">

## Quick start

```bash
git clone https://github.com/LIQNFT/candy-shop-storefront-nextjs.git
cd candy-shop-storefront-nextjs
cat .env.example >> .env
yarn
yarn dev
```

## One-Click Vercel Deployment

One-click solution to clone this project to your GitHub and deploy the prod package on a Vercel.
Your only task will be to customize your GitHub fork of this project and commit updates.
Vercel will automatically deploy new prod packages for each new commit.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FLIQNFT%2Fcandy-shop-storefront-nextjs%2F&env=NEXT_PUBLIC_SOLANA_NETWORK,NEXT_PUBLIC_SOLANA_RPC_HOST,NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS,NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT,NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID,NEXT_PUBLIC_SPL_TOKEN_TO_MINT_NAME,NEXT_PUBLIC_SPL_TOKEN_TO_MINT_DECIMALS,CI)

## Setup

### Prerequisites

- Ensure you have both `nodejs` and `yarn` installed. `nodejs` recommended version is 16.

### Installation

#### 1. Fork the project & clone it. Example:

```
git clone https://github.com/LIQNFT/candy-shop-storefront-nextjs
```

#### 2. Define your environment variables (.env file)

Rename the `.env.example` file at the root directory to `.env` and update the following variables in the `.env` file :

```
NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS=Fo2cXie4UwreZi7LHMpnsyVPvzuo4FMwAVbSUYQsmbsh
NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT=So11111111111111111111111111111111111111112
NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID=csa8JpYfKSZajP7JzxnJipUL3qagub1z29hLvp578iN
```

You may get these parameters by creating a shop [here](https://candy.liqnft.com/shop).

```
NEXT_PUBLIC_SOLANA_NETWORK=devnet
```

This identifies the Solana network you want to connect to. Options are `devnet`, `testnet`, and `mainnet-beta`.

```
NEXT_PUBLIC_SOLANA_RPC_HOST=https://api.devnet.solana.com
```

This identifies the RPC server your web app will access the Solana network through.

#### 4. Customize your storefront:

##### 4.1 `styles/global.css`: update 3 main CSS variables with your custom colors :

```
:root {
  --black: #000000;
  --white: #ffffff;

  --pageBG: #ffffff;
  --pageText: #000000;
  --scope: #0066ff;
}

[data-theme='dark'] {
  --pageBG: #000000;
  --pageText: #f4f4f0;
  --scope: #0066ff;
}

[data-theme='candy'] {
  --pageBG: #a5b4fc;
  --pageText: #4338ca;
  --scope: #ff1717;

```

##### 4.2 `public` folder:

- Update existing demo cool cats images (cool-cats.gif, logo.png) with your owns images in project `public` folder. Make sure to name them identically.

That's it! Enjoy your beautiful storefront!

## Available Commands Recap:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
