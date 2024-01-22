'use client';

import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ChevronLeftOutlined from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import { Product } from '@/models/product';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

type Props = {
  product: Product;
};

const ProductGallery = ({ product }: Props) => {
  const [images, setImages] = useState<string[]>([]);
  const [activeImage, setActiveImage] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    setImages(
      !!product.images && product.images.length > 0
        ? product.images
        : [product.thumbnail]
    );
  }, [images, product]);

  const handleSelectImage = (index: number) => {
    setActiveImage(index);
  };

  const handleNextImage = () => {
    if (activeImage < images.length - 1) {
      setActiveImage((prevState) => prevState + 1);
    }
  };

  const handlePreviousImage = () => {
    if (activeImage > 0) {
      setActiveImage((prevState) => prevState - 1);
    }
  };

  const hasPreviousImage = activeImage > 0;
  const hasNextImage = activeImage < images.length - 1;

  return (
    <Stack direction="column" spacing={2.8}>
      <Box position="relative" width="100%" height={450}>
        <Image
          fill
          style={{ objectFit: 'cover' }}
          alt={product.title}
          src={images[activeImage]}
          loading="lazy"
        />
        <IconButton
          // disabled={!hasPreviousImage}
          sx={{
            color: '#FFFFFF',
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={hasPreviousImage ? handlePreviousImage : undefined}
        >
          <ChevronLeftOutlined color="inherit" fontSize="large" />
        </IconButton>
        <IconButton
          disabled={!hasNextImage}
          sx={{
            color: '#FFFFFF',
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          onClick={hasNextImage ? handleNextImage : undefined}
        >
          <ChevronRightOutlined fontSize="large" />
        </IconButton>
      </Box>

      <Box
        display="grid"
        gap={2.4}
        gridAutoFlow="column"
        justifyContent="flex-start"
        sx={{
          overflowX: 'auto',
        }}
      >
        {images.map((image, i) => (
          <Box
            position="relative"
            overflow="hidden"
            key={i}
            width={100}
            height={75}
            border="3px solid transparent"
            borderColor={
              activeImage === i ? theme.palette.secondary.main : 'transparent'
            }
          >
            <Image
              fill
              src={image}
              alt="thumbnail"
              loading="lazy"
              onClick={handleSelectImage.bind(null, i)}
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
