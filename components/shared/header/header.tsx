'use client';

import Stack from '@mui/material/Stack';
import HeaderTop from './header-top/header-top';
import HeaderBottom from './header-bottom/header-bottom';

const Header = () => {
  return (
    <Stack component="header">
      <HeaderTop />
      <HeaderBottom />
    </Stack>
  );
};

export default Header;
