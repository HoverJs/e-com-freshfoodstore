'use client';

import React from 'react';
import { Truck, Headphones, ShieldCheck, RotateCcw } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Miễn phí giao hàng',
    description: 'Cho tất cả các hóa đơn từ 500k',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ 24/7',
    description: 'Phục vụ tận tâm, mọi lúc mọi nơi',
  },
  {
    icon: ShieldCheck,
    title: 'Thanh toán an toàn',
    description: 'Bảo mật thông tin giao dịch 100%',
  },
  {
    icon: RotateCcw,
    title: 'Hoàn tiền 30 ngày',
    description: 'Cam kết chất lượng thực phẩm tươi sạch',
  },
];

export default function ServiceFeatures() {
  return (
    <section className="w-full bg-white py-8 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto border border-border-light rounded-2xl shadow-sm p-6 sm:p-8 bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-border-light">
        {features.map((feat, index) => {
          const Icon = feat.icon;
          return (
            <div 
              key={index} 
              className={`flex items-center gap-4 ${
                index > 0 ? 'pt-6 sm:pt-0 lg:pl-8' : ''
              } ${
                index === 1 ? 'sm:pl-0 lg:pl-8' : ''
              } ${
                index === 2 ? 'sm:pt-6 lg:pt-0 lg:pl-8' : ''
              } ${
                index === 3 ? 'sm:pt-6 lg:pt-0 lg:pl-8' : ''
              }`}
            >
              <div className="bg-primary/10 text-primary p-3 rounded-full flex items-center justify-center shrink-0">
                <Icon size={24} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm font-bold text-dark mb-0.5 leading-tight">{feat.title}</h3>
                <p className="text-xs text-gray-text leading-tight">{feat.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
