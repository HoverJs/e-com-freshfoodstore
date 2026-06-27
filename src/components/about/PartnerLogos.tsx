import { partnerLogos } from '@/data/about';

export default function PartnerLogos() {
  return (
    <section className="border-y border-border-light bg-white px-4 py-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {partnerLogos.map((logo) => (
          <div
            key={logo.id}
            className="flex min-h-20 items-center justify-center rounded-2xl border border-border-light bg-[#fafafa] px-4 text-center text-lg font-bold uppercase tracking-[0.2em] text-dark/35 transition-colors hover:text-primary/80"
          >
            {logo.label}
          </div>
        ))}
      </div>
    </section>
  );
}
