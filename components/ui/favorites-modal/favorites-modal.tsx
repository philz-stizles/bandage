'use client';

import { forwardRef } from 'react';
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
import { useAppSelector } from '@/lib/redux/hooks';
import { AppButton, FavoritesItem } from '..';
import {} from '@/lib/redux/slices/wish-list-slice';
import { useWishList } from '@/hooks/use-wish-list';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FavoritesModal = () => {
  const { isOpen, onClose } = useWishList();
  const wishList = useAppSelector((state) => state.wishList);

  const wishListIsEmpty = wishList.length <= 0;

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
      <DialogTitle id="scroll-dialog-title">Wish List</DialogTitle>
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
        {wishListIsEmpty ? (
          <Typography
            component="p"
            variant="h6"
            fontWeight={500}
            pb={2}
            textAlign="center"
          >
            Your wish list is empty
          </Typography>
        ) : (
          <Stack spacing={4.8} pb={2}>
            {wishList.map((item) => (
              <FavoritesItem key={item.id} item={item} />
            ))}
          </Stack>
        )}
      </DialogContent>
      <DialogActions>
        <AppButton disabled={wishListIsEmpty} variant="outlined">
          Clear
        </AppButton>
      </DialogActions>
    </Dialog>
  );
};

export default FavoritesModal;
