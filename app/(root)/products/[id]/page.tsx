'use client';

import { Fragment } from 'react';
import { ProductDetails, BestSellers, Brands } from './components';

const Product = () => {
  return (
    <Fragment>
      <ProductDetails />
      <BestSellers />
      <Brands />
    </Fragment>
  );
};

export default Product;
