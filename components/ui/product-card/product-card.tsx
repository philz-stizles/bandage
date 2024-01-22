'use client';

import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Product } from '@/models/product';

type Props = {
  isLoading?: boolean;
  product: Product;
};

const ProductCard = ({ isLoading = false, product }: Props) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isProductDetails = pathname.match(/^\/products\/\d+$/);

  return (
    <Card
      component={Link}
      href={`/products/${product?.id}`}
      sx={{ maxWidth: 345, border: 'none', borderRadius: 0, boxShadow: 'none' }}
    >
      {isLoading ? (
        <Skeleton
          sx={{ height: 240, width: '100%' }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
          component="img"
          image={product.thumbnail}
          alt={product.title}
          sx={{
            aspectRatio: '17/20',
          }}
        />
      )}
      <CardContent
        sx={{
          p: 3.2,
          backgroundColor: isProductDetails ? '#FFFFFF' : 'inherit',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isProductDetails ? 'flex-start' : 'center',
          overflow: 'hidden',
        }}
      >
        {isLoading ? (
          <Fragment>
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 8 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              width="60%"
              style={{ marginBottom: 12 }}
            />
            <Skeleton animation="wave" height={10} width="40%" />
          </Fragment>
        ) : (
          <Fragment>
            <Typography
              variant="subtitle1"
              fontWeight={700}
              marginBottom={0.6}
              color="#252B42"
              noWrap
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body1"
              textTransform="capitalize"
              color="#737373"
              fontWeight={600}
              marginBottom={1.2}
            >
              {product.category}
            </Typography>
            <Stack direction="row" spacing={0.8}>
              <Typography variant="body1" color="#BDBDBD" fontWeight={600}>
                ${product.price}
              </Typography>
              <Typography
                variant="body1"
                color={theme.palette.secondary.main}
                fontWeight={600}
              >
                ${product.price}
              </Typography>
            </Stack>
          </Fragment>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
