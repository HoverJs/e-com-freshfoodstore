'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

import { useCart } from '@/context/CartContext';

import CartItem from './CartItem';
import CartSummary from './CartSummary';

export default function CartDrawer() {
  const { closeCart, isCartOpen, items } = useCart();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [closeCart]);

  return (
    <div className={`fixed inset-0 z-[100] ${isCartOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <button
        type="button"
        onClick={closeCart}
        aria-label="Đóng giỏ hàng"
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isCartOpen ? 'opacity-60' : 'opacity-0'
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-screen w-full max-w-[456px] flex-col bg-white px-6 py-8 shadow-2xl transition-transform duration-300 sm:w-[420px] sm:px-8 lg:w-[456px] ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-[32px] font-bold tracking-tight text-dark">
            Giỏ Hàng ({items.length})
          </h2>
          <button
            type="button"
            onClick={closeCart}
            className="flex h-11 w-11 items-center justify-center rounded-full text-dark transition-colors hover:bg-bg-light"
            aria-label="Đóng drawer giỏ hàng"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-1">
          {items.length > 0 ? (
            items.map((item) => <CartItem key={item.id} item={item} />)
          ) : (
            <div className="flex h-full items-center justify-center py-16 text-center text-gray-text">
              Giỏ hàng của bạn đang trống.
            </div>
          )}
        </div>

        <CartSummary />
      </aside>
    </div>
  );
}
