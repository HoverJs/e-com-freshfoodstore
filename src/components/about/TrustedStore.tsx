import {
  Headphones,
  Leaf,
  MessageCircleMore,
  PackageCheck,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import Image from 'next/image';

import { aboutFeatures } from '@/data/about';

const iconMap = {
  leaf: Leaf,
  headphones: Headphones,
  message: MessageCircleMore,
  shield: ShieldCheck,
  truck: Truck,
  package: PackageCheck,
};

export default function TrustedStore() {
  return (
    <section className="bg-[#fbfbfb] px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] bg-[#eaf6e8] shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
          <Image
            src="/images/about/Image (2).png"
            alt="Nông dân ôm giỏ rau củ tươi"
            width={1129}
            height={750}
            className="h-auto w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            100% Cửa hàng thực phẩm đáng tin cậy
          </h2>
          <p className="mt-5 max-w-[520px] text-base leading-7 text-gray-text">
            Từ khâu chọn nguồn hàng đến đóng gói và vận chuyển, FreshFoodStore
            luôn đặt sự minh bạch và an toàn lên hàng đầu để bạn yên tâm trong
            từng đơn mua sắm.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutFeatures.map((feature) => {
              const Icon = iconMap[feature.icon];

              return (
                <div
                  key={feature.id}
                  className="flex items-start gap-4 rounded-2xl border border-border-light bg-white p-4 shadow-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-dark">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-gray-text">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
