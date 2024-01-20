'use client';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Service } from '@/models/service';
import Image from 'next/image';

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
      <Image height={100} width={100} src={service.icon} alt={service.title} />
      <Typography variant="h5" fontWeight={700} noWrap>
        {service.title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        textAlign="center"
        maxWidth="72%"
      >
        {service.description}
      </Typography>
    </Stack>
  );
};

export default ServiceCard;
