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
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          justifyContent="space-between"
          // gap={2}
        >
          {BRANDS.map((brand, i) => (
            <Image
              key={i}
              width={180}
              height={60}
              style={{ objectFit: 'contain', maxHeight: '75px', minHeight: '34px' }}
              src={brand}
              alt="brand"
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Brands;
