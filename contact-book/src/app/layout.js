'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';
import Header from '@/components/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// export const metadata = {
//   title: 'Contact Book',
//   description: 'A simple contact management application',
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
