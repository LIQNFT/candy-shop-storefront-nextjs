import { Activity } from '@liqnft/candy-shop';
import { useStore } from 'hooks/useStore';

const ActivityView = () => {
  const candyShop = useStore((s) => s.candyShop);
  if (!candyShop) return null;

  return (
    <>
      <h1 className="text-3xl font-bold">Marketplace Activity</h1>
      <Activity candyShop={candyShop} />
    </>
  );
};

export default ActivityView;
