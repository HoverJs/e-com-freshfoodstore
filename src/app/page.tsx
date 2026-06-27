import React from 'react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceFeatures from '@/components/ServiceFeatures';
import PromoBanners from '@/components/PromoBanners';
import CategoryGrid from '@/components/CategoryGrid';
import ProductSection from '@/components/ProductSection';
import MiniProductLists from '@/components/MiniProductLists';
import VideoBanner from '@/components/VideoBanner';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Top Bar */}
      <TopBar />

      {/* 2. Header */}
      <Header />

      {/* 3. Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* 4. Hero Section */}
        <Hero />

        {/* 5. Service Features */}
        <ServiceFeatures />

        {/* 6. Promo Banners */}
        <PromoBanners />

        {/* 7. Category Grid */}
        <CategoryGrid />

        {/* 8. Product Section (Sản phẩm nổi bật) */}
        <ProductSection />

        {/* 10. Video Banner */}
        <VideoBanner />

        {/* 9. Mini Product Lists */}
        <MiniProductLists />

        {/* 11. Testimonial Section */}
        <Testimonials />
      </main>

      {/* 12. Newsletter Section */}
      <Newsletter />

      {/* 13. Footer */}
      <Footer />
    </div>
  );
}
