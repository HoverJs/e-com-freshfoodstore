'use client';

import { X } from 'lucide-react';

import { type CartItem as CartItemType, useCart } from '@/context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 border-b border-border-light py-5">
      <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-2xl bg-bg-light">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-base font-semibold text-dark">{item.name}</h3>
        <p className="mt-1 text-sm text-gray-text">
          {item.unit ? `${item.quantity}${item.unit} x ` : `SL: ${item.quantity} x `}
          <span className="font-bold text-dark">{formatPrice(item.price)}</span>
        </p>
      </div>

      <button
        type="button"
        onClick={() => removeFromCart(item.id)}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-light text-gray-text transition-colors hover:border-primary hover:text-primary"
        aria-label={`Xóa ${item.name} khỏi giỏ hàng`}
      >
        <X size={16} />
      </button>
    </div>
  );
}
