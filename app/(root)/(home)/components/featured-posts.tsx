'use client';

import { PostCard } from '@/components/ui';
import { Post } from '@/models/post';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <Box
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          py={4}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="subtitle2" fontWeight={600}>
            Practice Advice
          </Typography>

          <Typography variant="h4" fontWeight={700} marginTop={1}>
            Featured Posts
          </Typography>
        </Stack>
        <Grid container spacing={1.8} py={6}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={4}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedPosts;
