import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TimerOutlined from '@mui/icons-material/TimerOutlined';
import { Post } from '@/models/post';
import { ChevronRightOutlined } from '@mui/icons-material';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={post.image}
        alt={post.title}
      />
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={1.4} mb={1}>
          {post.tags.map((tag) => (
            <Typography key={tag} variant="body2" component="small">
              {tag}
            </Typography>
          ))}
        </Stack>
        <Typography gutterBottom variant="h6" fontWeight={300} component="div">
          {post.title}
        </Typography>
        <Typography
          variant="body1"
          fontWeight={300}
          color="text.secondary"
          mb={2}
        >
          {post.content}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
            gap={0.8}
          >
            <TimerOutlined />
            {post.createdAt}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            display="flex"
            alignItems="center"
          >
            {post.comments.length} comments
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Learn More <ChevronRightOutlined />
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
