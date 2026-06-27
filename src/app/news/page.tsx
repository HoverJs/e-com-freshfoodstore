import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import FeaturedDeals from '@/components/news/FeaturedDeals';
import NewsHero from '@/components/news/NewsHero';
import PromoTimeline from '@/components/news/PromoTimeline';
import VoucherBoard from '@/components/news/VoucherBoard';

export const metadata: Metadata = {
  title: 'Tin tức ưu đãi | FreshFoodStore',
  description:
    'Theo dõi các deal, voucher và chương trình khuyến mãi mới nhất tại FreshFoodStore để mua thực phẩm tươi sạch tiết kiệm hơn.',
};

export default function NewsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden px-4 py-8 md:py-10">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about/about-banner.svg')" }}
          />
          <div className="absolute inset-0 -z-10 bg-dark/70" />

          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Home size={14} />
                <span>Trang chủ</span>
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="font-semibold text-primary">Tin tức</span>
            </div>
          </div>
        </section>

        <NewsHero />
        <FeaturedDeals />
        <VoucherBoard />
        <PromoTimeline />
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
