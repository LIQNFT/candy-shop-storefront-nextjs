import { Orders, Stat } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { candyShop } from '../../utils/candy-shop';

const SingleCurrencyMarketplace = () => {
  const wallet = useAnchorWallet();
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
