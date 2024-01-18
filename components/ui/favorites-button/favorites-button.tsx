import { useAppSelector } from '@/lib/redux/hooks';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

const FavoritesButton = () => {
  const wishList = useAppSelector((state) => state.wishList);

  return (
    <Stack component="button" direction="row" spacing={0.4}>
      <FavoriteBorderOutlined />
      <Typography>{wishList.length}</Typography>
    </Stack>
  );
};

export default FavoritesButton;
