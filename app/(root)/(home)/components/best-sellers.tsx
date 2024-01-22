'use client';

import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { AppButton, ProductCard, SectionHeader } from '@/components/ui';
import { useGetProductsQuery } from '@/lib/redux/services/product-service';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { loadNextPage, setProducts } from '@/lib/redux/slices/product-slice';

const BestSellers = () => {
  const dispatch = useAppDispatch();
  const { products, page, limit } = useAppSelector((state) => state.products);
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery({
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
        <Grid key={isLoading ? i : product.id} item xs={12} sm={4} md={3} lg={3}>
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
        <Stack direction="column" alignItems="center" spacing={8} pt={6}>
          <Grid
            container
            spacing={4}
            columns={{
              lg: 15,
              md: 12,
              sm:12,
              xs: 12,
            }}
          >
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
