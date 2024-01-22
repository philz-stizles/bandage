'use client';

import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TimerOutlined from '@mui/icons-material/TimerOutlined';
import LegendToggleOutlined from '@mui/icons-material/LegendToggleOutlined';
import ChevronRightOutlined from '@mui/icons-material/ChevronRightOutlined';
import { Post } from '@/models/post';
import { AppButton } from '..';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  const theme = useTheme();

  return (
    <Card>
      <Box position="relative">
        <CardMedia
          component="img"
          height="300"
          image={post.image}
          alt={post.title}
        />
        <Typography
          textTransform="uppercase"
          fontWeight={600}
          position="absolute"
          bgcolor={theme.palette.error.main}
          borderRadius={1}
          color="#fff"
          py={0.2}
          px={1.6}
          sx={{
            left: '20px',
            top: '20px',
          }}
        >
          New
        </Typography>
      </Box>
      <CardContent
        sx={{
          px: 3.2,
          pt: 3.2,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1.4} mb={1}>
          {post.tags.map((tag, i) => (
            <Typography
              key={tag}
              color={i === 0 ? theme.palette.primary.light : ''}
              variant="body1"
              fontWeight={300}
              component="small"
            >
              {tag}
            </Typography>
          ))}
        </Stack>
        <Typography
          gutterBottom
          variant="h5"
          color="#252B42"
          fontWeight={300}
          component="div"
        >
          {post.title}
        </Typography>
        <Typography variant="body1" fontWeight={400} color="#737373" mb={3.2}>
          {post.content}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={3.2}
        >
          <Typography
            variant="body2"
            fontWeight={300}
            color="#737373"
            display="flex"
            alignItems="center"
            gap={0.8}
          >
            <TimerOutlined color="primary" fontSize="small" />
            {post.createdAt}
          </Typography>
          <Typography
            variant="body2"
            fontWeight={300}
            color="#737373"
            display="flex"
            alignItems="center"
            gap={0.8}
          >
            <LegendToggleOutlined color="secondary" fontSize="small" />
            {post.comments.length} comments
          </Typography>
        </Stack>
        <AppButton size="small" color="inherit">
          Learn More <ChevronRightOutlined color="primary" />
        </AppButton>
      </CardContent>
    </Card>
  );
};

export default PostCard;
