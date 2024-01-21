'use client';

import { useParams } from 'next/navigation';
import { useGetProductsQuery } from '@/lib/redux/services/product-service';
import ProductPreview from './product-preview';
import ProductInfo from './product-info';

const ProductDetails = () => {
  const params = useParams<{ id: string }>();
  const { product } = useGetProductsQuery(
    { limit: 10, skip: 0 },
    {
      selectFromResult: ({ data }) => ({
        product: data?.products.find((post) => post.id === +params.id),
      }),
    }
  );

  return product ? (
    <>
      <ProductPreview product={product} />
      <ProductInfo product={product} />
    </>
  ) : null;
};

export default ProductDetails;
