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
      <Container maxWidth="lg">
        <Box
          display="grid"
          gridTemplateColumns="repeat(3, minmax(0, 1fr))"
          gap={2}
          py={4}
          sx={{ aspectRatio: '16 / 9' }}
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
