'use client';

import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Category } from '@/models/category';

type Props = {
  index: number;
  category: Category;
};

const CategoryCard = ({ index: i, category }: Props) => {
  const theme = useTheme();

  return (
    <Box
      key={category.id}
      position="relative"
      overflow="hidden"
      sx={{
        gridRow: {
          md: i === 0 ? 'span 2' : 'span 1',
          xs: 'span 1',
        },
        gridColumn: {
          md: i === 1 ? 'span 2' : 'span 1',
          xs: 'span 1',
        },
        maxHeight: {
          md: i === 1 ? '24rem' : 'inherit',
          xs: 'inherit',
        },
      }}
    >
      <Image
        fill
        src={category.image}
        style={{ objectFit: 'cover' }}
        alt={category.name}
      />
      <Stack
        p={3.2}
        spacing={1.2}
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <Typography color={theme.palette.success.main} fontWeight={600}>
          {category.items} items
        </Typography>
        <Typography variant="h4" textTransform="uppercase" fontWeight={600}>
          {category.name}
        </Typography>
        <Typography fontWeight={600}>Read More</Typography>
      </Stack>
    </Box>
  );
};

export default CategoryCard;
