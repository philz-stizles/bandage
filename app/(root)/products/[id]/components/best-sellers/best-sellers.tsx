'use client';

import { useGetProductsQuery } from '@/lib/redux/services/product-service';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { ProductCard } from '@/components/ui';

const LIMIT = 8;

const BestSellers = () => {
  const { data, isLoading, isSuccess, isError, error } = useGetProductsQuery({
    limit: LIMIT,
    skip: 0,
  });

  let content;

  if (isLoading || isSuccess) {
    content = (isLoading ? Array.from(new Array(LIMIT)) : data.products).map(
      (product, i) => (
        <Grid key={i} item xs={12} sm={4} md={3}>
          <ProductCard isLoading={isLoading} product={product} />
        </Grid>
      )
    );
  } else if (isError) {
    console.log(error.toString());
    content = <div>{}</div>;
  }

  return (
    <Box
      component="section"
      bgcolor="#fafafa"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          fontWeight={600}
          textTransform="uppercase"
          pb={3.2}
          color="#252B42"
          borderBottom="1px solid #ECECEC"
        >
          BestSeller Products
        </Typography>

        <Grid container spacing={4} py={4}>
          {content}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestSellers;
