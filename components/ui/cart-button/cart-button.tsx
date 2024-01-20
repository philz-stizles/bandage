'use client';

import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useCart } from '@/hooks/use-cart';
import { useAppSelector } from '@/lib/redux/hooks';

const CartButton = () => {
  const { onOpen } = useCart();

  const cart = useAppSelector((state) => state.cart);

  return (
    <Stack
      component="button"
      direction="row"
      spacing={0.4}
      onClick={() => {
        onOpen();
      }}
    >
      <ShoppingCartOutlined />
      <Typography>{cart.totalQuantity}</Typography>
    </Stack>
  );
};

export default CartButton;
