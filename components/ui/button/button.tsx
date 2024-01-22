import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';



const AppButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 'bold',
  // color: theme.palette.getContrastText(purple[500]),
  // backgroundColor: purple[500],
  // '&:hover': {
  //   backgroundColor: purple[700],
  // },
}));

export default AppButton;
