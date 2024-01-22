import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import Stack from '@mui/material/Stack';
import { Footer, Header } from '@/components/shared';
import { Providers } from '@/lib/providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bandage',
  description: 'An E-commerce platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html lang="en">
        <body className={inter.className} suppressHydrationWarning={true}>
          <AppRouterCacheProvider>
            <Header />
            <Stack component="main" flex={1}>
              {children}
            </Stack>
            <Footer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </Providers>
  );
}
