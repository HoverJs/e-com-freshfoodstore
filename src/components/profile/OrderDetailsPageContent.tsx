import Link from 'next/link';
import { Check, ChevronRight, Heart, Home, LayoutDashboard, LogOut, Settings, ShoppingBag, ShoppingCart } from 'lucide-react';
import { notFound } from 'next/navigation';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import { formatCurrency, getOrderDetailById, getOrderStep } from '@/data/orders';

const navigationItems = [
  { label: 'Dashboard', href: '/profile', icon: LayoutDashboard, active: false },
  { label: 'Lịch sử đơn hàng', href: '/profile/orders', icon: ShoppingBag, active: true },
  { label: 'Yêu thích', href: '/wishlist', icon: Heart, active: false },
  { label: 'Giỏ hàng', href: '/cart', icon: ShoppingCart, active: false },
  { label: 'Cài đặt', href: '/profile/settings', icon: Settings, active: false },
  { label: 'Đăng xuất', href: '/', icon: LogOut, active: false },
];

const progressSteps = [
  { key: 1, label: 'Đã tiếp nhận' },
  { key: 2, label: 'Đang xử lý' },
  { key: 3, label: 'Đang giao' },
  { key: 4, label: 'Đã giao hàng' },
];

type OrderDetailsPageContentProps = {
  orderId: string;
};

export default function OrderDetailsPageContent({ orderId }: OrderDetailsPageContentProps) {
  const order = getOrderDetailById(orderId);

  if (!order) {
    notFound();
  }

  const currentStep = getOrderStep(order.status);

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
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-200">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Home size={14} />
                <span>Trang chủ</span>
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-gray-300">Tài khoản</span>
              <ChevronRight size={14} className="text-gray-400" />
              <Link href="/profile/orders" className="text-gray-300 transition-colors hover:text-primary">
                Lịch sử đơn hàng
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="font-semibold text-primary">Chi tiết đơn hàng</span>
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
              <div className="flex flex-col gap-3 border-b border-border-light px-5 py-5 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl font-extrabold tracking-tight text-dark">Chi Tiết Đơn Hàng</h1>
                  <span className="text-base text-gray-text">• {order.date}</span>
                  <span className="text-base text-gray-text">• {order.productCount} sản phẩm</span>
                </div>
                <Link href="/profile/orders" className="text-base font-bold text-primary transition-colors hover:text-primary-hover">
                  Quay lại danh sách
                </Link>
              </div>

              <div className="space-y-6 p-5">
                <div className="grid gap-5 xl:grid-cols-[minmax(0,1.5fr)_280px]">
                  <div className="grid overflow-hidden rounded-[20px] border border-border-light md:grid-cols-2">
                    <div className="border-b border-border-light p-5 md:border-b-0 md:border-r">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text">Địa chỉ thanh toán</p>
                      <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-dark">{order.billingAddress.name}</h2>
                      <div className="mt-3 space-y-3 text-base leading-7 text-gray-text">
                        <p>{order.billingAddress.address}</p>
                        <p>{order.billingAddress.email}</p>
                        <p>{order.billingAddress.phone}</p>
                      </div>
                    </div>

                    <div className="p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text">Địa chỉ giao hàng</p>
                      <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-dark">{order.shippingAddress.name}</h2>
                      <div className="mt-3 space-y-3 text-base leading-7 text-gray-text">
                        <p>{order.shippingAddress.address}</p>
                        <p>{order.shippingAddress.email}</p>
                        <p>{order.shippingAddress.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[20px] border border-border-light">
                    <div className="grid grid-cols-2 border-b border-border-light">
                      <div className="border-r border-border-light p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text">Mã đơn</p>
                        <p className="mt-3 text-2xl font-extrabold tracking-tight text-dark">#{order.id}</p>
                      </div>
                      <div className="p-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text">Thanh toán</p>
                        <p className="mt-3 text-lg font-semibold text-dark">{order.paymentMethod}</p>
                      </div>
                    </div>

                    <div className="space-y-4 p-5">
                      <div className="flex items-center justify-between border-b border-border-light pb-4 text-base text-gray-text">
                        <span>Tạm tính</span>
                        <span className="font-bold text-dark">{formatCurrency(order.subtotal)}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border-light pb-4 text-base text-gray-text">
                        <span>Giảm giá</span>
                        <span className="font-bold text-dark">{order.discount > 0 ? formatCurrency(order.discount) : '0đ'}</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border-light pb-4 text-base text-gray-text">
                        <span>Phí giao hàng</span>
                        <span className="font-bold text-dark">{order.shipping > 0 ? formatCurrency(order.shipping) : 'Miễn phí'}</span>
                      </div>
                      <div className="flex items-center justify-between text-xl font-extrabold text-dark">
                        <span>Tổng cộng</span>
                        <span className="text-primary">{formatCurrency(order.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-border-light px-5 py-6">
                  <div className="grid gap-6 md:grid-cols-4">
                    {progressSteps.map((step, index) => {
                      const completed = step.key < currentStep;
                      const current = step.key === currentStep;
                      const active = step.key <= currentStep;

                      return (
                        <div key={step.key} className="relative flex flex-col items-center text-center">
                          {index < progressSteps.length - 1 ? (
                            <span
                              className={`absolute left-1/2 top-5 hidden h-[4px] w-full md:block ${
                                step.key < currentStep ? 'bg-primary' : 'bg-border-light'
                              }`}
                            />
                          ) : null}

                          <div
                            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold ${
                              completed || current
                                ? 'border-primary bg-primary text-white'
                                : 'border-primary/35 bg-white text-primary'
                            }`}
                          >
                            {completed ? <Check size={18} /> : `0${step.key}`}
                          </div>
                          <p className={`mt-4 text-base ${active ? 'font-semibold text-dark' : 'text-gray-text'}`}>{step.label}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="overflow-hidden rounded-[20px] border border-border-light">
                  <div className="hidden grid-cols-[minmax(0,1.4fr)_160px_140px_180px] bg-[#F9F9F9] px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:grid">
                    <span>Sản phẩm</span>
                    <span>Giá</span>
                    <span>Số lượng</span>
                    <span>Tạm tính</span>
                  </div>

                  <div className="divide-y divide-border-light">
                    {order.items.map((item) => (
                      <article
                        key={`${order.id}-${item.name}`}
                        className="grid gap-4 px-5 py-5 md:grid-cols-[minmax(0,1.4fr)_160px_140px_180px] md:items-center"
                      >
                        <div className="flex items-center gap-4">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 rounded-2xl border border-border-light object-cover"
                          />
                          <div>
                            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Sản phẩm</span>
                            <p className="text-base font-semibold text-dark">{item.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:block">
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Giá</span>
                          <span className="text-base text-dark">{formatCurrency(item.price)}</span>
                        </div>
                        <div className="flex items-center justify-between md:block">
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Số lượng</span>
                          <span className="text-base text-dark">x{item.quantity}</span>
                        </div>
                        <div className="flex items-center justify-between md:block">
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">Tạm tính</span>
                          <span className="text-base font-bold text-dark">{formatCurrency(item.price * item.quantity)}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
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
