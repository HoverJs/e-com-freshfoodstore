'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Star, Leaf, Beef, Fish, Apple } from 'lucide-react';
import { Product, promotionProducts } from '@/data/products';

function MiniProductItem({ prod }: { prod: Product }) {
  const [imgError, setImgError] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={12} 
          className={i <= floorRating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'} 
        />
      );
    }
    return stars;
  };

  return (
    <Link 
      href={`/products/${prod.slug}`}
      className="group flex items-center gap-4 p-2 rounded-lg border border-transparent hover:border-border-light hover:bg-bg-light/30 transition-all duration-300 cursor-pointer"
    >
      {/* Ảnh nhỏ */}
      <div className="w-20 h-20 bg-bg-light rounded-md overflow-hidden shrink-0 flex items-center justify-center relative border border-border-light">
        {imgError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-bg-light text-primary/50 gap-1 p-1">
            {prod.categorySlug === 'thit-ca' ? <Beef size={24} /> :
             prod.categorySlug === 'hai-san' ? <Fish size={24} /> :
             prod.categorySlug === 'trai-cay' ? <Apple size={24} /> :
             <Leaf size={24} />}
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img 
            src={prod.image} 
            alt={prod.name} 
            onError={() => setImgError(true)}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>

      {/* Chi tiết bên phải */}
      <div className="flex flex-col">
        {/* Tên */}
        <h4 className="text-xs font-bold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1">
          {prod.name}
        </h4>

        {/* Đánh giá sao */}
        <div className="flex items-center gap-0.5 mb-1.5">
          {renderStars(prod.rating)}
        </div>

        {/* Giá */}
        <div className="flex items-baseline gap-2">
          <span className="text-xs font-extrabold text-primary">
            {formatPrice(prod.price)}
          </span>
          {prod.originalPrice && (
            <span className="text-[10px] text-gray-text line-through">
              {formatPrice(prod.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function MiniProductLists() {
  const sections = [
    {
      title: 'Khuyến mãi hấp dẫn',
      products: promotionProducts.trending.slice(0, 3),
    },
    {
      title: 'Bán chạy nhất',
      products: promotionProducts.bestSellers.slice(0, 3),
    },
    {
      title: 'Đánh giá tốt nhất',
      products: promotionProducts.topRated.slice(0, 3),
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-4 md:px-0 border-t border-border-light">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sections.map((sec, idx) => (
          <div key={idx} className="flex flex-col text-left">
            {/* Tiêu đề cột */}
            <h3 className="text-base font-extrabold text-dark mb-5 pb-2 border-b border-border-light relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              {sec.title}
            </h3>

            {/* Danh sách mini */}
            <div className="flex flex-col gap-4">
              {sec.products.map((prod) => (
                <MiniProductItem key={prod.id} prod={prod} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
