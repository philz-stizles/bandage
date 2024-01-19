'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { Product } from '@/models/product';
import { AppButton } from '@/components/ui';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/features/cart-slice';
import { addToWishList } from '@/lib/redux/features/wish-list-slice';

type Props = {
  product: Product;
};

const ProductPreview = ({ product }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Box
      component="section"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={7.2}>
          <Grid item sm={6}>
            <Stack direction="column">
              <Box
                sx={{
                  position: 'relative',
                  aspectRatio: 5 / 4,
                }}
              >
                <Image
                  fill
                  objectFit="cover"
                  alt={product.title}
                  src={product.thumbnail}
                />
              </Box>
              <Stack direction="row" alignItems="center">
                {product.images.map((image) => null)}
              </Stack>
            </Stack>
          </Grid>
          <Grid
            item
            sm={6}
            display="flex"
            direction="column"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h6" fontWeight={300} mb={1}>
                {product.title}
              </Typography>
              <Stack direction="row" spacing={0.8} mb={1.6}>
                <Rating name="read-only" value={product.rating} readOnly />
                <Typography variant="body2" fontWeight={600}>
                  10 Reviews
                </Typography>
              </Stack>
              <Typography variant="h6" fontWeight={700}>
                ${product.price}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={0.4}>
                <Typography>Availability :</Typography>
                <Typography>
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </Typography>
              </Stack>
            </Box>
            <Box>
              <Divider />
              <Stack direction="row" spacing={1.4} mt={3.2}>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: deepOrange[500],
                    width: 24,
                    height: 24,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: deepOrange[500],
                    width: 24,
                    height: 24,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: deepPurple[500],
                    width: 24,
                    height: 24,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: deepPurple[500],
                    width: 24,
                    height: 24,
                  }}
                ></Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2} mt={7.2}>
                <AppButton variant="contained" size="medium">
                  Select Options
                </AppButton>
                <Stack direction="row" alignItems="center">
                  <IconButton onClick={() => dispatch(addToCart(product))}>
                    <ShoppingCartOutlined />
                  </IconButton>
                  <IconButton onClick={() => dispatch(addToWishList(product))}>
                    <FavoriteBorderOutlined />
                  </IconButton>
                  <IconButton>
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProductPreview;
