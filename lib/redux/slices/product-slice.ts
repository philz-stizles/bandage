import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PagedProducts, Product } from '@/models/product';

type State = {
  products: Product[];
  page: number;
  limit: number;
};

const initialState: State = {
  products: [],
  page: 1,
  limit: 10,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<PagedProducts>) => {
      state.products = [...state.products, ...action.payload.products];
    },
    setPage: (state, _: PayloadAction<void>) => {
      state.page = state.page + 1;
    },
  },
});

export const { setProducts, setPage } = productSlice.actions;

export default productSlice.reducer;
