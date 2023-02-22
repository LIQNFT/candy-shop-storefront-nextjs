import { Orders, Stat } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useStore } from 'hooks/useStore';

const SingleCurrencyMarketplace = () => {
  const candyShop = useStore((s) => s.candyShop);
  const wallet = useAnchorWallet();

  if (!candyShop) return null;
  return (
    <>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={''}
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
      />
    </>
  );
};

export default SingleCurrencyMarketplace;
