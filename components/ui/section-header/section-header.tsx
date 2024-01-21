import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  subTitle: string;
  description?: string;
};

const SectionHeader = ({ title, subTitle, description }: Props) => {
  return (
    <Stack py={2} direction="column" justifyContent="center" alignItems="center">
      <Typography variant="h6" fontWeight={500}>
        {subTitle}
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textTransform="uppercase"
        marginTop={1}
      >
        {title}
      </Typography>
      {description && (
        <Typography variant="inherit" marginTop={1}>
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default SectionHeader;
