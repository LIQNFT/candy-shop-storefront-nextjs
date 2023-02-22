import { Orders, Stat } from '@liqnft/candy-shop';
import { useAnchorWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useStore } from 'hooks/useStore';
import React from 'react';

const MarketplaceWithFilter = () => {
  const wallet = useAnchorWallet();
  const candyShop = useStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <>
      <Stat
        candyShop={candyShop}
        title={'Marketplace'}
        description="Enable users to filter by collections and search for NFTs."
        style={{ paddingBottom: 50 }}
      />
      <Orders
        wallet={wallet}
        candyShop={candyShop}
        walletConnectComponent={<WalletMultiButton />}
        filters={FILTERS}
        filterSearch
        search
        filterType="dropdown"
      />
    </>
  );
};

export default MarketplaceWithFilter;

const FILTERS: React.ComponentProps<typeof Orders>['filters'] = [
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
    attribute: { backgrounds: 'gradient_purple' },
  },
];
