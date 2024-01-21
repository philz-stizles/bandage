'use client';

import { ThemeProvider } from '@mui/material/styles';
import ReduxProvider from '@/lib/redux/store-provider';
import theme from '@/lib/mui/theme';
import { ModalProvider } from '@/components/providers/modal-provider';
import { StorageProvider } from '@/lib/redux/storage-provider';

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ReduxProvider>
      <StorageProvider>
        <ThemeProvider theme={theme}>
          <ModalProvider />
          {props.children}
        </ThemeProvider>
      </StorageProvider>
    </ReduxProvider>
  );
};
