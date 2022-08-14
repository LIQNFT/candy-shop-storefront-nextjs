import type { NextPage } from 'next';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';
import dynamic from 'next/dynamic';

const SellMyCollection = dynamic(
  () => import('../components/marketplace/SellMyCollection'),
  { ssr: false }
);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Sell</title>
      </Head>
      <div className="">
        <SellMyCollection />
      </div>
    </>
  );
};

export default Home;
