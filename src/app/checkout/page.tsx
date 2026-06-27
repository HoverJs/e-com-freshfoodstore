import type { Metadata } from 'next';

import CheckoutPageContent from '@/components/checkout/CheckoutPageContent';

export const metadata: Metadata = {
  title: 'Thanh toán | FreshFoodStore',
  description: 'Hoàn tất đơn hàng nông sản sạch của bạn tại FreshFoodStore.',
};

export default function CheckoutPage() {
  return <CheckoutPageContent />;
}
