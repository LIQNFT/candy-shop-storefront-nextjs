import { Orders, Stat } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { candyShop } from '../../utils/candy-shop';

const MarketplaceWithFilter = () => {
  const wallet = useAnchorWallet();

  return (
    <>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description={
          'Enable users to filter by collections and search for NFTs.'
        }
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        filters={FILTERS}
        filterSearch
        search
      />
    </>
  );
};

export default MarketplaceWithFilter;

const FILTERS = [
  { name: 'Puppies', collectionId: '1', identifier: 2036309415 },
  { name: 'Shibas', collectionId: '2', identifier: 1235887132 },
  {
    name: 'Puppies + Shibas',
    collectionId: '3',
    identifier: [1235887132, 2036309415],
  },
  {
    name: 'Purple Puppies',
    collectionId: '4',
    identifier: 2036309415,
    attribute: [{ backgrounds: 'gradient_purple' }],
  },
  {
    name: 'White eye',
    collectionId: '5',
    attribute: [{ Shine: 'Shapes' }, { Eyeball: 'White' }],
  },
];
