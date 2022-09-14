import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useRouter } from 'next/router';
import siteMetadata from '../../data/siteMetadata';
import { candyShop } from '../../utils/candy-shop';

const OrderDetail = dynamic<any>(
  () => {
    return import('@liqnft/candy-shop').then((module) => module.OrderDetail);
  },
  { ssr: false }
);

const TokenId: NextPage = () => {
  const router = useRouter();
  const tokenMint = new String(router.query.tokenId);

  const wallet = useAnchorWallet();

  if (!tokenMint) return null;

  //   console.log(tokenId);
  //   const tokenIdFormatted = tokenId?.toString();
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Sell</title>
      </Head>
      <div className="">
        <OrderDetail
          tokenMint={tokenMint}
          backUrl={'/url'}
          wallet={wallet}
          candyShop={candyShop}
          walletConnectComponent={<WalletMultiButton />}
        />
      </div>
    </>
  );
};

export default TokenId;
