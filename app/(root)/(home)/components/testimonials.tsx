'use client';

import Image from 'next/image';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

const Testimonials = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8} pb={6}>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              py={2.8}
            >
              <Typography variant="h5" fontWeight="bold" mb={7.2}>
                What they say about us
              </Typography>
              <Avatar
                alt="Regina Miles"
                src="/images/avatar.jpg"
                sx={{ width: 100, height: 100, mb: 2 }}
              />
              <Rating name="read-only" value={4} readOnly sx={{ mb: 2.4 }} />
              <Typography
                variant="body1"
                textAlign="center"
                fontWeight={600}
                mb={3.2}
                maxWidth="80%"
              >
                Slate helps you see how many more days you need to work to reach
                your financial goal.
              </Typography>
              <Typography
                variant="body1"
                fontWeight={600}
                textAlign="center"
                color={theme.palette.primary.main}
                mb={0.4}
              >
                Regina Miles
              </Typography>
              <Typography variant="body1" fontWeight={600} textAlign="center">
                Designer
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageList gap={16} sx={{ minWidth: 500, minHeight: 500 }} cols={3}>
              {itemData.map((item) => (
                <ImageListItem key={item} sx={{ position: 'relative' }}>
                  <Image fill src={item} alt="Item" loading="lazy" style={{
                    objectFit: 'cover'
                  }} />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const itemData = [
  '/images/unsplash_0y8p69vwIYM.png',
  '/images/unsplash_ah7yIXWrtKs.png',
  '/images/unsplash_6_dx4H4yi1Y.png',
  '/images/unsplash_GHztzvLLOdQ.png',
  '/images/unsplash_UUTOuXqaExk.png',
  '/images/unsplash_rhn8ff1G_QY.png',
  '/images/unsplash_jo40QKbxUP0.png',
  '/images/unsplash_QLGA5Zv3doo.png',
  '/images/unsplash_1R1ecHV4i0Y.png',
];

export default Testimonials;
