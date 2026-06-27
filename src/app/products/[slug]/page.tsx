import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import { getProductBySlug } from '@/lib/products';
import { products } from '@/data/products';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  if (!product) {
    return {
      title: 'Không tìm thấy sản phẩm | FreshFoodStore',
    };
  }
  return {
    title: `${product.name} | FreshFoodStore`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const getCategoryName = (slug: string) => {
    switch (slug) {
      case 'rau-cu': return 'Rau củ';
      case 'trai-cay': return 'Trái cây';
      case 'thit-ca': return 'Thịt & Cá';
      case 'trung': return 'Trứng';
      case 'do-uong': return 'Đồ uống';
      case 'hai-san': return 'Hải sản';
      case 'do-dong-lanh': return 'Đồ đông lạnh';
      case 'nam': return 'Nấm';
      case 'gia-vi': return 'Gia vị';
      case 'snacks': return 'Snacks';
      case 'dau-thuc-vat': return 'Dầu thực vật';
      default: return slug;
    }
  };

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
        {/* Breadcrumb banner */}
        <div 
          className="relative bg-cover bg-center py-12 px-4 md:px-0 text-white"
          style={{
            backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1200&auto=format&fit=crop&q=80')"
          }}
        >
          <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <h2 className="text-xl font-bold tracking-wide">Chi Tiết Sản Phẩm</h2>
            
            {/* Breadcrumb Links */}
            <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-300 font-medium">
              <Link href="/" className="hover:text-white transition-colors">Trang chủ</Link>
              <ChevronRight size={14} className="text-gray-500" />
              <Link href="/category" className="hover:text-white transition-colors">Danh mục</Link>
              <ChevronRight size={14} className="text-gray-500" />
              <Link href={`/category?cat=${product.categorySlug}`} className="hover:text-white transition-colors">
                {getCategoryName(product.categorySlug)}
              </Link>
              <ChevronRight size={14} className="text-gray-500" />
              <span className="text-white font-bold">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="max-w-[1200px] mx-auto py-12 px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-start">
            {/* Gallery Column */}
            <div className="w-full">
              <ProductGallery 
                images={product.images || [product.image]} 
                thumbnails={product.thumbnails || [product.image]} 
                name={product.name} 
              />
            </div>

            {/* Info Column */}
            <div className="w-full">
              <ProductInfo product={product} />
            </div>
          </div>

          {/* Product Tabs Section */}
          <div className="mt-16">
            <ProductTabs product={product} />
          </div>

          {/* Related Products Section */}
          <RelatedProducts product={product} />
        </div>
      </main>

      {/* Newsletter */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
