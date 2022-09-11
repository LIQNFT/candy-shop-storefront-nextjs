import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';

const MarketplaceWithUrl = dynamic(
  () => import('../components/marketplace/MarketplaceWithUrl'),
  { ssr: false }
);

const Url: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Sell</title>
      </Head>
      <div className="">
        <MarketplaceWithUrl />
      </div>
    </>
  );
};

export default Url;
