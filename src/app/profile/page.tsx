import type { Metadata } from 'next';

import ProfilePageContent from '@/components/profile/ProfilePageContent';

export const metadata: Metadata = {
  title: 'Trang cá nhân | FreshFoodStore',
  description: 'Theo dõi hồ sơ, địa chỉ và lịch sử đơn hàng tại FreshFoodStore.',
};

export default function ProfilePage() {
  return <ProfilePageContent />;
}
