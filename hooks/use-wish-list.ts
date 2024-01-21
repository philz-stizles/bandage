import { create } from 'zustand';

type WishListStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useWishList = create<WishListStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
