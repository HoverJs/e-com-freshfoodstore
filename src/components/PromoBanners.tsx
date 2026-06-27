'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const banners = [
  {
    image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=600&auto=format&fit=crop&q=80',
    tag: 'Ưu đãi đặc biệt',
    title: 'Trái Cây Nhập Khẩu',
    desc: 'Giảm ngay 20% các loại trái cây hữu cơ Mỹ, Úc tuần này.',
    link: '/category?cat=trai-cay',
    btnBg: 'bg-primary hover:bg-primary-hover text-white',
  },
  {
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600&auto=format&fit=crop&q=80',
    tag: 'Tươi xanh mỗi ngày',
    title: 'Rau Hữu Cơ 100%',
    desc: 'Được thu hoạch thủ công tại trang trại tiêu chuẩn VietGAP.',
    link: '/category?cat=rau-cu',
    btnBg: 'bg-white hover:bg-bg-light text-dark',
  },
  {
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&auto=format&fit=crop&q=80',
    tag: 'Sản phẩm mới',
    title: 'Nước Ép Nguyên Chất',
    desc: 'Không đường, không chất bảo quản, giữ trọn dưỡng chất.',
    link: '/category?cat=do-uong',
    btnBg: 'bg-primary hover:bg-primary-hover text-white',
  },
];

export default function PromoBanners() {
  return (
    <section className="w-full bg-white py-6 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {banners.map((ban, idx) => (
          <div 
            key={idx} 
            className="relative rounded-2xl overflow-hidden min-h-[220px] flex items-center shadow-sm group"
          >
            {/* Background image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url('${ban.image}')` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/60 transition-colors" />

            {/* Nội dung */}
            <div className="relative z-10 p-6 flex flex-col items-start text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary mb-1 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                {ban.tag}
              </span>
              <h3 className="text-xl font-extrabold mb-1.5">{ban.title}</h3>
              <p className="text-xs text-gray-300 mb-5 max-w-[240px] leading-relaxed">
                {ban.desc}
              </p>
              <Link
                href={ban.link}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer ${ban.btnBg}`}
              >
                <span>Mua ngay</span>
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
