'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MaterialLink from '@mui/material/Link';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FacebookRounded from '@mui/icons-material/FacebookRounded';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import { AppButton, Logo } from '@/components/ui';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <FooterHeader />
      <FooterContent />
      <FooterFooter />
    </footer>
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



const Subscribe = () => {
  const handleSubscribe = () => {};

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Input placeholder="Your Email" />
        <AppButton
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubscribe}
        >
          Subscribe
        </AppButton>
      </Stack>
      <Typography></Typography>
    </Stack>
  );
};

const FooterHeader = () => {
  return (
    <Box
      sx={{
        py: 6,
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

const FooterContent = () => {
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between">
          <Menu
            title="Company Info"
            items={['About Us', 'Carrier', 'We Are Hiring', 'Blog']}
          />
          <Menu
            title="Legal"
            items={['About Us', 'Carrier', 'We Are Hiring', 'Blog']}
          />
          <Menu
            title="Features"
            items={[
              'Business Marketing',
              'User Analytics',
              'Live Chat',
              'Unlimited Support',
            ]}
          />
          <Menu
            title="Resources"
            items={['IOS & Android', 'Watch a Demo', 'Customers', 'API']}
          />
          <Menu title="Get In Touch">
            <Subscribe />
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
};

const FooterFooter = () => {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Container maxWidth="lg">
        <Typography component="small" variant="body2">
          Made With Love By Finland. All Right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

const Menu = ({
  title,
  items,
  children,
}: PropsWithChildren<{ title: string; items?: string[] }>) => {
  return (
    <Stack direction="column">
      <Typography variant="subtitle1" gutterBottom>
        {title}
      </Typography>
      {items && (
        <Stack component="ul" direction="column" spacing={1.2}>
          {items.map((item) => (
            <li key={item}>
              <MaterialLink
                component={Link}
                variant="body2"
                color="inherit"
                underline="none"
                href="#"
              >
                {item}
              </MaterialLink>
            </li>
          ))}
        </Stack>
      )}
      {children}
    </Stack>
  );
};

export default Footer;
