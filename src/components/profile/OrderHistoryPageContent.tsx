'use client';

import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingBag,
  ShoppingCart,
} from 'lucide-react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import { formatCurrency, formatOrderCount, orderHistory } from '@/data/orders';

const navigationItems = [
  { label: 'Dashboard', href: '/profile', icon: LayoutDashboard, active: false },
  { label: 'Lịch sử đơn hàng', href: '/profile/orders', icon: ShoppingBag, active: true },
  { label: 'Yêu thích', href: '/wishlist', icon: Heart, active: false },
  { label: 'Giỏ hàng', href: '/cart', icon: ShoppingCart, active: false },
  { label: 'Cài đặt', href: '/profile/settings', icon: Settings, active: false },
  { label: 'Đăng xuất', href: '/', icon: LogOut, active: false },
];

export default function OrderHistoryPageContent() {
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
              <span className="text-gray-300">Tài khoản</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="font-semibold text-primary">Lịch sử đơn hàng</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
              <div className="border-b border-border-light px-5 py-5">
                <h2 className="text-3xl font-extrabold tracking-tight text-dark">Điều hướng</h2>
              </div>
              <nav className="py-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-4 text-base transition-colors ${
                        item.active
                          ? 'border-l-4 border-primary bg-primary/8 font-semibold text-dark'
                          : 'text-gray-text hover:bg-bg-light hover:text-dark'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>

            <section className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
              <div className="border-b border-border-light px-5 py-5">
                <h1 className="text-3xl font-extrabold tracking-tight text-dark">Lịch Sử Đơn Hàng</h1>
              </div>

              <div className="hidden grid-cols-[140px_170px_1.2fr_160px_140px] bg-[#F9F9F9] px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:grid">
                <span>Mã đơn</span>
                <span>Ngày</span>
                <span>Tổng tiền</span>
                <span>Trạng thái</span>
                <span />
              </div>

              <div className="divide-y divide-border-light">
                {orderHistory.map((order) => (
                  <article
                    key={order.id}
                    className="grid gap-3 px-5 py-4 md:grid-cols-[140px_170px_1.2fr_160px_140px] md:items-center"
                  >
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Mã đơn</span>
                      <span className="text-base font-semibold text-dark">#{order.id}</span>
                    </div>
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Ngày</span>
                      <span className="text-base text-gray-text">{order.date}</span>
                    </div>
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Tổng tiền</span>
                      <span className="text-base text-dark">
                        <span className="font-bold">{formatCurrency(order.total)}</span> ({formatOrderCount(order.count)})
                      </span>
                    </div>
                    <div className="flex items-center justify-between md:block">
                      <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Trạng thái</span>
                      <span className="text-base text-gray-text">{order.status}</span>
                    </div>
                    <div className="text-right">
                      <Link
                        href={`/profile/orders/${order.id}`}
                        className="text-base font-bold text-primary transition-colors hover:text-primary-hover"
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3 px-5 py-6">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-bold text-white"
                >
                  1
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                >
                  2
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                >
                  3
                </button>
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
