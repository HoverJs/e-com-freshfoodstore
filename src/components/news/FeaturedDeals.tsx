import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock3, Tag } from 'lucide-react';

import { featuredDeals } from '@/data/news';

export default function FeaturedDeals() {
  return (
    <section className="bg-[#fbfbfb] px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Deal nổi bật</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
              Những chương trình đang đáng mua nhất tuần này
            </h2>
          </div>
          <p className="max-w-[360px] text-sm leading-7 text-gray-text">
            Tập trung vào ưu đãi dễ áp dụng, giúp bạn tối ưu chi tiêu mà vẫn giữ chất lượng bữa ăn.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {featuredDeals.map((deal) => (
            <article
              key={deal.id}
              className={`rounded-[28px] border border-border-light bg-gradient-to-br ${deal.accentClass} p-6 shadow-[0_18px_50px_rgba(26,26,26,0.05)]`}
            >
              <div className="mb-5 overflow-hidden rounded-[20px] border border-white/70 bg-white/40">
                <Image
                  src={deal.image}
                  alt={deal.title}
                  width={1129}
                  height={750}
                  className="h-[210px] w-full object-cover"
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {deal.badge}
                </span>
                <span className="text-sm font-semibold text-dark/70">{deal.category}</span>
              </div>

              <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-dark">{deal.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-text">{deal.description}</p>

              <div className="mt-6 rounded-2xl bg-white/75 p-4">
                <div className="flex items-center gap-2 text-dark">
                  <Tag size={16} className="text-primary" />
                  <span className="text-lg font-bold">{deal.discount}</span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-sm text-gray-text">
                  <Clock3 size={16} className="text-primary" />
                  <span>{deal.period}</span>
                </div>
              </div>

              <Link
                href="/category"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-dark transition-colors hover:text-primary"
              >
                {deal.cta}
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
