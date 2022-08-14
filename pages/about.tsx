import { NextPage } from 'next';
import Head from 'next/head';
import siteData from '../data/siteMetadata';
import { BsTwitter } from 'react-icons/bs';

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About | {siteData.siteName}</title>
      </Head>

      <h1 className="text-3xl font-bold">About Us</h1>
      <div className="flex flex-col items-center justify-center text-pageText mt-24 gap-2 leading-12">
        <p className="max-w-3xl text-center font-normal text-2xl">
          {siteData.description}
        </p>
        <a
          className="text-blue-600 hover:underline flex items-center gap-1 text-xl"
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
          Twitter
        </a>
      </div>
    </>
  );
};

export default About;
