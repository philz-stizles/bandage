import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { Cart } from '@/models/cart';
import { Product } from '@/models/product';

const CART_STORE = 'cart-store';

export const saveCartToStore = (cart: Cart) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(CART_STORE, JSON.stringify(cart));
  }
};

const loadCartFromStore = () => {
  const store = localStorage.getItem(CART_STORE);
  return !!store ? (JSON.parse(store) as Cart) : initialState;
};

const initialState: Cart = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    initializeCart: loadCartFromStore,
    addToCart: (state, action: PayloadAction<Product>) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.product.id === newItem.id
      );
      if (!existingItem) {
        state.items.unshift({
          product: newItem,
          quantity: 1,
          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      state.totalPrice += newItem.price;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.product.id === id);
      if (!!existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.product.id !== id);
          state.totalQuantity--;
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.product.price;
        }

         state.totalPrice -= existingItem.product.price;
      }
    },
    clearCart: (state, _: PayloadAction<void>) => {
      state.items.length = 0;
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { initializeCart, addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
