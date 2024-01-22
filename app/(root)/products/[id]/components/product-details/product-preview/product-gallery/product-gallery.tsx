'use client';

import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Product } from '@/models/product';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

type Props = {
  product: Product;
};

const ProductGallery = ({ product }: Props) => {
  const [activeImage, setActiveImage] = useState(
    !!product.images && product.images.length > 0
      ? product.images[0]
      : product.thumbnail
  );
  const theme = useTheme();

  const handleSelectImage = (selectedImage: string) => {
    setActiveImage(selectedImage);
  };

  return (
    <Stack direction="column" spacing={2.8}>
      <Box position="relative" width="100%" height={450}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          alt={product.title}
          src={activeImage}
          loading="lazy"
        />
      </Box>

      <Box
        display="grid"
        gap={2.8}
        gridAutoFlow="column"
        justifyContent="flex-start"
        sx={{
          overflowX: 'auto',
        }}
      >
        {product.images.map((image, i) => (
          <Box
            position="relative"
            overflow="hidden"
            key={i}
            width={100}
            height={75}
            border="3px solid transparent"
            borderColor={
              image === activeImage
                ? theme.palette.secondary.main
                : 'transparent'
            }
          >
            <Image
              fill
              src={image}
              alt="thumbnail"
              loading="lazy"
              onClick={handleSelectImage.bind(null, image)}
              style={{
                cursor: 'pointer',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default ProductGallery;
