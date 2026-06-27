import type { Metadata } from 'next';

import WishlistPageContent from '@/components/profile/WishlistPageContent';

export const metadata: Metadata = {
  title: 'Yêu thích | FreshFoodStore',
  description: 'Lưu và quản lý những sản phẩm bạn yêu thích tại FreshFoodStore.',
};

export default function WishlistPage() {
  return <WishlistPageContent />;
}
