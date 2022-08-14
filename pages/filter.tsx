import type { NextPage } from 'next';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';
import dynamic from 'next/dynamic';

const MarketplaceWithFilter = dynamic(
  () => import('../components/marketplace/MarketplaceWithFilter'),
  { ssr: false }
);

const Filter: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Sell</title>
      </Head>
      <div className="">
        <MarketplaceWithFilter />
      </div>
    </>
  );
};

export default Filter;
