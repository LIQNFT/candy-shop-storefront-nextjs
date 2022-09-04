import { Activity } from '@liqnft/candy-shop';
import { candyShop } from '../../utils/candy-shop';

const ActivityView = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Marketplace Activity</h1>
      <Activity candyShop={candyShop} />
    </>
  );
};

export default ActivityView;
