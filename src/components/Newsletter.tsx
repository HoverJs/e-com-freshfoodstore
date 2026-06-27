'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    alert(`Cảm ơn bạn đã đăng ký với email: ${email}! Chúng tôi đã gửi mã giảm giá 10% vào hộp thư của bạn.`);
    setEmail('');
  };

  return (
    <section className="w-full bg-dark text-white py-12 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Nội dung bên trái */}
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl font-extrabold mb-2 tracking-tight">
            Đăng Ký Nhận Bản Tin FreshFoodStore
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light max-w-[500px]">
            Nhận ngay mã giảm giá <span className="text-primary font-bold">10%</span> cho lần mua hàng đầu tiên và cập nhật những ưu đãi nông sản sạch mới nhất mỗi ngày.
          </p>
        </div>

        {/* Form đăng ký bên phải */}
        <form 
          onSubmit={handleSubscribe}
          className="w-full lg:max-w-[450px] flex items-center bg-[#262626] border border-gray-800 rounded-lg overflow-hidden focus-within:border-primary transition-colors"
        >
          <input
            type="email"
            placeholder="Địa chỉ email của bạn..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-6 py-3.5 flex items-center gap-2 transition-colors cursor-pointer shrink-0"
          >
            <span>Đăng ký</span>
            <Send size={14} />
          </button>
        </form>

      </div>
    </section>
  );
}
