'use client';

import Link from 'next/link';
import Typography from '@mui/material/Typography';


const Logo = () => {
  return (
    <Typography variant="h5" fontWeight={700} component={Link} href="/">
      Bandage
    </Typography>
  );
};

export default Logo;
