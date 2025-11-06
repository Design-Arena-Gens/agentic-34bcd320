import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hi - Welcome',
  description: 'A friendly welcome page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
