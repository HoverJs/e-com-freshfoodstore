'use client';

import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/data/categories';
import { products } from '@/data/products';

export default function CategoryGrid() {
  return (
    <section className="w-full bg-white px-4 py-10 md:px-0">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-8 flex flex-col items-center text-center">
          <span className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
            FreshFoodStore Categories
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
            Danh Mục Nông Sản Sạch
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories.map((category) => {
            const productCount = products.filter(
              (product) => product.categorySlug === category.slug
            ).length;

            return (
              <Link
                key={category.id}
                href={`/category?cat=${category.slug}`}
                className="group flex flex-col items-center rounded-2xl border border-border-light bg-white p-5 text-center shadow-sm transition-all duration-300 hover:border-primary hover:shadow-lg md:p-6"
              >
                <div className="relative mb-4 h-16 w-16 overflow-hidden rounded-full bg-[#F2F2F2] ring-4 ring-[#F7F7F7] transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <h3 className="mb-1 text-sm font-bold leading-snug text-dark transition-colors group-hover:text-primary">
                  {category.name}
                </h3>
                <span className="text-xs text-gray-text">
                  {productCount} sản phẩm
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
