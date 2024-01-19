'use client';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Categories = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
          <Box gridColumn="span 8">
            <Item>xs=8</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item>xs=4</Item>
          </Box>
          <Box gridColumn="span 8">
            <Item>xs=8</Item>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Categories;
