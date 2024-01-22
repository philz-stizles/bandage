'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CategoryCard } from '@/components/ui';
import { Category } from '@/models/category';

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
      <Container
        maxWidth={false}
        sx={{
          maxWidth: '1320px',
        }}
      >
        <Box
          display="grid"
          gap={2}
          py={4}
          sx={{
            aspectRatio: {
              md: '16 / 9',
              sm: '9 / 9',
              xs: "9/24"
            },
            gridTemplateColumns: {
              md: 'repeat(3, minmax(0, 1fr))',
              sm: 'repeat(2, minmax(0, 1fr))',
              xs: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          {categories.slice(0, 4).map((category, i) => (
            <CategoryCard key={category.id} index={i} category={category} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
