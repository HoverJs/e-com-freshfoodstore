'use client';

import Link from 'next/link';
import { Eye, EyeOff, Heart, Home, LayoutDashboard, LogOut, Settings, ShoppingBag, ShoppingCart, ChevronRight } from 'lucide-react';
import { useState } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Newsletter from '@/components/Newsletter';
import TopBar from '@/components/TopBar';

const navigationItems = [
  { label: 'Dashboard', href: '/profile', icon: LayoutDashboard, active: false },
  { label: 'Lịch sử đơn hàng', href: '/profile/orders', icon: ShoppingBag, active: false },
  { label: 'Yêu thích', href: '/wishlist', icon: Heart, active: false },
  { label: 'Giỏ hàng', href: '/cart', icon: ShoppingCart, active: false },
  { label: 'Cài đặt', href: '/profile/settings', icon: Settings, active: true },
  { label: 'Đăng xuất', href: '/', icon: LogOut, active: false },
];

type AccountFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type BillingFormState = {
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  province: string;
  district: string;
  email: string;
  phone: string;
};

type PasswordFormState = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const inputClassName =
  'h-12 w-full rounded-xl border border-border-light px-4 text-base text-dark outline-none transition focus:border-primary';

export default function SettingsPageContent() {
  const [accountForm, setAccountForm] = useState<AccountFormState>({
    firstName: 'Nguyễn',
    lastName: 'Văn A',
    email: 'nguyenvana@gmail.com',
    phone: '+84 123456789',
  });
  const [billingForm, setBillingForm] = useState<BillingFormState>({
    firstName: 'Nguyễn',
    lastName: 'Văn A',
    company: 'FreshFoodStore',
    address: '123 Hà Huy Tập, ĐaKao, Quận 1, TP.Hồ Chí Minh',
    province: 'TP. Hồ Chí Minh',
    district: 'Quận 1',
    email: 'nguyenvana@gmail.com',
    phone: '+84 123456789',
  });
  const [passwordForm, setPasswordForm] = useState<PasswordFormState>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [accountNotice, setAccountNotice] = useState('');
  const [billingNotice, setBillingNotice] = useState('');
  const [passwordNotice, setPasswordNotice] = useState('');
  const [showPassword, setShowPassword] = useState({
    current: false,
    next: false,
    confirm: false,
  });

  function handleAccountSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAccountNotice('Thông tin tài khoản đã được lưu thành công.');
  }

  function handleBillingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBillingNotice('Địa chỉ thanh toán đã được cập nhật.');
  }

  function handlePasswordSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!passwordForm.currentPassword || !passwordForm.newPassword || !passwordForm.confirmPassword) {
      setPasswordNotice('Vui lòng nhập đầy đủ thông tin mật khẩu.');
      return;
    }

    if (passwordForm.newPassword.length < 6) {
      setPasswordNotice('Mật khẩu mới cần có ít nhất 6 ký tự.');
      return;
    }

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setPasswordNotice('Mật khẩu xác nhận chưa khớp.');
      return;
    }

    setPasswordNotice('Mật khẩu đã được thay đổi thành công.');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <TopBar />
      <Header />
      <Navbar />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden px-4 py-8 md:py-10">
          <div
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/about/about-banner.svg')" }}
          />
          <div className="absolute inset-0 -z-10 bg-dark/70" />

          <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-200">
              <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
                <Home size={14} />
                <span>Trang chủ</span>
              </Link>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="text-gray-300">Tài khoản</span>
              <ChevronRight size={14} className="text-gray-400" />
              <span className="font-semibold text-primary">Cài đặt</span>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:py-20">
          <div className="mx-auto grid max-w-[1200px] gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="h-fit rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
              <div className="border-b border-border-light px-5 py-5">
                <h2 className="text-3xl font-extrabold tracking-tight text-dark">Điều hướng</h2>
              </div>
              <nav className="py-2">
                {navigationItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-5 py-4 text-base transition-colors ${
                        item.active
                          ? 'border-l-4 border-primary bg-primary/8 font-semibold text-dark'
                          : 'text-gray-text hover:bg-bg-light hover:text-dark'
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </aside>

            <div className="space-y-6">
              <section className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                <div className="border-b border-border-light px-5 py-5">
                  <h1 className="text-3xl font-extrabold tracking-tight text-dark">Cài Đặt Tài Khoản</h1>
                </div>

                <form onSubmit={handleAccountSubmit} className="grid gap-8 p-5 lg:grid-cols-[minmax(0,1fr)_250px]">
                  <div className="space-y-5">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Họ</span>
                      <input
                        value={accountForm.firstName}
                        onChange={(event) => setAccountForm((prev) => ({ ...prev, firstName: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Tên</span>
                      <input
                        value={accountForm.lastName}
                        onChange={(event) => setAccountForm((prev) => ({ ...prev, lastName: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Email</span>
                      <input
                        type="email"
                        value={accountForm.email}
                        onChange={(event) => setAccountForm((prev) => ({ ...prev, email: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Số điện thoại</span>
                      <input
                        value={accountForm.phone}
                        onChange={(event) => setAccountForm((prev) => ({ ...prev, phone: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        className="rounded-full bg-primary px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-hover"
                      >
                        Lưu thay đổi
                      </button>
                      {accountNotice ? <p className="text-sm font-medium text-primary">{accountNotice}</p> : null}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-5 rounded-[20px] bg-[#FCFCFC] p-6">
                    <div className="h-40 w-40 overflow-hidden rounded-full border-4 border-[#F2F2F2]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/Young_man_smiling_in_studio_202606271218.jpeg"
                        alt="Nguyễn Văn A"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <button
                      type="button"
                      className="rounded-full border border-primary px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                    >
                      Chọn ảnh đại diện
                    </button>
                  </div>
                </form>
              </section>

              <section className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                <div className="border-b border-border-light px-5 py-5">
                  <h2 className="text-3xl font-extrabold tracking-tight text-dark">Địa Chỉ Thanh Toán</h2>
                </div>

                <form onSubmit={handleBillingSubmit} className="space-y-5 p-5">
                  <div className="grid gap-5 md:grid-cols-3">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Họ</span>
                      <input
                        value={billingForm.firstName}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, firstName: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Tên</span>
                      <input
                        value={billingForm.lastName}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, lastName: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Công ty</span>
                      <input
                        value={billingForm.company}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, company: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                  </div>

                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-dark">Địa chỉ</span>
                    <input
                      value={billingForm.address}
                      onChange={(event) => setBillingForm((prev) => ({ ...prev, address: event.target.value }))}
                      className={inputClassName}
                    />
                  </label>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Tỉnh/Thành phố</span>
                      <select
                        value={billingForm.province}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, province: event.target.value }))}
                        className={inputClassName}
                      >
                        <option>TP. Hồ Chí Minh</option>
                        <option>Đà Nẵng</option>
                        <option>Hà Nội</option>
                      </select>
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Quận/Huyện</span>
                      <select
                        value={billingForm.district}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, district: event.target.value }))}
                        className={inputClassName}
                      >
                        <option>Quận 1</option>
                        <option>Quận 2</option>
                        <option>Thành phố Thủ Đức</option>
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Email</span>
                      <input
                        type="email"
                        value={billingForm.email}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, email: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Số điện thoại</span>
                      <input
                        value={billingForm.phone}
                        onChange={(event) => setBillingForm((prev) => ({ ...prev, phone: event.target.value }))}
                        className={inputClassName}
                      />
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="rounded-full bg-primary px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-hover"
                    >
                      Lưu thay đổi
                    </button>
                    {billingNotice ? <p className="text-sm font-medium text-primary">{billingNotice}</p> : null}
                  </div>
                </form>
              </section>

              <section className="overflow-hidden rounded-[20px] border border-border-light bg-white shadow-[0_12px_40px_rgba(26,26,26,0.05)]">
                <div className="border-b border-border-light px-5 py-5">
                  <h2 className="text-3xl font-extrabold tracking-tight text-dark">Đổi Mật Khẩu</h2>
                </div>

                <form onSubmit={handlePasswordSubmit} className="space-y-5 p-5">
                  <label className="block space-y-2">
                    <span className="text-sm font-medium text-dark">Mật khẩu hiện tại</span>
                    <div className="relative">
                      <input
                        type={showPassword.current ? 'text' : 'password'}
                        value={passwordForm.currentPassword}
                        onChange={(event) => setPasswordForm((prev) => ({ ...prev, currentPassword: event.target.value }))}
                        className={`${inputClassName} pr-12`}
                        placeholder="Nhập mật khẩu hiện tại"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((prev) => ({ ...prev, current: !prev.current }))}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text transition-colors hover:text-primary"
                      >
                        {showPassword.current ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </label>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Mật khẩu mới</span>
                      <div className="relative">
                        <input
                          type={showPassword.next ? 'text' : 'password'}
                          value={passwordForm.newPassword}
                          onChange={(event) => setPasswordForm((prev) => ({ ...prev, newPassword: event.target.value }))}
                          className={`${inputClassName} pr-12`}
                          placeholder="Nhập mật khẩu mới"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => ({ ...prev, next: !prev.next }))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text transition-colors hover:text-primary"
                        >
                          {showPassword.next ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </label>

                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-dark">Xác nhận mật khẩu</span>
                      <div className="relative">
                        <input
                          type={showPassword.confirm ? 'text' : 'password'}
                          value={passwordForm.confirmPassword}
                          onChange={(event) => setPasswordForm((prev) => ({ ...prev, confirmPassword: event.target.value }))}
                          className={`${inputClassName} pr-12`}
                          placeholder="Nhập lại mật khẩu mới"
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-text transition-colors hover:text-primary"
                        >
                          {showPassword.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      className="rounded-full bg-primary px-7 py-3 text-base font-bold text-white transition-colors hover:bg-primary-hover"
                    >
                      Đổi mật khẩu
                    </button>
                    {passwordNotice ? <p className="text-sm font-medium text-primary">{passwordNotice}</p> : null}
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}
