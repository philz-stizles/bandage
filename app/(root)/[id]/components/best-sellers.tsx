'use client';

import { useGetProductsQuery } from '@/lib/redux/services/product-service';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ProductCard } from '@/components/ui';

const BestSellers = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery({
    limit: 8,
    skip: 0,
  });

  console.log(data);

  let content;

  if (isLoading) {
    content = <CircularProgress disableShrink />;
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
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h6"
          fontWeight={600}
          textTransform="uppercase"
          py={3.2}
          borderBottom="1px solid gray"
        >
          BestSeller Products
        </Typography>
        <Divider sx={{ bgcolor: '#eee' }} />
        <Grid container spacing={3.2} py={4}>
          {content}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestSellers;