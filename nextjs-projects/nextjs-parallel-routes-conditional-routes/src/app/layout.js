

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthWrapper from '@/components/auth-wrapper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Parallel Routes Auth Example',
  description: 'Learn Next.js Parallel Routes with Authentication',
};

export default function RootLayout({
  children,
  auth: authSlot,
  dashboard: dashboardSlot,
}) {


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {/* Client-side conditional rendering */}
        <AuthWrapper authSlot={authSlot} dashboardSlot={dashboardSlot} />

        {/* Main children - this could be used for modals, etc. */}
        {children}

      </body>
    </html>
  );
}
