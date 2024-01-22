'use client';

import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Service } from '@/models/service';

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Image height={100} width={80} src={service.icon} alt={service.title} />
      <Typography variant="h5" color="#252B42" fontWeight={700} noWrap>
        {service.title}
      </Typography>
      <Typography
        variant="inherit"
        color="#737373"
        fontWeight={500}
        textAlign="center"
        sx={{
          maxWidth: {
            lg: '72%',
            xs: '100%',
          },
        }}
      >
        {service.description}
      </Typography>
    </Stack>
  );
};

export default ServiceCard;
