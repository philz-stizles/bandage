'use client';

import { useAppSelector } from '@/lib/redux/hooks';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const CartButton = () => {
  const cart = useAppSelector((state) => state.cart);

  return (
    <Stack component="button" direction="row" spacing={0.4}>
      <ShoppingCartOutlined />
      <Typography>{cart.totalQuantity}</Typography>
    </Stack>
  );
};

export default CartButton;
