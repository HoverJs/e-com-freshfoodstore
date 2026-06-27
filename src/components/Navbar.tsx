'use client';

import Link from 'next/link';
import { Heart, Menu, ShoppingBag, User } from 'lucide-react';

import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { cartCount, cartTotal, openCart } = useCart();

  const formattedTotal = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(cartTotal);

  return (
    <nav className="sticky top-0 z-40 w-full bg-dark px-4 text-white shadow-md md:px-0">
      <div className="mx-auto flex h-[56px] max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-6">
          <button className="flex h-[56px] cursor-pointer items-center gap-2 bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-primary-hover md:hidden">
            <Menu size={18} />
            <span>Danh mục</span>
          </button>

          <div className="hidden items-center gap-7 text-sm font-medium text-gray-300 md:flex">
            <Link href="/" className="text-white transition-colors hover:text-primary">
              Trang chủ
            </Link>
            <Link href="/category" className="transition-colors hover:text-primary">
              Cửa hàng
            </Link>
            <Link href="/news" className="transition-colors hover:text-primary">
              Tin tức
            </Link>
            <Link href="/about" className="transition-colors hover:text-primary">
              Giới thiệu
            </Link>
            <Link href="/contact" className="transition-colors hover:text-primary">
              Liên hệ
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm font-medium md:hidden">
          <Link href="/" className="text-white">
            Trang chủ
          </Link>
          <Link href="/category" className="text-gray-300 transition-colors hover:text-primary">
            Shop
          </Link>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/wishlist" className="group relative p-1 transition-colors hover:text-primary">
            <Heart size={22} className="transition-transform group-hover:scale-105" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
              2
            </span>
          </Link>

          <span className="hidden h-5 w-px text-gray-700 sm:inline-block" />

          <button
            type="button"
            onClick={openCart}
            className="group flex cursor-pointer items-center gap-2.5 transition-colors hover:text-primary"
          >
            <div className="relative p-1">
              <ShoppingBag size={22} className="transition-transform group-hover:scale-105" />
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </div>
            <div className="hidden text-left sm:flex sm:flex-col">
              <span className="text-[10px] font-normal leading-tight text-gray-400">Giỏ hàng</span>
              <span className="text-xs font-bold leading-tight">{formattedTotal}</span>
            </div>
          </button>

          <span className="h-5 w-px text-gray-700" />

          <Link href="/profile" className="group p-1 transition-colors hover:text-primary">
            <User size={22} className="transition-transform group-hover:scale-105" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
