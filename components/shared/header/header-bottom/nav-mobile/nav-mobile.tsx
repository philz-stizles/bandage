'use client';

import Link from 'next/link';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PersonOutline from '@mui/icons-material/PersonOutlined';

const NavMobile = () => {
     const theme = useTheme();

  return (
    <Box
      borderBottom="1px solid #E6E6E6"
      py={4.2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3.2}
      component="nav"
      sx={{
        display: { lg: 'none', xs: 'flex' },
      }}
    >
      <Stack
        component="ul"
        direction="column"
        alignItems="center"
        spacing={3.2}
        color="#737373"
        sx={{
          display: { md: 'none', xs: 'flex' },
        }}
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
      <Stack
        component={Link}
        direction="row"
        alignItems="center"
        spacing={0.6}
        href="#"
        color={theme.palette.primary.main}
        sx={{
          display: { lg: 'none', xs: 'inline-flex' },
        }}
      >
        <PersonOutline fontSize="small" />
        <Typography fontWeight={600}>Login / Register</Typography>
      </Stack>
    </Box>
  );
};

export default NavMobile;
