import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import './globals.css';
import { Footer, Header } from '@/components/shared';
import { Providers } from '@/lib/providers';
import { Stack } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <Header />
            <Stack component="main" flex={1}>{children}</Stack>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
