'use client';

import { AppButton } from '@/components/ui';
import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Cta = () => {
  return (
    <Box
      sx={{
        py: 12,
        backgroundImage: 'url(/images/background.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            spacing={4}
            maxWidth="54%"
          >
            <Typography
              variant="subtitle1"
              fontWeight={500}
              color="rgb(35, 166, 240)"
            >
              Designing Better Experience
            </Typography>
            <Typography variant="h3" fontWeight={600}>
              Problems trying to resolve the conflict between
            </Typography>
            <Typography variant="body1">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </Typography>
            <Typography variant="h6" fontWeight={600} color="rgb(36, 133, 109)">
              $16.48
            </Typography>
            <AppButton variant="contained">ADD YOUR CALL TO ACTION</AppButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Cta;
