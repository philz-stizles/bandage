'use client';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { AppButton } from '@/components/ui';

const Cta = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 16,
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
          >
            <Typography
              variant="subtitle1"
              fontWeight={700}
              color={theme.palette.primary.main}
            >
              Designing Better Experience
            </Typography>
            <Typography
              variant="h3"
              fontWeight={700}
              color="#252B42"
              sx={{
                maxWidth: {
                  lg: '64%',
                  md: '72%',
                  sm: '80%',
                  xs: '100%',
                },
              }}
            >
              Problems trying to resolve the conflict between
            </Typography>
            <Typography
              variant="body1"
              fontWeight={400}
              color="#737373"
              sx={{
                maxWidth: {
                  lg: '68%',
                  md: '72%',
                  sm: '80%',
                  xs: '100%',
                },
              }}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics
            </Typography>
            <Typography
              variant="h5"
              fontWeight={800}
              color={theme.palette.secondary.main}
            >
              $16.48
            </Typography>
            <AppButton size="large" variant="contained">
              ADD YOUR CALL TO ACTION
            </AppButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Cta;
