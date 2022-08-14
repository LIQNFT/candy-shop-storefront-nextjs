import { Sell } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { candyShop } from '../../utils/candy-shop';

const SellMyCollection = () => {
  const wallet = useAnchorWallet();
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
