import Image from 'next/image';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Category } from '@/models/category';

type Props = {
  index: number;
  category: Category;
};

const CategoryCard = ({ index: i, category }: Props) => {
  return (
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
        style={{ objectFit: 'cover' }}
        alt={category.name}
      />
      <Stack
        p={3.2}
        spacing={0.8}
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        <Typography component="small">{category.items} items</Typography>
        <Typography variant="h4" textTransform="uppercase" fontWeight={500}>
          {category.name}
        </Typography>
        <Typography>Read More</Typography>
      </Stack>
    </Box>
  );
};

export default CategoryCard;
