import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Ariel',
  },
  palette: {
    primary: {
      main: '#23A6F0',

      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#23856D',
    },
    success: {
      main: '#2DC071',
    },
    error: {
      main: '#E74040',
    },
  },
});

export default theme;
