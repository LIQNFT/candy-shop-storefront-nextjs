import { Sell } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useStore } from 'hooks/useStore';

const SellMyCollection = () => {
  const candyShop = useStore((s) => s.candyShop);

  const wallet = useAnchorWallet();
  if (!candyShop) return null;

  return (
    <div>
      <Sell
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        enableCacheNFT={true}
      />
    </div>
  );
};

export default SellMyCollection;
