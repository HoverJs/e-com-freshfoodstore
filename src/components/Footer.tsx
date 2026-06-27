'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Leaf, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="w-full bg-[#1A1A1A] text-gray-400 pt-16 pb-8 px-4 md:px-0 border-t border-gray-800">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
        
        {/* Cột 1: Giới thiệu FreshFoodStore */}
        <div className="flex flex-col text-left lg:col-span-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 mb-4 group">
            <div className="bg-primary/10 p-1.5 rounded-full">
              <Leaf size={20} className="text-primary fill-primary/10" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              Fresh<span className="text-primary">FoodStore</span>
            </span>
          </Link>
          {/* Mô tả */}
          <p className="text-xs leading-relaxed text-gray-400 mb-6">
            FreshFoodStore cung cấp thực phẩm sạch, rau củ, trái cây và nông sản chất lượng cao với tiêu chí tươi ngon mỗi ngày.
          </p>
          {/* Thông tin liên hệ */}
          <div className="flex flex-col gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <Phone size={14} className="text-primary" />
              <Link href="tel:19001234" className="hover:text-white transition-colors">(1900) 1234</Link>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={14} className="text-primary" />
              <Link href="mailto:support@freshfoodstore.com" className="hover:text-white transition-colors">support@freshfoodstore.com</Link>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
              <span>123 Đường Sạch, Thảo Điền, Quận 2, TP.HCM</span>
            </div>
          </div>
        </div>

        {/* Cột 2: Tài khoản */}
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Tài khoản</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li><Link href="/profile" className="hover:text-white transition-colors">Trang cá nhân</Link></li>
            <li><Link href="/cart" className="hover:text-white transition-colors">Giỏ hàng của tôi</Link></li>
            <li><Link href="/wishlist" className="hover:text-white transition-colors">Danh sách yêu thích</Link></li>
            <li><Link href="/orders" className="hover:text-white transition-colors">Lịch sử đơn hàng</Link></li>
          </ul>
        </div>

        {/* Cột 3: Hỗ trợ */}
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Hỗ trợ</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li><Link href="/help" className="hover:text-white transition-colors">Trung tâm trợ giúp</Link></li>
            <li><Link href="/track" className="hover:text-white transition-colors">Theo dõi đơn hàng</Link></li>
            <li><Link href="/guide" className="hover:text-white transition-colors">Hướng dẫn mua sắm</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Liên hệ hỗ trợ</Link></li>
          </ul>
        </div>

        {/* Cột 4: Khám phá */}
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Khám phá</h4>
          <ul className="flex flex-col gap-2.5 text-xs">
            <li><Link href="/about" className="hover:text-white transition-colors">Về chúng tôi</Link></li>
            <li><Link href="/category" className="hover:text-white transition-colors">Cửa hàng thực phẩm</Link></li>
            <li><Link href="/news" className="hover:text-white transition-colors">Blog tin tức</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition-colors">Chính sách bảo mật</Link></li>
          </ul>
        </div>

        {/* Cột 5: Bản đồ Google Map */}
        <div className="flex flex-col text-left">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Địa chỉ cửa hàng</h4>
          <div className="w-full h-[130px] rounded-lg overflow-hidden border border-gray-800 shadow-sm bg-[#262626] flex items-center justify-center">
            {mounted ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.124237894236!2d106.73179261480099!3d10.801815992304383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175261775ef293b%3A0x6bcfd35b91a921d2!2zVGjhuqNvIMSQaeG7gW4sIFF14bqtbiAyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1624600000000!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="text-xs text-gray-500 animate-pulse">Đang tải bản đồ...</div>
            )}
          </div>
        </div>

      </div>

      {/* Phần cuối: Bản quyền & Icon thanh toán */}
      <div className="max-w-[1200px] mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gray-500 text-center sm:text-left">
          &copy; {mounted ? new Date().getFullYear() : '2026'} <span className="text-gray-400 font-bold">FreshFoodStore</span>. Tất cả quyền được bảo lưu.
        </p>

        {/* Thanh toán giả lập bằng các text block bo góc nhỏ */}
        <div className="flex items-center gap-2">
          <span className="bg-[#262626] border border-gray-800 text-[10px] text-gray-400 font-bold px-2 py-1 rounded">Visa</span>
          <span className="bg-[#262626] border border-gray-800 text-[10px] text-gray-400 font-bold px-2 py-1 rounded">Mastercard</span>
          <span className="bg-[#262626] border border-gray-800 text-[10px] text-gray-400 font-bold px-2 py-1 rounded">Paypal</span>
          <span className="bg-[#262626] border border-gray-800 text-[10px] text-gray-400 font-bold px-2 py-1 rounded">Apple Pay</span>
        </div>
      </div>
    </footer>
  );
}
