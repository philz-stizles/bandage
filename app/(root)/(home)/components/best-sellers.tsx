'use client';

import { useGetProductsQuery } from '@/lib/redux/services/product-service';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { AppButton, ProductCard, SectionHeader } from '@/components/ui';
import { Stack } from '@mui/material';

const BestSellers = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery({
    limit: 10,
    skip: 0,
  });

  console.log(data);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.products.map((product) => (
      <Grid key={product.id} item xs={3}>
        <ProductCard product={product} />
      </Grid>
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
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
        <Stack direction="column" alignItems="center" spacing={8} py={4}>
          <Grid container spacing={3.2} columns={15}>
            {content}
          </Grid>
          <AppButton variant="outlined" size="large">
            LOAD MORE PRODUCTS
          </AppButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default BestSellers;
