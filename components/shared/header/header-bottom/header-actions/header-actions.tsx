'use client';

import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import PersonOutline from '@mui/icons-material/PersonOutlined';
import SortIcon from '@mui/icons-material/Sort';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { CartButton, FavoritesButton } from '@/components/ui';

const HeaderActions = ({
  onToggleNavigation,
}: {
  onToggleNavigation: () => void;
}) => {
  const theme = useTheme();
  return (
    <Stack direction="row" alignItems="center" spacing={3.2}>
      <Stack
        component={Link}
        direction="row"
        alignItems="center"
        spacing={0.6}
        href="#"
        color={theme.palette.primary.main}
        sx={{
          display: { xs: 'none', lg: 'inline-flex' },
        }}
      >
        <PersonOutline fontSize="small" />
        <Typography fontWeight={600}>Login / Register</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          color="primary"
          sx={{
            display: { xs: 'none', lg: 'inline-flex' },
          }}
        >
          <SearchOutlined fontSize="medium" />
        </IconButton>
        <CartButton />
        <FavoritesButton />
        <IconButton
          onClick={onToggleNavigation}
          color="primary"
          sx={{
            transform: 'rotateY(180deg)',
            display: { lg: 'none', xs: 'inline-flex' },
          }}
        >
          <SortIcon fontSize="medium" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default HeaderActions;
