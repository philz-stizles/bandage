'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const FooterBottom = () => {
  return (
    <Box
      sx={{
        py: 4,
        backgroundColor: '#FAFAFA',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          component="p"
          variant="body2"
          color="#737373"
          fontWeight={600}
          sx={{
            textAlign: {
              md: 'left',
              xs: 'center',
            },
            px: {
              md: 0,
              xs: 2,
            },
          }}
        >
          Made With Love By Finland. All Right Reserved
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterBottom;
