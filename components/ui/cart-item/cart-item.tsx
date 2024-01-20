import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartItem } from '@/models/cart';
import { useAppDispatch } from '@/lib/redux/hooks';
import { addToCart, removeFromCart } from '@/lib/redux/slices/cart-slice';

type Props = {
  item: CartItem;
};

const CartItem = ({ item: { product, quantity } }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={4.8}>
      <Box position="relative" width={64} height={64}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={product.thumbnail}
          alt={product.title}
        />
      </Box>
      <Stack direction="column">
        <Typography component="span">{product.title}</Typography>
        <Typography component="span">
          {quantity} x ${product.price}
        </Typography>
      </Stack>
      <Stack
        flexGrow={1}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={0.8}
      >
        <IconButton onClick={() => dispatch(addToCart(product))}>
          <AddIcon fontSize="small" />
        </IconButton>
        <IconButton onClick={() => dispatch(removeFromCart(product.id))}>
          <RemoveIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default CartItem;
