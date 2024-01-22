'use client';

import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Logo } from '@/components/ui';
import Nav from './nav/nav';
import NavMobile from './nav-mobile/nav-mobile';
import HeaderActions from './header-actions/header-actions';

const HeaderBottom = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
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
            <HeaderActions
              onToggleNavigation={() => setIsOpen((prevState) => !prevState)}
            />
          </Stack>
        </Container>
      </Box>
      {isOpen && <NavMobile />}
    </Fragment>
  );
};

export default HeaderBottom;
