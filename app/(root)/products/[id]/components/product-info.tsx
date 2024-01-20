'use client';

import { useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Product } from '@/models/product';



interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    centered
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    // display: 'flex',
    // justifyContent: 'center',
    // backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    // maxWidth: 40,
    // width: '100%',
    backgroundColor: 'red',
  },
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 8 }}>{children}</Box>}
    </div>
  );
}

type Props = {
  product: Product;
};

enum TabState {
  description,
  additional_info,
  reviews,
}

const ProductInfo = ({ product }: Props) => {
  const [value, setValue] = useState(TabState.description);

  const handleChange = (_: React.SyntheticEvent, newValue: TabState) => {
    setValue(newValue);
  };

  return (
    <Box component="section">
      <Container maxWidth="lg">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="product info tabs"
            
          >
            <Tab
              sx={{
                fontSize: 16,
                fontWeight: value === TabState.description ? 400 : 600,
                textTransform: 'capitalize',
              }}
              value={TabState.description}
              label="Description"
              wrapped
            />
            <Tab
              sx={{
                fontSize: 16,
                fontWeight: value === TabState.additional_info ? 400 : 600,
                textTransform: 'capitalize',
              }}
              value={TabState.additional_info}
              label="Additional Information"
              wrapped
            />
            <Tab
              sx={{
                fontSize: 16,
                fontWeight: value === TabState.reviews ? 400 : 600,
                textTransform: 'capitalize',
              }}
              value={TabState.reviews}
              label="Reviews (0)"
              wrapped
            />
          </StyledTabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Box>
              <Typography variant="h5" fontWeight={600} mb={4.8}>
                the quick fox jumps over
              </Typography>
              <Typography variant="body1" mb={4} maxWidth="513px">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>

              <Typography
                variant="body1"
                mb={4}
                maxWidth="513px"
                borderLeft="4px solid green"
                pl={4}
              >
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>

              <Typography variant="body1" maxWidth="513px">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </Typography>
            </Box>

            <Image
              src={product.thumbnail}
              alt=""
              width={427}
              height={392}
              loading="lazy"
            />
          </Stack>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Item Three
        </CustomTabPanel>
      </Container>
    </Box>
  );
};

export default ProductInfo;
