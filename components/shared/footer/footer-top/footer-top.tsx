'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import { Logo } from '@/components/ui';
import { usePathname } from 'next/navigation';

const FooterTop = () => {
  const pathname = usePathname();
  const isProductDetails = pathname.match(/^\/products\/\d+$/);

  return (
    <Box
      borderBottom="1px solid transparent"
      sx={{
        backgroundColor: isProductDetails ? 'transparent' : '#FAFAFA',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 7.2,
          borderBottom: `1px solid ${isProductDetails ? '#E6E6E6' : 'transparent'}`,
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Logo />
          <SocialIcons />
        </Stack>
      </Container>
    </Box>
  );
};

const SocialIcons = () => {
  return (
    <Stack direction="row" alignItems="center">
      <IconButton aria-label="facebook" color="primary">
        <FacebookRounded fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="facebook" color="primary">
        <Instagram fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="facebook" color="primary">
        <Twitter fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

export default FooterTop;
