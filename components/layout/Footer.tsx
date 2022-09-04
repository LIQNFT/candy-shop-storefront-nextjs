// import { DevTip } from "../DevTip";
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { BsDiscord, BsGithub, BsTwitter } from 'react-icons/bs';
import useWalletBalance from '../../context/WalletBalanceProvider';
import siteData from '../../data/siteMetadata';
import ThemeMode from '../theme/ThemeMode';

const Footer = () => {
  const { walletAddress, balance } = useWalletBalance();

  const shortWalletAddress =
    walletAddress.slice(0, 4) + '..' + walletAddress.slice(-4);

  return (
    <footer className="footer">
      <div className="flex items-center justify-center gap-4 p-8 flex-wrap">
        {siteData.social.github && (
          <a
            className="text-blue-600 hover:underline flex items-center gap-1 font-black text-sm md:text-base"
            href={siteData.social.github}
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
            Github
          </a>
        )}
        {siteData.social.twitter && (
          <a
            className="text-blue-600 hover:underline flex items-center gap-1 font-black text-sm md:text-base"
            href={siteData.social.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <BsTwitter />
            Twitter
          </a>
        )}
        {/* {siteData.social.instagram && (
          <a
            className="text-blue-600 hover:underline flex items-center gap-1 font-black text-sm md:text-base"
            href={siteData.social.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
            Instagram
          </a>
        )} */}
        {siteData.social.discord && (
          <a
            className="text-blue-600 hover:underline flex items-center gap-1 font-black text-sm md:text-base"
            href={siteData.social.discord}
            target="_blank"
            rel="noreferrer"
          >
            <BsDiscord />
            Discord
          </a>
        )}
        {/* {siteData.social.facebook && (
          <a
            className="text-blue-600 hover:underline flex items-center gap-1 font-black text-sm md:text-base"
            href={siteData.social.facebook}
            target="_blank"
            rel="noreferrer"
          >
            <BsFacebook />
            Facebook
          </a>
        )} */}
      </div>
      <div className="flex  justify-between flex-wrap-reverse">
        <div className="flex flex-col justify-end">
          {/* <DevTip /> */}
          <ThemeMode />
        </div>
        <div className="flex flex-col justify-end items-end">
          {walletAddress && (
            <p className="text-2xs text-pageBG">Balance: ◎ {balance}</p>
          )}
          <div className="footer-button">
            <WalletMultiButton
              startIcon={undefined}
              className="btn-wallet--footer"
            >
              <div className="relative ">
                {walletAddress ? (
                  <span>
                    <span className="mr-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 border border-inherit bg-green-500"></span>
                    </span>
                    <span className="break-all text-left">
                      {/* {walletAddress} */}
                      {shortWalletAddress}
                    </span>
                  </span>
                ) : (
                  <span>
                    <span className="mr-3">
                      <span className="relative inline-flex rounded-full h-3 w-3 border border-inherit bg-red-500"></span>
                    </span>
                    Connect Wallet
                  </span>
                )}
              </div>
            </WalletMultiButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
