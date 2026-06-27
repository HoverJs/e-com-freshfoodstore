'use client';

import Link from 'next/link';
import {
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
import { formatCurrency, formatOrderCount, recentOrders } from '@/data/orders';

const navigationItems = [
  { label: 'Dashboard', href: '/profile', icon: LayoutDashboard, active: true },
  { label: 'Lịch sử đơn hàng', href: '/profile/orders', icon: ShoppingBag, active: false },
  { label: 'Yêu thích', href: '/wishlist', icon: Heart, active: false },
  { label: 'Giỏ hàng', href: '/cart', icon: ShoppingCart, active: false },
  { label: 'Cài đặt', href: '/profile/settings', icon: Settings, active: false },
  { label: 'Đăng xuất', href: '/', icon: LogOut, active: false },
];

export default function ProfilePageContent() {
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
              <span className="font-semibold text-primary">Dashboard</span>
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

            <div className="space-y-6">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_370px]">
                <section className="rounded-[20px] border border-border-light bg-white p-8 text-center shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-[#F2F2F2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Young_man_smiling_in_studio_202606271218.jpeg"
                      alt="Nguyễn Văn A"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-dark">Nguyễn Văn A</h1>
                  <p className="mt-2 text-base text-gray-text">Khách hàng thân thiết</p>
                  <Link
                    href="/profile/settings"
                    className="mt-5 text-base font-bold text-primary transition-colors hover:text-primary-hover"
                  >
                    Chỉnh sửa hồ sơ
                  </Link>
                </section>

                <section className="rounded-[20px] border border-border-light bg-white p-8 shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.08em] text-gray-text">Địa chỉ thanh toán</p>
                  <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-dark">Nguyễn Văn A</h2>
                  <div className="mt-4 space-y-3 text-base leading-7 text-gray-text">
                    <p>123 Hà Huy Tập, ĐaKao, Quận 1, TP.Hồ Chí Minh</p>
                    <p>nguyenvana@gmail.com</p>
                    <p>+84 123456789</p>
                  </div>
                  <Link
                    href="/profile/settings"
                    className="mt-6 text-base font-bold text-primary transition-colors hover:text-primary-hover"
                  >
                    Chỉnh sửa địa chỉ
                  </Link>
                </section>
              </div>

              <section className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                <div className="flex flex-col gap-3 border-b border-border-light px-5 py-5 md:flex-row md:items-center md:justify-between">
                  <h2 className="text-3xl font-extrabold tracking-tight text-dark">Đơn Hàng Gần Đây</h2>
                  <Link href="/profile/orders" className="text-base font-bold text-primary transition-colors hover:text-primary-hover">
                    Xem tất cả
                  </Link>
                </div>

                <div className="hidden grid-cols-[140px_170px_1.2fr_160px_140px] bg-[#F9F9F9] px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:grid">
                  <span>Mã đơn</span>
                  <span>Ngày</span>
                  <span>Tổng tiền</span>
                  <span>Trạng thái</span>
                  <span />
                </div>

                <div className="divide-y divide-border-light">
                  {recentOrders.map((order) => (
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
              </section>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
