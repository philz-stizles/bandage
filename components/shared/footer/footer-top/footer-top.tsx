'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import { Logo } from '@/components/ui';

const FooterTop = () => {
  return (
    <Box
      sx={{
        py: 7.2,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Container maxWidth="lg">
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
