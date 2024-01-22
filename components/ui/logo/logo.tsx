'use client';

import Link from 'next/link';
import Typography from '@mui/material/Typography';


const Logo = () => {
  return (
    <Typography variant="h4" fontWeight={600} component={Link} href="/">
      Bandage
    </Typography>
  );
};

export default Logo;
