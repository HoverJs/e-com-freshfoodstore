'use client';

import Link from 'next/link';
import { Heart, Home, LayoutDashboard, LogOut, Settings, ShoppingBag, ShoppingCart, ChevronRight, Star, X } from 'lucide-react';
import { useMemo, useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';

const navigationItems = [
  { label: 'Dashboard', href: '/profile', icon: LayoutDashboard, active: false },
  { label: 'Lịch sử đơn hàng', href: '/profile/orders', icon: ShoppingBag, active: false },
  { label: 'Yêu thích', href: '/wishlist', icon: Heart, active: true },
  { label: 'Giỏ hàng', href: '/cart', icon: ShoppingCart, active: false },
  { label: 'Cài đặt', href: '/profile/settings', icon: Settings, active: false },
  { label: 'Đăng xuất', href: '/', icon: LogOut, active: false },
];

const initialWishlistIds = ['p1', 'p4', 'p14', 'p27'];

function formatCurrency(amount: number) {
  return `${amount.toLocaleString('vi-VN')}đ`;
}

export default function WishlistPageContent() {
  const { addToCart } = useCart();
  const [wishlistIds, setWishlistIds] = useState(initialWishlistIds);
  const [notice, setNotice] = useState('');

  const wishlistProducts = useMemo(
    () => products.filter((product) => wishlistIds.includes(product.id)),
    [wishlistIds],
  );

  function handleRemove(productId: string) {
    setWishlistIds((current) => current.filter((id) => id !== productId));
    setNotice('Đã xóa sản phẩm khỏi danh sách yêu thích.');
  }

  function handleAddToCart(productId: string) {
    const product = products.find((item) => item.id === productId);

    if (!product) {
      return;
    }

    addToCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      slug: product.slug,
      unit: '1 sản phẩm',
    });

    setNotice(`Đã thêm ${product.name} vào giỏ hàng.`);
  }

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
              <span className="font-semibold text-primary">Yêu thích</span>
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
                <div>
                  <h1 className="text-3xl font-extrabold tracking-tight text-dark">Danh Sách Yêu Thích</h1>
                  <p className="mt-2 text-base text-gray-text">
                    {wishlistProducts.length} sản phẩm bạn đang lưu để mua sau.
                  </p>
                </div>
                <Link
                  href="/category"
                  className="inline-flex items-center justify-center rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  Tiếp tục mua sắm
                </Link>
              </div>

              <div className="p-5">
                {notice ? <p className="mb-5 rounded-2xl bg-primary/8 px-4 py-3 text-sm font-medium text-primary">{notice}</p> : null}

                {wishlistProducts.length === 0 ? (
                  <div className="rounded-[20px] border border-dashed border-border-light px-6 py-16 text-center">
                    <p className="text-2xl font-bold text-dark">Danh sách yêu thích đang trống</p>
                    <p className="mt-3 text-base text-gray-text">Thêm vài món rau củ, trái cây hoặc đặc sản để quay lại nhanh hơn.</p>
                    <Link
                      href="/category"
                      className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
                    >
                      Khám phá sản phẩm
                    </Link>
                  </div>
                ) : (
                  <div className="grid gap-5 md:grid-cols-2">
                    {wishlistProducts.map((product) => (
                      <article
                        key={product.id}
                        className="relative overflow-hidden rounded-[24px] border border-border-light bg-white p-5 shadow-[0_14px_40px_rgba(26,26,26,0.06)]"
                      >
                        <button
                          type="button"
                          onClick={() => handleRemove(product.id)}
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
                        >
                          <X size={18} />
                        </button>

                        <div className="flex gap-4">
                          <Link href={`/products/${product.slug}`} className="shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-28 w-28 rounded-[20px] border border-border-light object-cover"
                            />
                          </Link>

                          <div className="min-w-0 flex-1 pr-10">
                            <div className="flex flex-wrap items-center gap-2">
                              {product.tag ? (
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-primary">
                                  {product.tag}
                                </span>
                              ) : null}
                              <span className="text-sm text-gray-text">{product.brand}</span>
                            </div>

                            <Link href={`/products/${product.slug}`} className="mt-3 block text-xl font-extrabold tracking-tight text-dark transition-colors hover:text-primary">
                              {product.name}
                            </Link>

                            <div className="mt-3 flex items-center gap-3">
                              <span className="text-xl font-extrabold text-primary">{formatCurrency(product.price)}</span>
                              {product.oldPrice ? <span className="text-base text-gray-text line-through">{formatCurrency(product.oldPrice)}</span> : null}
                            </div>

                            <div className="mt-3 flex items-center gap-2 text-sm text-[#FF8A00]">
                              <Star size={16} className="fill-current" />
                              <span className="font-semibold">{product.rating}</span>
                              <span className="text-gray-text">({product.reviewsCount} đánh giá)</span>
                            </div>

                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-text">
                              {product.shortDescription ?? 'Sản phẩm tươi mới được tuyển chọn mỗi ngày cho bữa ăn an toàn và tiện lợi.'}
                            </p>
                          </div>
                        </div>

                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border-light pt-5">
                          <span
                            className={`rounded-full px-4 py-2 text-sm font-semibold ${
                              product.inStock ? 'bg-primary/10 text-primary' : 'bg-[#FFF3F2] text-[#EA4B48]'
                            }`}
                          >
                            {product.stockStatus ?? (product.inStock ? 'Còn hàng' : 'Hết hàng')}
                          </span>

                          <div className="flex flex-wrap gap-3">
                            <Link
                              href={`/products/${product.slug}`}
                              className="rounded-full border border-border-light px-5 py-3 text-sm font-bold text-dark transition-colors hover:border-primary hover:text-primary"
                            >
                              Xem chi tiết
                            </Link>
                            <button
                              type="button"
                              disabled={!product.inStock}
                              onClick={() => handleAddToCart(product.id)}
                              className="rounded-full bg-primary px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-[#BDBDBD]"
                            >
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
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
