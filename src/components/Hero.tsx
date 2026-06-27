'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ChevronRight, Menu } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Hero() {
  return (
    <section className="w-full bg-white px-4 py-6 md:px-0">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden h-fit overflow-hidden rounded-lg border border-border-light shadow-sm lg:block">
          <div className="flex items-center gap-2.5 bg-primary px-5 py-4 font-bold text-white">
            <Menu size={20} />
            <span>Tất cả danh mục</span>
          </div>
          <ul className="flex flex-col">
            {categories.map((category) => (
              <li
                key={category.id}
                className="border-b border-border-light last:border-0"
              >
                <Link
                  href={`/category?cat=${category.slug}`}
                  className="group flex items-center justify-between px-5 py-3 text-sm font-medium text-dark transition-all hover:bg-bg-light hover:text-primary"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-9 w-9 overflow-hidden rounded-full bg-[#F2F2F2]">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </div>
                    <span>{category.name}</span>
                  </div>
                  <ChevronRight
                    size={14}
                    className="text-gray-400 transition-colors group-hover:text-primary"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative col-span-1 flex min-h-[380px] items-center overflow-hidden rounded-2xl bg-bg-light shadow-sm lg:col-span-3 lg:min-h-[480px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1200&auto=format&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

          <div className="relative z-10 max-w-[550px] px-8 text-white sm:px-16">
            <span className="mb-4 inline-block rounded-full border border-primary/30 bg-primary/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur-sm sm:text-sm">
              Fresh Every Day
            </span>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              Thực Phẩm Sạch Cho Mọi Gia Đình
            </h1>
            <p className="mb-8 text-sm font-light leading-relaxed text-gray-200 sm:text-base">
              Cung cấp nông sản hữu cơ, trái cây sạch, thịt và cá tươi ngon được
              kiểm định nghiêm ngặt. Giao hàng tận nhà nhanh chóng!
            </p>
            <Link
              href="/category"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary/30"
            >
              <span>Mua ngay</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="absolute bottom-6 right-6 hidden max-w-[180px] rounded-xl border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md sm:block">
            <span className="mb-1 block text-xs font-bold uppercase text-primary">
              Ưu đãi tuần này
            </span>
            <span className="block text-lg font-extrabold">Giảm giá 30%</span>
            <span className="text-[10px] text-gray-300">
              Áp dụng cho tất cả các loại rau củ hữu cơ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
