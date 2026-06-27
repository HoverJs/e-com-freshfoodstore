import { Copy, TicketPercent } from 'lucide-react';

import { vouchers } from '@/data/news';

export default function VoucherBoard() {
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Voucher board</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Mã ưu đãi sẵn sàng để bạn áp dụng ngay
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {vouchers.map((voucher) => (
            <article
              key={voucher.id}
              className="relative overflow-hidden rounded-[24px] border border-dashed border-primary/30 bg-white p-6 shadow-[0_16px_40px_rgba(26,26,26,0.05)]"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10" />

              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-primary">
                    <TicketPercent size={18} />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">Voucher</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-extrabold tracking-[0.18em] text-dark">
                    {voucher.code}
                  </h3>
                  <p className="mt-4 text-lg font-bold text-dark">{voucher.title}</p>
                  <p className="mt-2 text-sm leading-7 text-gray-text">{voucher.description}</p>
                </div>

                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-[#fafafa] text-gray-text">
                  <Copy size={18} />
                </span>
              </div>

              <div className="mt-5 rounded-2xl bg-bg-light px-4 py-3 text-sm font-medium text-gray-text">
                {voucher.condition}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
