import type { Metadata } from 'next';

import OrderDetailsPageContent from '@/components/profile/OrderDetailsPageContent';

export const metadata: Metadata = {
  title: 'Chi tiết đơn hàng | FreshFoodStore',
  description: 'Theo dõi trạng thái và thông tin giao hàng của đơn hàng tại FreshFoodStore.',
};

type OrderDetailPageProps = {
  params: Promise<{ orderId: string }>;
};

export default async function OrderDetailPage({ params }: OrderDetailPageProps) {
  const { orderId } = await params;

  return <OrderDetailsPageContent orderId={orderId} />;
}
