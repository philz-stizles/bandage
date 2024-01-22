'use client';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
import { AppBreadCrumbs, AppButton } from '@/components/ui';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart } from '@/lib/redux/slices/cart-slice';
import { addToWishList } from '@/lib/redux/slices/wish-list-slice';
import ProductGallery from './product-gallery/product-gallery';

type Props = {
  product: Product;
};

const ProductPreview = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  return (
    <Box
      component="section"
      bgcolor="#FAFAFA"
      sx={{
        pt: 6,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <AppBreadCrumbs links={['Home', 'Shop']} />
        <Box
          display="grid"
          gap={8}
          pt={5}
          sx={{
            gridTemplateColumns: {
              md: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(1, minmax(0, 1fr))',
              xs: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          <ProductGallery product={product} />

          <Stack direction="column" justifyContent="space-between">
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
                    bgcolor: theme.palette.primary.main,
                    width: 32,
                    height: 32,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: theme.palette.success.main,
                    width: 32,
                    height: 32,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: '#E77C40',
                    width: 32,
                    height: 32,
                  }}
                ></Box>
                <Box
                  sx={{
                    borderRadius: '50%',
                    bgcolor: '#252B42',
                    width: 32,
                    height: 32,
                  }}
                ></Box>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={2} mt={8}>
                <AppButton variant="contained" size="large">
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
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default ProductPreview;
