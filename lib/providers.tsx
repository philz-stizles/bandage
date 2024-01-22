'use client';

import ReduxProvider from '@/lib/redux/redux-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { StorageProvider } from '@/lib/redux/storage-provider';
import { MaterialProvider } from '@/lib/mui/material-provider';

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <ReduxProvider>
      <StorageProvider>
        <MaterialProvider>
          <ModalProvider />
          {props.children}
        </MaterialProvider>
      </StorageProvider>
    </ReduxProvider>
  );
};
