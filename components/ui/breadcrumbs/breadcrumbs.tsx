'use client';

import Link from 'next/link';
import MaterialLink from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

type Props = {
  links: string[];
};

const AppBreadcrumbs = ({ links }: Props) => {
  const handleClick = () => {};

  const breadcrumbs = links.map((link, i) => (
    <MaterialLink
      fontWeight={600}
      component={Link}
      underline="hover"
      key={`${i + 1}`}
      color="inherit"
      href="#"
      onClick={handleClick}
    >
      {link}
    </MaterialLink>
  ));

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      {breadcrumbs}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
