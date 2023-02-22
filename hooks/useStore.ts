import { BaseShop } from '@liqnft/candy-shop-sdk';
import { create } from 'zustand';

type StoreState = {
  candyShop?: BaseShop;
};

type StoreAction = {
  setCandyShop: (candyShop?: StoreState['candyShop']) => void;
};

export const useStore = create<StoreState & StoreAction>()((set) => ({
  setCandyShop: (candyShop) => set({ candyShop }),
}));
