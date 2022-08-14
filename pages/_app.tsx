import Head from 'next/head';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { FC, ReactNode } from 'react';
import UserContextProvider from '../context/UserContextProvider';
import { WalletBalanceProvider } from '../context/WalletBalanceProvider';
import Layout from '../components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'next-themes';
// import MouseContextProvider from "../context/MouseContextProvider";
// import CustomCursor from "../components/cursor/CustomCursor";

// import "react-toastify/dist/ReactToastify.css";
// Use require instead of import, and order matters
require('../styles/globals.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnectionProvider = dynamic<{ children: ReactNode }>(
  () =>
    import('../context/WalletConnectionProvider').then(
      ({ WalletConnectionProvider }) => WalletConnectionProvider
    ),
  {
    ssr: false,
  }
);
// candy-shop components need to be imported dynamically and you need to disable server side rendering
//
const CandyShopDataValidator = dynamic<any>(
  () => {
    return import('@liqnft/candy-shop').then(
      (module) => module.CandyShopDataValidator
    );
  },
  { ssr: false }
);

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Paradima - Your own NFT Marketplace</title>
        <meta name="description" content="I'll suck your dick for 1 PENNY" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/og-image.png" />
        {/* <link
          href="https://fonts.cdnfonts.com/css/ms-scratch"
          rel="stylesheet"
        /> */}
      </Head>
      <ThemeProvider enableSystem={false} disableTransitionOnChange>
        {/* <MouseContextProvider> */}
        <WalletConnectionProvider>
          <WalletModalProvider>
            <WalletBalanceProvider>
              <UserContextProvider>
                <CandyShopDataValidator>
                  <Layout>
                    <Component {...pageProps} />
                  </Layout>
                </CandyShopDataValidator>

                <ToastContainer
                  position="bottom-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
                <ToastContainer />
              </UserContextProvider>
            </WalletBalanceProvider>
          </WalletModalProvider>
        </WalletConnectionProvider>
        {/* </MouseContextProvider> */}
      </ThemeProvider>
      {/* <CustomCursor /> */}
    </>
  );
};

export default App;
