import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgePercent, Ticket, TimerReset } from 'lucide-react';

const highlightItems = [
  {
    id: 'highlight-1',
    icon: BadgePercent,
    title: 'Deal mới mỗi ngày',
    description: 'Cập nhật ưu đãi rau củ, trái cây và thực phẩm thiết yếu theo khung giờ.',
  },
  {
    id: 'highlight-2',
    icon: Ticket,
    title: 'Voucher dễ dùng',
    description: 'Mã giảm giá rõ điều kiện, phù hợp cả đơn nhỏ lẫn giỏ hàng gia đình.',
  },
  {
    id: 'highlight-3',
    icon: TimerReset,
    title: 'Campaign theo mùa',
    description: 'Ưu đãi xoay vòng theo tuần để bạn không bỏ lỡ dịp mua tốt nhất.',
  },
];

export default function NewsHero() {
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-[620px]">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary">
            Tin tức ưu đãi FreshFoodStore
          </span>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
            Nơi tổng hợp deal, voucher và các chương trình khuyến mãi đáng mua nhất
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-text md:text-lg">
            Trang Tin tức giúp bạn theo dõi các đợt giảm giá nổi bật, combo tiết
            kiệm và mã ưu đãi mới nhất để mua thực phẩm tươi sạch với chi phí hợp lý hơn.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/category"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
            >
              Xem sản phẩm đang ưu đãi
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-border-light px-6 py-3.5 text-sm font-bold text-dark transition-colors hover:border-primary hover:text-primary"
            >
              Nhận voucher doanh nghiệp
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
            <article className="relative min-h-[290px] overflow-hidden rounded-[28px] border border-border-light shadow-[0_18px_50px_rgba(26,26,26,0.06)]">
              <Image
                src="https://vavista.com/wp-content/uploads/2017/05/AdobeStock_111774771.jpg"
                alt="Giỏ nông sản khuyến mãi"
                fill
                sizes="(max-width: 640px) 100vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#112d11]/80 via-[#112d11]/52 to-transparent" />

              <div className="relative z-10 flex h-full max-w-[280px] flex-col justify-end p-6 sm:p-7">
                <span className="w-fit rounded-full bg-white/92 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-primary">
                  Deal hot
                </span>
                <h2 className="mt-4 text-[2rem] font-extrabold leading-[1.08] text-white sm:text-[2.2rem]">
                  Giỏ nông sản tươi với ưu đãi cập nhật mỗi ngày
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/82">
                  Theo dõi deal sáng, combo gia đình và voucher giao nhanh nổi bật trong tuần.
                </p>
              </div>
            </article>

            <article className="relative min-h-[290px] overflow-hidden rounded-[28px] border border-border-light bg-white shadow-[0_18px_50px_rgba(26,26,26,0.06)]">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhkRSla0MREwSTzNQ_HGr-YRodGvcIhfDQcSSqzshWGAiqSd9a5IEbQ&s=10"
                alt="Sản phẩm rau củ FreshFoodStore"
                fill
                sizes="(max-width: 640px) 100vw, 26vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <p className="text-sm font-semibold text-white">Ưu đãi rau củ và nông sản theo mùa</p>
              </div>
            </article>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {highlightItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.id}
                  className={`rounded-[24px] border border-border-light p-6 shadow-[0_18px_50px_rgba(26,26,26,0.05)] ${
                    index === 0 ? 'bg-[linear-gradient(135deg,#effded_0%,#e4f9e7_100%)]' : 'bg-white'
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-dark">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-gray-text">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
