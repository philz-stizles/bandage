'use client';

import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useCart } from '@/hooks/use-cart';
import { useAppSelector } from '@/lib/redux/hooks';


const CartButton = () => {
  const { onOpen } = useCart();
  const cart = useAppSelector((state) => state.cart);

  return (
    <IconButton
      color="primary"
      onClick={() => {
        onOpen();
      }}
    >
      <ShoppingCartOutlined fontSize="medium" />
      <Typography ml={0.2}>{cart.totalQuantity}</Typography>
    </IconButton>
  );
};

export default CartButton;
