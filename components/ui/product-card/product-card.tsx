import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Product } from '@/models/product';
import { Stack } from '@mui/material';
import Link from 'next/link';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card
      component={Link}
      href={`/${product.id}`}
      sx={{ maxWidth: 345, border: 'none', borderRadius: 0, boxShadow: 'none' }}
    >
      <CardMedia
        component="img"
        height="240"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle1"
          fontWeight={700}
          marginBottom={0.6}
          noWrap
        >
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" marginBottom={1.2}>
          {product.category}
        </Typography>
        <Stack direction="row" spacing={0.4}>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>
            ${product.price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
