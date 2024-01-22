'use client';

import { PropsWithChildren } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import MaterialLink from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import { AppButton } from '@/components/ui';

const FooterContent = () => {
  return (
    <Box
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container columns={16} spacing={6}>
          <Grid item xs={16} sm={8} md={4} lg={3}>
            <Menu
              title="Company Info"
              items={['About Us', 'Carrier', 'We Are Hiring', 'Blog']}
            />
          </Grid>
          <Grid item xs={16} sm={8} md={4} lg={3}>
            <Menu
              title="Legal"
              items={['About Us', 'Carrier', 'We Are Hiring', 'Blog']}
            />
          </Grid>
          <Grid item xs={16} sm={8} md={4} lg={3}>
            <Menu
              title="Features"
              items={[
                'Business Marketing',
                'User Analytics',
                'Live Chat',
                'Unlimited Support',
              ]}
            />
          </Grid>
          <Grid item xs={16} sm={8} md={4} lg={3}>
            <Menu
              title="Resources"
              items={['IOS & Android', 'Watch a Demo', 'Customers', 'API']}
            />
          </Grid>
          <Grid item xs={16} lg={4}>
            <Menu title="Get In Touch">
              <Subscribe />
            </Menu>
          </Grid>
        </Grid>
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
      <Typography variant="subtitle1" fontWeight={800} color="#252B42" mb={2.8}>
        {title}
      </Typography>
      {items && (
        <Stack component="ul" direction="column" spacing={1.8}>
          {items.map((item) => (
            <li key={item}>
              <MaterialLink
                component={Link}
                variant="subtitle2"
                fontWeight={700}
                color="#737373"
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

const Subscribe = () => {
  const handleSubscribe = () => {};

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row">
        <TextField
          id="email"
          placeholder="Your Email"
          label="Your Email"
          variant="outlined"
        />
        <AppButton
          variant="contained"
          color="primary"
          size="large"
          onClick={handleSubscribe}
        >
          Subscribe
        </AppButton>
      </Stack>
      <Typography
        variant="body2"
        component="small"
        color="#737373"
        fontWeight={300}
      >
        Lore imp sum dolor Amit
      </Typography>
    </Stack>
  );
};

export default FooterContent;
