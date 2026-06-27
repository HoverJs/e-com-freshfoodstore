import type { Metadata } from 'next';

import SettingsPageContent from '@/components/profile/SettingsPageContent';

export const metadata: Metadata = {
  title: 'Cài đặt tài khoản | FreshFoodStore',
  description: 'Quản lý thông tin cá nhân, địa chỉ thanh toán và mật khẩu tại FreshFoodStore.',
};

export default function ProfileSettingsPage() {
  return <SettingsPageContent />;
}
