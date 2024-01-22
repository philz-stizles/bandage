'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { SectionHeader, ServiceCard } from '@/components/ui';

type Props = {
  services: any[];
};

const Services = ({ services }: Props) => {
  return (
    <Box
      component="section"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">
        <SectionHeader
          title="The Best Services"
          subTitle="Featured Products"
          description="Problems trying to resolve the conflict between"
        />
        <Box
          display="grid"
          alignItems="flex-start"
          gap={8}
          pt={12}
          sx={{
            gridTemplateColumns: {
              md: 'repeat(3, minmax(0, 1fr))',
              sm: 'repeat(2, minmax(0, 1fr))',
              xs: 'repeat(1, minmax(0, 1fr))',
            },
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
