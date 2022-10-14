import { CandyShop } from '@liqnft/candy-shop-sdk';
import { Cluster, PublicKey } from '@solana/web3.js';

const CANDY_SHOP_CREATOR_ADDRESS = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS!
);
const CANDY_SHOP_TREASURY_MINT = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT!
);
const CANDY_SHOP_PROGRAM_ID = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID!
);
const NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK! as Cluster;

const candyShop = new CandyShop({
  candyShopCreatorAddress: CANDY_SHOP_CREATOR_ADDRESS,
  treasuryMint: CANDY_SHOP_TREASURY_MINT,
  candyShopProgramId: CANDY_SHOP_PROGRAM_ID,
  env: NETWORK,
  settings: {
    currencyDecimals: Number(
      process.env.NEXT_PUBLIC_SPL_TOKEN_TO_MINT_DECIMALS || 9
    ),
    currencySymbol: process.env.NEXT_PUBLIC_SPL_TOKEN_TO_MINT_NAME || 'SOL',
    mainnetConnectionUrl:
      NETWORK === 'mainnet-beta'
        ? process.env.NEXT_PUBLIC_SOLANA_RPC_HOST
        : undefined,
  },
});

export {
  candyShop,
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
};
