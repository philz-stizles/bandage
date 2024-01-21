'use client';

import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from '@/lib/redux/hooks';
import { Product } from '@/models/product';
import { removeFromWishList } from '@/lib/redux/slices/wish-list-slice';

type Props = {
  item: Product;
};

const FavoritesItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <Stack direction="row" spacing={4.8}>
      <Box position="relative" width={64} height={64}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          src={item.thumbnail}
          alt={item.title}
        />
      </Box>
      <Stack direction="column">
        <Typography component="span">{item.title}</Typography>
        <Typography component="span">${item.price}</Typography>
      </Stack>
      <Stack
        flexGrow={1}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-start"
        spacing={0.8}
      >
        <IconButton color="error" onClick={() => dispatch(removeFromWishList(item.id))}>
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default FavoritesItem;
