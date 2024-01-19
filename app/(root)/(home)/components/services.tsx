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
        <Grid container spacing={2} py={6}>
          {services.map((service) => (
            <Grid key={service.id} item xs={4}>
              <ServiceCard service={service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
