import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './services/product-service';
import cartReducer, {
  loadCartFromStore,
  saveCartToStore,
} from './features/cart-slice';
import wishListReducer, {
  loadWishListFromStore,
  saveWishListToStore,
} from './features/wish-list-slice';

const localStorageMiddleware = (store: any) => (next: any) => (action: any) => {
  const result = next(action);
  saveCartToStore(store.getState().cart);
  saveWishListToStore(store.getState().wishList);
  return result;
};

// const preloadedState = {
//   cart: loadCartFromStore(),
//   wishList: loadWishListFromStore(),
// };

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productApi.reducerPath]: productApi.reducer,
      cart: cartReducer,
      wishList: wishListReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
    // preloadedState
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
