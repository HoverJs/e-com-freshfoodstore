import type { Metadata } from 'next';

import OrderHistoryPageContent from '@/components/profile/OrderHistoryPageContent';

export const metadata: Metadata = {
  title: 'Lịch sử đơn hàng | FreshFoodStore',
  description: 'Theo dõi lịch sử đơn hàng của bạn tại FreshFoodStore.',
};

export default function ProfileOrdersPage() {
  return <OrderHistoryPageContent />;
}
