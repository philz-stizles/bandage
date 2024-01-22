'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

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

 

export default Nav;
