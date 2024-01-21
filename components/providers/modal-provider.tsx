'use client';

import { useEffect, useState } from 'react';
import { CartModal, FavoritesModal } from '../ui';

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CartModal />
      <FavoritesModal />
    </>
  );
};
