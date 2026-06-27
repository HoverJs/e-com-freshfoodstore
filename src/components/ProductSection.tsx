'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const tabs = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Trái cây', value: 'trai-cay' },
  { label: 'Rau củ', value: 'rau-cu' },
  { label: 'Thịt & cá', value: 'thit-ca' },
];

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState('all');

  // Lọc sản phẩm theo tab
  const filteredProducts = activeTab === 'all' 
    ? products.slice(0, 8) // Hiển thị 8 sản phẩm nổi bật
    : products.filter(p => p.categorySlug === activeTab).slice(0, 8);

  return (
    <section className="w-full bg-white py-10 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header section: Tiêu đề + Tabs + Nút Xem tất cả */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-4 border-b border-border-light">
          {/* Tiêu đề bên trái */}
          <div className="text-left">
            <span className="text-primary font-bold text-xs uppercase tracking-wider block mb-1">
              Fresh Food Store Selection
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-dark tracking-tight">
              Sản Phẩm Nổi Bật
            </h2>
          </div>

          {/* Tabs bộ lọc ở giữa + Nút Xem tất cả bên phải */}
          <div className="flex flex-wrap items-center justify-between gap-4 md:gap-8 w-full md:w-auto">
            {/* Lưới tab */}
            <div className="flex flex-wrap gap-1 bg-bg-light p-1 rounded-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-4 py-2 text-xs font-bold rounded-md transition-all cursor-pointer ${
                    activeTab === tab.value
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-gray-text hover:text-dark hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Nút Xem tất cả */}
            <Link 
              href={activeTab === 'all' ? '/category' : `/category?cat=${activeTab}`} 
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary-hover font-bold text-sm transition-all group"
            >
              <span>Xem tất cả</span>
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Lưới sản phẩm */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-border-light rounded-2xl bg-bg-light/30">
            <p className="text-gray-text text-sm">Chưa có sản phẩm nào thuộc danh mục này.</p>
          </div>
        )}

      </div>
    </section>
  );
}
