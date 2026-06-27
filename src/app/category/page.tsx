'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { 
  Home, 
  ChevronRight, 
  SlidersHorizontal, 
  X, 
  Star, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

import { products } from '@/data/products';
import { filterCategories, filterTags, saleProducts } from '@/data/filters';

function CategoryContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat');

  // States cho Bộ lọc & Sắp xếp
  const [selectedCategory, setSelectedCategory] = useState<string>('rau-cu');
  const [maxPrice, setMaxPrice] = useState<number>(1500000);
  const [selectedTags, setSelectedTags] = useState<string[]>(['Rau sạch']);
  const [sortBy, setSortBy] = useState<string>('latest');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // States cho accordion sidebar
  const [isCatOpen, setIsCatOpen] = useState<boolean>(true);
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);
  const [isTagsOpen, setIsTagsOpen] = useState<boolean>(true);

  // Cập nhật danh mục khi URL thay đổi (VD: Nhấn từ Homepage)
  useEffect(() => {
    if (catParam) {
      setSelectedCategory(catParam);
      // Đồng bộ tag mặc định phù hợp với danh mục để hiển thị đẹp
      if (catParam === 'rau-cu') {
        setSelectedTags(['Rau sạch']);
      } else if (catParam === 'trai-cay') {
        setSelectedTags(['Trái cây']);
      } else if (catParam === 'hai-san') {
        setSelectedTags(['Cá tươi']);
      } else {
        setSelectedTags([]);
      }
    } else {
      setSelectedCategory('rau-cu');
      setSelectedTags(['Rau sạch']);
    }
    setCurrentPage(1);
  }, [catParam]);

  // Helper format tiền tệ VNĐ
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  // Render sao cho sản phẩm sales
  const renderStars = (rating: number) => {
    const stars = [];
    const floor = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={12} 
          className={i <= floor ? 'fill-amber-400 text-amber-400' : 'text-gray-300'} 
        />
      );
    }
    return stars;
  };

  // Xử lý toggle tag
  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
    setCurrentPage(1); // Reset trang
  };

  // Logic lọc và sắp xếp sản phẩm
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Lọc theo danh mục
    if (selectedCategory && selectedCategory !== 'all') {
      result = result.filter(p => p.categorySlug === selectedCategory);
    }

    // 2. Lọc theo giá (50.000đ - maxPrice)
    result = result.filter(p => p.price >= 15000 && p.price <= maxPrice);

    // 3. Lọc theo tags (nếu có chọn tag)
    // Lưu ý: data mock đơn giản nên ta giả lập tag khớp với thuộc tính sản phẩm hoặc tên sản phẩm
    if (selectedTags.length > 0) {
      result = result.filter(p => {
        return selectedTags.some(tag => {
          if (tag === 'Rau sạch' && p.categorySlug === 'rau-cu') return true;
          if (tag === 'Trái cây' && p.categorySlug === 'trai-cay') return true;
          if (tag === 'Cá tươi' && p.categorySlug === 'hai-san') return true;
          if (tag === 'Healthy') return p.rating >= 4.5;
          if (tag === 'Vitamin') return p.rating >= 4.5;
          return p.name.toLowerCase().includes(tag.toLowerCase());
        });
      });
    }

    // 4. Sắp xếp
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'best-seller') {
      result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else {
      // Latest (Mặc định)
      result.sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [selectedCategory, maxPrice, selectedTags, sortBy]);

  // Phân trang giả lập (9 sản phẩm mỗi trang)
  const itemsPerPage = 9;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  // Sidebar Filter Component (Tái sử dụng cho cả desktop và mobile drawer)
  const FilterSidebarContent = () => (
    <div className="flex flex-col gap-5 text-left select-none">
      
      {/* Nút Lọc ở trên cùng */}
      <button 
        onClick={() => alert('Đã áp dụng các bộ lọc!')}
        className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-md w-fit cursor-pointer outline-none"
      >
        <span>Lọc</span>
        <SlidersHorizontal size={14} className="transform rotate-180" />
      </button>

      {/* Khối 1: Danh mục sản phẩm (Accordion) */}
      <div className="border-b border-border-light pb-5">
        <button
          onClick={() => setIsCatOpen(!isCatOpen)}
          className="w-full flex items-center justify-between text-sm font-bold text-dark mb-4 focus:outline-none cursor-pointer"
        >
          <span>Tất cả sản phẩm</span>
          <ChevronDown 
            size={16} 
            className={`text-dark transition-transform duration-300 ${isCatOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isCatOpen && (
          <div className="flex flex-col gap-3.5 transition-all duration-300">
            {/* Option "Tất cả danh mục" */}
            <label 
              onClick={() => { setSelectedCategory('all'); setSelectedTags([]); setCurrentPage(1); }}
              className="flex items-center gap-3 text-xs text-dark hover:text-primary cursor-pointer font-medium"
            >
              {selectedCategory === 'all' ? (
                <span className="w-4.5 h-4.5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                </span>
              ) : (
                <span className="w-4.5 h-4.5 rounded-full border border-gray-300 flex items-center justify-center shrink-0" />
              )}
              <span>Tất cả danh mục</span>
            </label>

            {/* Các danh mục mock */}
            {filterCategories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <label 
                  key={cat.id} 
                  onClick={() => { setSelectedCategory(cat.slug); setSelectedTags([]); setCurrentPage(1); }}
                  className="flex items-center justify-between text-xs text-dark hover:text-primary cursor-pointer font-medium"
                >
                  <div className="flex items-center gap-3">
                    {isSelected ? (
                      <span className="w-4.5 h-4.5 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </span>
                    ) : (
                      <span className="w-4.5 h-4.5 rounded-full border border-gray-300 flex items-center justify-center shrink-0" />
                    )}
                    <span>{cat.name}</span>
                  </div>
                  <span className="text-gray-400 font-normal">({products.filter(p => p.categorySlug === cat.slug).length})</span>
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Khối 2: Lọc mức giá (Accordion) */}
      <div className="border-b border-border-light pb-5">
        <button
          onClick={() => setIsPriceOpen(!isPriceOpen)}
          className="w-full flex items-center justify-between text-sm font-bold text-dark mb-4 focus:outline-none cursor-pointer"
        >
          <span>Mức Giá</span>
          <ChevronDown 
            size={16} 
            className={`text-dark transition-transform duration-300 ${isPriceOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isPriceOpen && (
          <div className="flex flex-col gap-4">
            {/* Custom slider track */}
            <div className="relative pt-1">
              <input
                type="range"
                min={50000}
                max={1500000}
                step={50000}
                value={maxPrice}
                onChange={(e) => { setMaxPrice(Number(e.target.value)); setCurrentPage(1); }}
                className="w-full h-1 bg-primary rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />
            </div>
            
            {/* Giá hiển thị ở dưới giống hệt design: "Giá từ: 50 - 1,500" */}
            <div className="text-xs text-dark font-medium text-left">
              Giá từ: <span className="font-extrabold text-dark">50 — {new Intl.NumberFormat('vi-VN').format(maxPrice / 1000)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Khối 3: Tag phổ biến (Accordion) */}
      <div className="border-b border-border-light pb-5">
        <button
          onClick={() => setIsTagsOpen(!isTagsOpen)}
          className="w-full flex items-center justify-between text-sm font-bold text-dark mb-4 focus:outline-none cursor-pointer"
        >
          <span>Phổ biến</span>
          <ChevronDown 
            size={16} 
            className={`text-dark transition-transform duration-300 ${isTagsOpen ? 'rotate-180' : ''}`} 
          />
        </button>

        {isTagsOpen && (
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => {
              const isActive = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-3.5 py-1.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${
                    isActive 
                      ? 'bg-primary text-white shadow-sm' 
                      : 'bg-bg-light hover:bg-primary text-dark hover:text-white'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Khối 4: Banner giảm giá */}
      <div className="relative rounded-2xl overflow-hidden min-h-[290px] flex items-start p-6 text-dark shadow-sm border border-border-light bg-[#F9F9F9]">
        {/* Nửa trên là text, nửa dưới là ảnh rau củ */}
        <div className="relative z-10 flex flex-col items-center text-center w-full mt-2">
          <span className="text-xl sm:text-2xl font-black">
            <span className="text-orange-500 mr-1.5">79%</span> 
            <span className="text-dark">Discount</span>
          </span>
          <span className="text-[10px] text-gray-text uppercase tracking-widest font-bold mt-1.5 mb-4">
            on your first order
          </span>
          
          <Link
            href="/category"
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover text-xs font-bold transition-all"
          >
            <span className="underline decoration-2 underline-offset-4">Mua Ngay</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Ảnh rau củ nằm ngang ở phía dưới */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[140px] bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400')` }}
        />
      </div>

      {/* Khối 5: Danh sách sản phẩm sales nhỏ */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-bold text-dark border-b border-border-light pb-2">
          Sản phẩm sales
        </h3>
        <div className="flex flex-col gap-3">
          {saleProducts.map((prod, index) => (
            <Link 
              key={prod.id} 
              href={`/products/${prod.slug}`}
              className={`flex items-center gap-3 p-3 border rounded-xl transition-all group bg-white cursor-pointer ${
                index === 1 
                  ? 'border-primary shadow-sm' // Thẻ thứ 2 (Xoài) viền xanh giống hệt thiết kế
                  : 'border-border-light hover:border-primary hover:shadow-sm'
              }`}
            >
              {/* Ảnh nhỏ */}
              <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 border border-border-light flex items-center justify-center bg-bg-light">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={prod.image} 
                  alt={prod.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Chi tiết */}
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-dark line-clamp-1 leading-tight group-hover:text-primary transition-colors">
                  {prod.name}
                </span>
                <div className="flex items-center gap-0.5 my-1.5">
                  {renderStars(prod.rating)}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-dark">{formatPrice(prod.price)}</span>
                  <span className="text-[10px] text-gray-400 line-through font-normal">{formatPrice(prod.originalPrice)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Header các thứ */}
      <TopBar />
      <Header />
      <Navbar />

      {/* 2. Breadcrumb Banner */}
      <div className="relative w-full py-10 bg-dark text-white px-4 md:px-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 font-medium">
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home size={14} />
              <span>Trang chủ</span>
            </Link>
            <ChevronRight size={12} className="text-gray-500" />
            <Link href="/category" className="hover:text-primary transition-colors">
              Danh mục
            </Link>
            <ChevronRight size={12} className="text-gray-500" />
            <span className="text-primary font-semibold">
              {selectedCategory === 'all' ? 'Tất cả' : selectedCategory === 'rau-cu' ? 'Rau củ' : 'Nông sản'}
            </span>
          </div>
          {/* Section title */}
          <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase">
            {selectedCategory === 'all' ? 'Tất cả nông sản' : selectedCategory === 'rau-cu' ? 'Rau củ hữu cơ' : 'Cửa hàng'}
          </h1>
        </div>
      </div>

      {/* 3. Main layout */}
      <main className="max-w-[1200px] mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar lọc bên trái (chỉ hiện trên Desktop) */}
          <aside className="hidden lg:block lg:col-span-1 border border-border-light rounded-2xl p-5 shadow-sm bg-white h-fit">
            <FilterSidebarContent />
          </aside>

          {/* Grid sản phẩm bên phải */}
          <section className="col-span-1 lg:col-span-3 flex flex-col">
            {/* Toolbar phía trên */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-bg-light/40 border border-border-light rounded-2xl p-4 mb-6 text-left">
              {/* Nút lọc cho Mobile */}
              <button 
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors cursor-pointer w-full sm:w-auto justify-center"
              >
                <SlidersHorizontal size={14} />
                <span>Bộ lọc</span>
              </button>

              {/* Sắp xếp dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-xs text-gray-text font-medium shrink-0">Sắp xếp:</span>
                <div className="relative w-full sm:w-[180px]">
                  <select
                    value={sortBy}
                    onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
                    className="w-full text-xs text-dark font-bold bg-white border border-border-light rounded-xl px-3.5 py-2 focus:outline-none focus:border-primary appearance-none cursor-pointer"
                  >
                    <option value="latest">Mới nhất</option>
                    <option value="price-low">Giá: Thấp đến Cao</option>
                    <option value="price-high">Giá: Cao đến Thấp</option>
                    <option value="best-seller">Bán chạy nhất</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              {/* Số kết quả */}
              <span className="text-xs text-gray-text font-medium ml-auto sm:ml-0">
                <strong className="text-dark font-extrabold">{filteredProducts.length}</strong> kết quả tìm thấy
              </span>
            </div>

            {/* Grid danh sách */}
            {paginatedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <div key={product.id} className="h-full">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-24 text-center border border-dashed border-border-light rounded-2xl bg-bg-light/20 flex flex-col items-center justify-center">
                <SlidersHorizontal size={36} className="text-gray-400 mb-3 animate-pulse" />
                <p className="text-sm text-gray-text font-medium">Không tìm thấy sản phẩm nào khớp với bộ lọc.</p>
                <button 
                  onClick={() => { setSelectedCategory('all'); setMaxPrice(1500000); setSelectedTags([]); }}
                  className="mt-4 text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Xoá tất cả bộ lọc
                </button>
              </div>
            )}

            {/* 7. Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                {/* Prev */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3.5 py-2 border border-border-light hover:border-primary rounded-xl text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-bg-light text-dark cursor-pointer"
                >
                  Trước
                </button>

                {/* Các trang */}
                {[...Array(totalPages)].map((_, idx) => {
                  const page = idx + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 flex items-center justify-center rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                        currentPage === page
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'border border-border-light hover:border-primary hover:bg-bg-light text-dark'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-3.5 py-2 border border-border-light hover:border-primary rounded-xl text-xs font-bold transition-all disabled:opacity-40 disabled:cursor-not-allowed hover:bg-bg-light text-dark cursor-pointer"
                >
                  Sau
                </button>
              </div>
            )}

          </section>
        </div>
      </main>

      {/* Mobile Drawer Filter */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex justify-end backdrop-blur-sm transition-all duration-300">
          {/* Overlay click ngoài */}
          <div className="absolute inset-0 cursor-pointer" onClick={() => setIsMobileFilterOpen(false)} />
          
          {/* Drawer container */}
          <div className="relative bg-white w-80 max-w-full h-full p-6 overflow-y-auto shadow-2xl flex flex-col gap-6 z-10 animate-slide-in">
            {/* Header Drawer */}
            <div className="flex items-center justify-between border-b border-border-light pb-4">
              <h2 className="text-base font-extrabold text-dark flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-primary" />
                <span>Bộ lọc sản phẩm</span>
              </h2>
              <button 
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 text-gray-text hover:text-dark cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Nội dung lọc */}
            <FilterSidebarContent />
          </div>
        </div>
      )}

      {/* 8. Newsletter + Footer */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-dark">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-primary border-r-2 mb-4"></div>
        <span className="text-sm font-bold text-gray-text">Đang tải sản phẩm FreshFoodStore...</span>
      </div>
    }>
      <CategoryContent />
    </Suspense>
  );
}
