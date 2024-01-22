import { Product } from '@/models/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const WISH_LIST_STORE = 'wish-list-store';

type WishList = Product[];

const initialState: WishList = [];

export const saveWishListToStore = (wishList: WishList) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(WISH_LIST_STORE, JSON.stringify(wishList));
  }
};

export const loadWishListFromStore = () => {
  const store = localStorage.getItem(WISH_LIST_STORE);
  return !!store ? (JSON.parse(store) as WishList) : initialState;
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState,
  reducers: {
    initializeWishlist: loadWishListFromStore,
    addToWishList: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.push(newItem);
      }
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingIndex = state.findIndex((item) => item.id === id);
      if (existingIndex !== -1) {
        state.splice(existingIndex, 1);
      }
    },
    clearWishList: (state, _) => {
      state.length = 0;
    },
  },
});

export const {
  initializeWishlist,
  addToWishList,
  removeFromWishList,
  clearWishList,
} = wishListSlice.actions;

export default wishListSlice.reducer;
