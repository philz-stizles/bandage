'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import PhoneOutlined from '@mui/icons-material/PhoneOutlined';
import Instagram from '@mui/icons-material/Instagram';
import YouTube from '@mui/icons-material/YouTube';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Twitter from '@mui/icons-material/Twitter';
import EmailOutlined from '@mui/icons-material/EmailOutlined';

const HeaderTop = () => {
  return (
    <Box
      component="section"
      bgcolor="rgb(36, 133, 109)"
      color="#fff"
      py={1.6}
      sx={{ display: { xs: 'none', md: 'block' } }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={2.4}
        >
          <Stack direction="row" alignItems="center" spacing={3.2}>
            <Stack
              component={Link}
              href="#"
              direction="row"
              alignItems="center"
              spacing={0.4}
            >
              <PhoneOutlined />
              <Typography fontWeight={600}>(225) 555-0118</Typography>
            </Stack>
            <Stack
              component={Link}
              href="#"
              direction="row"
              alignItems="center"
              spacing={0.4}
            >
              <EmailOutlined />
              <Typography fontWeight={600}>
                michelle.rivera@example.com
              </Typography>
            </Stack>
          </Stack>
          <Typography
            component="p"
            fontWeight={600}
            sx={{ display: { md: 'none', lg: 'block' } }}
          >
            Follow Us and get the chance to win 80% off
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1.6}>
            <Typography component="span" fontWeight={600}>
              Follow Us :{' '}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1.6}>
              <Link href="#">
                <Instagram fontSize="small" />
              </Link>
              <Link href="#">
                <YouTube fontSize="small" />
              </Link>
              <Link href="#">
                <FacebookRounded fontSize="small" />
              </Link>
              <Link href="#">
                <Twitter fontSize="small" />
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeaderTop;
