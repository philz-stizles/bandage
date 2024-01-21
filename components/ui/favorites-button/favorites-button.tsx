'use client';

import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useWishList } from '@/hooks/use-wish-list';
import { useAppSelector } from '@/lib/redux/hooks';

const FavoritesButton = () => {
  const { onOpen } = useWishList();
  const wishList = useAppSelector((state) => state.wishList);

  return (
    <IconButton
      color="primary"
      onClick={() => {
        onOpen();
      }}
    >
      <FavoriteBorderOutlined fontSize="medium" />
      <Typography ml={0.2}>{wishList.length}</Typography>
    </IconButton>
  );
};

export default FavoritesButton;
