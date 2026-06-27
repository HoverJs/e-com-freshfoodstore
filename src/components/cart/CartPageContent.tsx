'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Home, ShoppingBag, Trash2 } from 'lucide-react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import QuantitySelector from '@/components/product/QuantitySelector';

import { useCart } from '@/context/CartContext';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export default function CartPageContent() {
  const { cartTotal, items, removeFromCart, updateQuantity } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponMessage, setCouponMessage] = useState('');

  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);

  const handleApplyCoupon = () => {
    const normalizedCode = couponCode.trim().toUpperCase();

    if (!normalizedCode) {
      setCouponMessage('Vui lòng nhập mã giảm giá.');
      return;
    }

    if (normalizedCode === 'FRESH10') {
      setCouponMessage('Mã FRESH10 đã được ghi nhận. Ưu đãi sẽ áp dụng ở bước thanh toán.');
      return;
    }

    setCouponMessage('Mã giảm giá chưa hợp lệ. Hãy thử lại.');
  };

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
              <span className="font-semibold text-primary">Giỏ hàng</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto max-w-[1200px]">
            <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
              Giỏ Hàng Của Bạn
            </h1>

            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
              <div className="space-y-6">
                <div className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                  <div className="hidden grid-cols-[minmax(0,1.8fr)_140px_180px_150px_44px] border-b border-border-light px-5 py-4 text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:grid">
                    <span>Sản phẩm</span>
                    <span>Đơn giá</span>
                    <span>Số lượng</span>
                    <span>Tạm tính</span>
                    <span />
                  </div>

                  {items.length > 0 ? (
                    <>
                      <div className="divide-y divide-border-light">
                        {items.map((item) => (
                          <article
                            key={item.id}
                            className="grid gap-4 px-5 py-5 md:grid-cols-[minmax(0,1.8fr)_140px_180px_150px_44px] md:items-center"
                          >
                            <div className="flex min-w-0 items-center gap-4">
                              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-bg-light">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                              </div>
                              <div className="min-w-0">
                                <h2 className="line-clamp-2 text-base font-semibold text-dark">{item.name}</h2>
                                <p className="mt-1 text-sm text-gray-text">
                                  {item.unit ? `Đơn vị: ${item.unit}` : 'Sản phẩm tươi sạch FreshFoodStore'}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center justify-between md:block">
                              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">
                                Đơn giá
                              </span>
                              <span className="text-base font-medium text-dark">{formatPrice(item.price)}</span>
                            </div>

                            <div className="flex items-center justify-between md:block">
                              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">
                                Số lượng
                              </span>
                              <QuantitySelector
                                quantity={item.quantity}
                                onChange={(value) => updateQuantity(item.id, value)}
                                max={99}
                              />
                            </div>

                            <div className="flex items-center justify-between md:block">
                              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-text md:hidden">
                                Tạm tính
                              </span>
                              <span className="text-lg font-extrabold text-dark">
                                {formatPrice(item.price * item.quantity)}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                              aria-label={`Xóa ${item.name} khỏi giỏ hàng`}
                            >
                              <Trash2 size={16} />
                            </button>
                          </article>
                        ))}
                      </div>

                      <div className="flex flex-col gap-3 border-t border-border-light bg-[#FCFCFC] px-5 py-5 md:flex-row md:items-center md:justify-between">
                        <Link
                          href="/category"
                          className="inline-flex items-center justify-center rounded-full bg-[#F2F2F2] px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-[#E8E8E8]"
                        >
                          Quay lại mua sắm
                        </Link>
                        <button
                          type="button"
                          onClick={() => setCouponMessage('Giỏ hàng đã được cập nhật tự động.')}
                          className="inline-flex items-center justify-center rounded-full bg-[#F2F2F2] px-6 py-3 text-sm font-bold text-dark transition-colors hover:bg-[#E8E8E8]"
                        >
                          Cập nhật giỏ hàng
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="px-6 py-16 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShoppingBag size={28} />
                      </div>
                      <h2 className="mt-5 text-2xl font-bold text-dark">Giỏ hàng đang trống</h2>
                      <p className="mx-auto mt-3 max-w-[460px] text-sm leading-7 text-gray-text">
                        Hãy thêm vài sản phẩm tươi sạch để bắt đầu đơn hàng của bạn tại FreshFoodStore.
                      </p>
                      <Link
                        href="/category"
                        className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                      >
                        Mua sắm ngay
                      </Link>
                    </div>
                  )}
                </div>

                <div className="rounded-[20px] border border-border-light bg-white p-5 shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    <h2 className="text-2xl font-bold text-dark lg:min-w-[170px]">Mã giảm giá</h2>
                    <div className="flex flex-1 flex-col gap-3 sm:flex-row">
                      <input
                        value={couponCode}
                        onChange={(event) => setCouponCode(event.target.value)}
                        type="text"
                        placeholder="Nhập mã ưu đãi"
                        className="h-14 flex-1 rounded-full border border-border-light px-5 text-sm text-dark outline-none transition-colors placeholder:text-gray-400 focus:border-primary"
                      />
                      <button
                        type="button"
                        onClick={handleApplyCoupon}
                        className="inline-flex h-14 items-center justify-center rounded-full bg-dark px-7 text-sm font-bold text-white transition-colors hover:bg-[#2A2A2A]"
                      >
                        Áp dụng coupon
                      </button>
                    </div>
                  </div>
                  {couponMessage ? (
                    <p className="mt-4 text-sm text-gray-text">{couponMessage}</p>
                  ) : null}
                </div>
              </div>

              <aside className="h-fit rounded-[20px] border border-border-light bg-white p-6 shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                <h2 className="text-[28px] font-bold tracking-tight text-dark">Tổng đơn hàng</h2>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-border-light pb-4 text-sm text-gray-text">
                    <span>Tạm tính</span>
                    <span className="font-semibold text-dark">{formatPrice(cartTotal)}</span>
                  </div>

                  <div className="flex items-center justify-between border-b border-border-light pb-4 text-sm text-gray-text">
                    <span>Vận chuyển</span>
                    <span className="font-semibold text-dark">Miễn phí</span>
                  </div>

                  <div className="flex items-center justify-between text-base text-dark">
                    <span className="font-semibold">Tổng cộng</span>
                    <span className="text-3xl font-extrabold">{formatPrice(cartTotal)}</span>
                  </div>
                </div>

                <div className="mt-7 space-y-3 rounded-2xl bg-[#FCFCFC] p-4">
                  <div className="flex items-center justify-between text-sm text-gray-text">
                    <span>Số loại sản phẩm</span>
                    <span className="font-semibold text-dark">{items.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-text">
                    <span>Tổng số lượng</span>
                    <span className="font-semibold text-dark">{totalQuantity}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  className="mt-8 flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-primary-hover"
                >
                  Tiến hành thanh toán
                </Link>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
