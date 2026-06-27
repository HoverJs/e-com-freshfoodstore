import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Providers from '@/components/Providers';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'FreshFoodStore | Fresh Food & Organic Grocery',
  description:
    'FreshFoodStore là cửa hàng thực phẩm sạch, rau củ, trái cây và nông sản tươi ngon mỗi ngày với tiêu chuẩn chất lượng cao nhất.',
  keywords:
    'FreshFoodStore, thực phẩm sạch, rau củ hữu cơ, trái cây tươi ngon, nông sản sạch, thịt cá tươi sống',
  openGraph: {
    title: 'FreshFoodStore | Fresh Food & Organic Grocery',
    description: 'Cửa hàng thực phẩm sạch, rau củ hữu cơ, trái cây tươi ngon mỗi ngày.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-dark">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
