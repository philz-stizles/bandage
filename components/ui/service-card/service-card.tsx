import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Service } from '@/models/service';

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Card sx={{ border: 'none', borderRadius: 0, boxShadow: 'none' }}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Typography variant="h5" fontWeight={700} noWrap>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
