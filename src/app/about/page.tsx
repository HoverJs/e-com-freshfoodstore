import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

import AboutHero from '@/components/about/AboutHero';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import FastDelivery from '@/components/about/FastDelivery';
import PartnerLogos from '@/components/about/PartnerLogos';
import TeamSection from '@/components/about/TeamSection';
import TrustedStore from '@/components/about/TrustedStore';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';

export const metadata: Metadata = {
  title: 'Giới thiệu | FreshFoodStore',
  description:
    'Tìm hiểu về FreshFoodStore, cửa hàng thực phẩm tươi sạch với nguồn hàng tuyển chọn, giao nhanh và trải nghiệm mua sắm tiện lợi.',
};

export default function AboutPage() {
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
              <span className="font-semibold text-primary">Giới thiệu</span>
            </div>
          </div>
        </section>

        <AboutHero />
        <TrustedStore />
        <FastDelivery />
        <TeamSection />
        <AboutTestimonials />
        <PartnerLogos />
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
