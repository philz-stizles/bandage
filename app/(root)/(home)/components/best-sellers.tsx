'use client';

import { useEffect } from 'react';
import {
  productApi,
  useGetProductsQuery,
} from '@/lib/redux/services/product-service';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { AppButton, ProductCard, SectionHeader } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { loadNextPage, setProducts } from '@/lib/redux/slices/product-slice';

const BestSellers = () => {
  const dispatch = useAppDispatch();
  const { products, page, limit } = useAppSelector((state) => state.products);
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery({
    limit,
    skip: (page - 1) * limit,
  });

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  const handleLoadMore = () => {
    dispatch(loadNextPage());
  };

  let content;

  if (isLoading || isSuccess) {
    content = (isLoading ? Array.from(new Array(limit)) : products).map(
      (product, i) => (
        <Grid key={isLoading ? i : product.id} item xs={3}>
          <ProductCard isLoading={isLoading} product={product} />
        </Grid>
      )
    );
  } else if (isError) {
    content = <div>{}</div>;
  }

  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="Best Seller Products"
          subTitle="Featured Products"
          description="Problems trying to resolve the conflict between"
        />
        <Stack direction="column" alignItems="center" spacing={8} py={2}>
          <Grid container spacing={4} columns={15}>
            {content}
          </Grid>
          <AppButton variant="outlined" size="large" onClick={handleLoadMore}>
            LOAD MORE PRODUCTS
          </AppButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default BestSellers;
