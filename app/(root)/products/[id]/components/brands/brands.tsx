'use client';

import Image from 'next/image';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import BRANDS from '@/data/brands';

const Brands = () => {
  return (
    <Box
      bgcolor="#fafafa"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="grid"
          gap={6}
          sx={{
            gridTemplateColumns: {
              md: 'repeat(6, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
              xs: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          {BRANDS.map((brand, i) => (
            <Box key={i} width="100%" height={60} position="relative">
              <Image
                fill
                style={{
                  objectFit: 'contain',
                  maxHeight: '75px',
                  minHeight: '34px',
                }}
                src={brand}
                alt="brand"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Brands;
