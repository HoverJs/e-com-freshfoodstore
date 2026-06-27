'use client';

import Link from 'next/link';

import { useCart } from '@/context/CartContext';

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export default function CartSummary() {
  const { cartTotal, closeCart, items } = useCart();

  return (
    <div className="border-t border-border-light pt-6">
      <div className="mb-6 flex items-center justify-between text-base text-dark">
        <span>{items.length} sản phẩm</span>
        <span className="font-extrabold">{formatPrice(cartTotal)}</span>
      </div>

      <div className="space-y-3">
        <Link
          href="/checkout"
          onClick={closeCart}
          className="flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 text-base font-bold text-white transition-colors hover:bg-primary-hover"
        >
          Checkout
        </Link>

        <Link
          href="/cart"
          onClick={closeCart}
          className="flex w-full items-center justify-center rounded-full bg-primary/10 px-6 py-4 text-base font-bold text-primary transition-colors hover:bg-primary/15"
        >
          Go To Cart
        </Link>
      </div>
    </div>
  );
}
