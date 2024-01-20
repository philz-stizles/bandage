import { forwardRef, useEffect, useRef } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import { TransitionProps } from '@mui/material/transitions';
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { AppButton, CartItem } from '..';
import { useCart } from '@/hooks/use-cart';
import { clearCart } from '@/lib/redux/slices/cart-slice';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CartModal = () => {
  const { isOpen, onClose } = useCart();
  const descriptionElementRef = useRef<HTMLElement>(null);
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [isOpen]);

  const cartIsEmpty = cart.items.length <= 0;

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      fullWidth={true}
      maxWidth="sm"
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">Cart</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
      <DialogContent dividers>
        {cartIsEmpty ? (
          <Typography
            component="p"
            variant="h6"
            fontWeight={500}
            pb={2}
            textAlign="center"
          >
            Your cart is empty
          </Typography>
        ) : (
          <Stack spacing={4.8} pb={2}>
            {cart.items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </Stack>
        )}

        <Stack direction="row" justifyContent="space-between">
          <Typography component="span" fontWeight="bold" variant="h6">
            Total Amount
          </Typography>
          <Typography component="span" fontWeight="bold" variant="h6">
            {cart.totalPrice.toFixed(2)}
          </Typography>
        </Stack>
      </DialogContent>
      <DialogActions>
        <AppButton
          disabled={cartIsEmpty}
          variant="outlined"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </AppButton>
        <AppButton disabled={cartIsEmpty} variant="contained">
          Proceed to Checkout
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default CartModal;
