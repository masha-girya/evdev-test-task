import type { Metadata } from 'next';
import '@/styles/globals.scss';
import '@fontsource/tenor-sans';
import '@fontsource-variable/commissioner';

export const metadata: Metadata = {
  title: 'EvDev-Test',
  description: 'Created by Masha Girya',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
