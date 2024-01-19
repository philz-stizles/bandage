'use client';

import { Category } from '@/models/category';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Image from 'next/image';

type Props = {
  categories: Category[];
};

const Categories = ({ categories }: Props) => {
  return (
    <Box
      component="section"
      sx={{
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          gap={2}
          py={4}
          sx={{ aspectRatio: '16 / 9' }}
        >
          {categories.slice(0, 4).map((category, i) => (
            <Box
              key={category.id}
              position="relative"
              overflow="hidden"
              gridRow={i === 0 ? 'span 2' : 'span 1'}
              maxHeight={i === 1 ? '24rem' : 'inherit'}
              gridColumn={i === 1 ? 'span 2' : 'span 1'}
            >
              <Image
                fill
                src={category.image}
                objectFit="cover"
                alt={category.name}
              />
            </Box>
          ))}
          {/* <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 8">
            <Item>xs=8</Item>
          </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
