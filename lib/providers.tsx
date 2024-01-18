'use client';

import StoreProvider from '@/lib/redux/store-provider';

export const Providers = (props: React.PropsWithChildren) => {
  return <StoreProvider>{props.children}</StoreProvider>;
};
