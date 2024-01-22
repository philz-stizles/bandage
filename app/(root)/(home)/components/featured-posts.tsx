'use client';

import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { PostCard } from '@/components/ui';
import { Post } from '@/models/post';

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  const theme = useTheme();

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
          <Typography
            variant="subtitle1"
            color={theme.palette.primary.main}
            fontWeight={600}
          >
            Practice Advice
          </Typography>

          <Typography variant="h3" fontWeight={600} marginTop={1}>
            Featured Posts
          </Typography>
        </Stack>
        <Grid container spacing={{ xs: 4, sm: 2 }} py={6}>
          {posts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <PostCard post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedPosts;
