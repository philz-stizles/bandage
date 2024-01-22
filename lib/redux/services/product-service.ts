import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PagedProducts, Product } from '@/models/product';
import config from '@/config';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query<PagedProducts, { limit: number; skip: number }>({
      query: (options) => {
        const { limit, skip } = options;
        return `products?limit=${limit}&skip=${skip}`;
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = productApi;
