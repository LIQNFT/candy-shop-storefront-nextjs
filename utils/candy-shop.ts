import { Blockchain } from '@liqnft/candy-shop-types';

const NETWORK = process.env.NEXT_PUBLIC_SOLANA_NETWORK! as Blockchain;
const CANDY_SHOP_CREATOR_ADDRESS =
  process.env.NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS!;

const CANDY_SHOP_TREASURY_MINT =
  process.env.NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT!;

const CANDY_SHOP_PROGRAM_ID = process.env.NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID!;

// const candyShop = CandyShop.initSolCandyShop({
//   shopCreatorAddress: process.env.NEXT_PUBLIC_CANDY_SHOP_CREATOR_ADDRESS!,
//   treasuryMint: process.env.NEXT_PUBLIC_CANDY_SHOP_TREASURY_MINT!,
//   programId: process.env.NEXT_PUBLIC_CANDY_SHOP_PROGRAM_ID!,
//   env: NETWORK,
//   settings: {
//     currencyDecimals: Number(
//       process.env.NEXT_PUBLIC_SPL_TOKEN_TO_MINT_DECIMALS || 9
//     ),
//     currencySymbol: process.env.NEXT_PUBLIC_SPL_TOKEN_TO_MINT_NAME || 'SOL',
//     connectionUrl:
//       NETWORK === 'mainnet-beta'
//         ? process.env.NEXT_PUBLIC_SOLANA_RPC_HOST
//         : undefined,
//   },
// });

export {
  CANDY_SHOP_CREATOR_ADDRESS,
  CANDY_SHOP_TREASURY_MINT,
  CANDY_SHOP_PROGRAM_ID,
  NETWORK,
};
