'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import PhoneCallbackOutlined from '@mui/icons-material/PhoneCallbackOutlined';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/Twitter';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import PersonOutline from '@mui/icons-material/PersonOutlined';
import EmailOutlined from '@mui/icons-material/EmailOutlined';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Logo, CartButton, FavoritesButton } from '@/components/ui';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

const HeaderTop = () => {
  return (
    <div className={styles['header-top']}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={2.4}
        >
          <Stack direction="row" alignItems="center" spacing={2.4}>
            <Stack
              component={Link}
              href="#"
              direction="row"
              alignItems="center"
              spacing={0.4}
            >
              <PhoneCallbackOutlined />
              <Typography>(225) 555-0118</Typography>
            </Stack>
            <Stack
              component={Link}
              href="#"
              direction="row"
              alignItems="center"
              spacing={0.4}
            >
              <EmailOutlined />
              <Typography>michelle.rivera@example.com</Typography>
            </Stack>
          </Stack>
          <Typography>Follow Us and get the chance to win 80% off</Typography>
          <Stack
            direction="row"
            alignItems="center"
            spacing={0.8}
            className={styles['follow-us']}
          >
            <Typography>Follow Us : </Typography>
            <Stack
              component="ul"
              direction="row"
              alignItems="center"
              spacing={0.6}
            >
              <li>
                <Link href="#">
                  <Instagram />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <YouTube />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FacebookRounded />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Twitter />
                </Link>
              </li>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

const HeaderBottom = () => {
  return (
    <div className={styles['header-bottom']}>
      <Container maxWidth="xl">
        <Stack direction="row" alignItems="center" paddingX={2.4} spacing={8}>
          <Logo />
          <Nav />
          <HeaderActions />
        </Stack>
      </Container>
    </div>
  );
};

const Nav = () => {
  return (
    <Box component="nav" sx={{ flexGrow: 1 }}>
      <Stack component="ul" direction="row" alignItems="center" spacing={2.4}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/blog">Contact</Link>
        </li>
      </Stack>
    </Box>
  );
};

const HeaderActions = () => {
  return (
    <Stack
      className={styles['header-actions']}
      color="rgb(35, 166, 240)"
      direction="row"
      alignItems="center"
      spacing={2.4}
    >
      <Stack
        component={Link}
        direction="row"
        alignItems="center"
        spacing={0.6}
        href="#"
      >
        <PersonOutline />
        <Typography>Login / Register</Typography>
      </Stack>
      <Link href="#" className={styles.icon}>
        <SearchOutlined />
      </Link>
      <CartButton />
      <FavoritesButton />
    </Stack>
  );
};

export default Header;
