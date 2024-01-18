import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PagedProducts } from '@/models/product';
import config from '@/config';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    getProduct: builder.query<PagedProducts, string>({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductQuery } = productApi;
