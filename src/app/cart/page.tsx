import type { Metadata } from 'next';

import CartPageContent from '@/components/cart/CartPageContent';

export const metadata: Metadata = {
  title: 'Giỏ hàng | FreshFoodStore',
  description: 'Xem lại các sản phẩm bạn đã thêm vào giỏ hàng FreshFoodStore.',
};

export default function CartPage() {
  return <CartPageContent />;
}
