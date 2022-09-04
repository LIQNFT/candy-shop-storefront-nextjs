import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { useUserContext } from '../../context/UserContextProvider';
import useWalletBalance from '../../context/WalletBalanceProvider';
import siteMetadata from '../../data/siteMetadata';

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isTop;
}

const Header = () => {
  const { menuOpen, setMenuOpen } = useUserContext();
  const { walletAddress } = useWalletBalance();
  const isTop = useIsScrollTop();

  const shortWalletAddress =
    walletAddress.slice(0, 4) + '..' + walletAddress.slice(-4);

  return (
    <header
      className={`header w-full sticky z-20 top-0 flex items-center justify-between   ${
        isTop ? 'border-none' : 'border-b border-gray-200 dark:border-gray-800'
      } `}
    >
      {/* Hamburger Menu */}
      <div className="menu">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="space-y-1.5 block"
        >
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
          <div className="w-8 sm:w-10 h-1 sm:h-1.5 bg-pageText"></div>
        </button>
      </div>

      {/* Logo */}
      <div className="logo">
        <Link href={'/'}>
          <h1 className=" text-3xl font-bold hover:underline cursor-pointer">
            {siteMetadata.siteName}
          </h1>
        </Link>
      </div>
      {/* Wallet Connect Button */}
      <div className="wallet">
        <WalletMultiButton startIcon={undefined} className="btn-wallet">
          <div className="relative ">
            <FaWallet className="btn-wallet-icon inline-block" />

            {walletAddress ? (
              <span className="absolute bottom-1 translate-y-full  -right-2 sm:right-1/2 sm:translate-x-1/2  text-3xs p-0 leading-4 text-center">
                {shortWalletAddress}
              </span>
            ) : (
              <span className="absolute  bottom-3 md:bottom-1 translate-y-full  right-1/2 translate-x-1/2  text-3xs p-0 leading-4 text-center">
                Login
              </span>
            )}
          </div>
        </WalletMultiButton>
      </div>
    </header>
  );
};

export default Header;
