'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import PersonOutline from '@mui/icons-material/PersonOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SortIcon from '@mui/icons-material/Sort';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Logo, CartButton, FavoritesButton } from '@/components/ui';
import { useTheme } from '@mui/material/styles';

const HeaderBottom = () => {
  return (
    <Box
      component="section"
      py={3.2}
      sx={{
        borderBottom: '1px solid #E6E6E6',
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            gap: {
              lg: 18,
              md: 10,
              xs: 8,
            },
          }}
        >
          <Logo />
          <Nav />
          <HeaderActions />
        </Stack>
      </Container>
    </Box>
  );
};

const Nav = () => {
  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        display: { md: 'inline-flex', xs: 'none' },
      }}
    >
      <Stack
        component="ul"
        direction="row"
        alignItems="center"
        spacing={3.2}
        color="#737373"
      >
        <Typography component="li" fontWeight={600}>
          <Link href="/">Home</Link>
        </Typography>
        <Typography
          component="li"
          display="flex"
          alignItems="center"
          gap={0.2}
          fontWeight={600}
        >
          <Link href="/shop">Shop</Link>
          <ExpandMoreIcon />
        </Typography>
        <Typography component="li" fontWeight={600}>
          <Link href="/about">About</Link>
        </Typography>
        <Typography component="li" fontWeight={600}>
          <Link href="/blog">Blog</Link>
        </Typography>
        <Typography component="li" fontWeight={600}>
          <Link href="/blog">Contact</Link>
        </Typography>
      </Stack>
    </Box>
  );
};

const HeaderActions = () => {
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
        <IconButton color="primary">
          <SearchOutlined fontSize="medium" />
        </IconButton>
        <CartButton />
        <FavoritesButton />
        <IconButton
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

export default HeaderBottom;
