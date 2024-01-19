'use client';

import { Fragment } from 'react';
import BestSellers from './components/best-sellers';
import ProductDetails from './components/product-details';

const Product = () => {
  return (
    <Fragment>
      <ProductDetails />
      <BestSellers />
    </Fragment>
  );
};

export default Product;
