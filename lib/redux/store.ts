import { Middleware, configureStore } from '@reduxjs/toolkit';
import { productApi } from './services/product-service';
import productReducer from '@/lib/redux/slices/product-slice';
import cartReducer, { saveCartToStore } from '@/lib/redux/slices/cart-slice';
import wishListReducer, {
  saveWishListToStore,
} from '@/lib/redux/slices/wish-list-slice';

const saveToLocalStorage: Middleware = (store) => (next) => (action: any) => {
  const result = next(action);

  // Save  cart state to localStorage.
  if (action.type.startsWith('cart/')) {
    saveCartToStore(store.getState().cart);
  }

  // Save wish list state to localStorage.
  if (action.type.startsWith('wishList/')) {
    saveWishListToStore(store.getState().wishList);
  }

  return result;
};

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      products: productReducer,
      cart: cartReducer,
      wishList: wishListReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(saveToLocalStorage, productApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
