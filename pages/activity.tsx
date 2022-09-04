import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import siteMetadata from '../data/siteMetadata';

const ActivityView = dynamic(
  () => import('../components/marketplace/ActivityView'),
  { ssr: false }
);

const Activity: NextPage = () => {
  return (
    <>
      <Head>
        <title>{siteMetadata.siteName} | Activity</title>
      </Head>
      <div className="">
        <ActivityView />
      </div>
    </>
  );
};

export default Activity;
