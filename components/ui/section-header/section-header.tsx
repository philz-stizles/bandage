import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type Props = {
  title: string;
  subTitle: string;
  description?: string;
};

const SectionHeader = ({ title, subTitle, description }: Props) => {
  return (
    <Stack
      py={2}
      px={4}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h6"
        fontWeight={500}
        color="#737373"
        textAlign="center"
      >
        {subTitle}
      </Typography>

      <Typography
        variant="h5"
        fontWeight={700}
        textTransform="uppercase"
        marginTop={1}
        textAlign="center"
        color="#252B42"
      >
        {title}
      </Typography>
      {description && (
        <Typography
          variant="inherit"
          fontWeight={500}
          color="#737373"
          marginTop={1}
          textAlign="center"
        >
          {description}
        </Typography>
      )}
    </Stack>
  );
};

export default SectionHeader;
