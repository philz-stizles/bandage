'use client';

import { Fragment, PropsWithChildren, useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { initializeCart } from './slices/cart-slice';
import { initializeWishlist } from './slices/wish-list-slice';

export const StorageProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeCart());
    dispatch(initializeWishlist());
  }, [dispatch]);

  return <Fragment>{children}</Fragment>;
};
