import { Product } from '@/models/product';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const WISH_LIST_STORE = 'wish-list-store';

type WishList = Product[];

const initialState: WishList = [];

export const saveWishListToStore = (cart: WishList) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(WISH_LIST_STORE, JSON.stringify(cart));
  }
};

export const loadWishListFromStore = () => {
  if (typeof localStorage !== 'undefined') {
    const store = localStorage.getItem(WISH_LIST_STORE);
    return !!store ? (JSON.parse(store) as WishList) : initialState;
  } else {
    return initialState;
  }
};

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: loadWishListFromStore,
  reducers: {
    addToWishList: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.push(newItem);
      }
    },
    removeFromWishList: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (!!existingItem) {
        state = state.filter((item) => item.id !== id);
      }
    },
    clearWishList: (state, _) => {
      state.length = 0;
    },
  },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
