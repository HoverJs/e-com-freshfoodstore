import Image from 'next/image';
import { CalendarClock, CircleArrowRight, Sparkles } from 'lucide-react';

import { promoTimeline } from '@/data/news';

export default function PromoTimeline() {
  return (
    <section className="bg-dark px-4 py-14 text-white md:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="max-w-[420px]">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-primary">
            <Sparkles size={24} />
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
            Lịch khuyến mãi sắp tới để bạn chủ động săn deal
          </h2>
          <p className="mt-5 text-sm leading-7 text-gray-300">
            FreshFoodStore lên kế hoạch campaign theo mùa và theo nhu cầu mua sắm thực tế,
            giúp bạn dễ chọn đúng thời điểm tốt nhất cho mỗi đơn hàng.
          </p>

          <div className="mt-8 grid grid-cols-[1.1fr_0.9fr] gap-4">
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <Image
                src="/images/about/Image (1).png"
                alt="Khuyến mãi nông sản FreshFoodStore"
                width={716}
                height={525}
                className="h-[220px] w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
              <Image
                src="/images/about/Image (3).png"
                alt="Giao hàng ưu đãi FreshFoodStore"
                width={887}
                height={627}
                className="h-[220px] w-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="space-y-5">
          {promoTimeline.map((item) => (
            <article
              key={item.id}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <CalendarClock size={16} />
                    <span className="text-sm font-semibold">{item.date}</span>
                  </div>
                  <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
                </div>
                <CircleArrowRight size={22} className="text-primary" />
              </div>
              <p className="mt-3 text-sm leading-7 text-gray-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
