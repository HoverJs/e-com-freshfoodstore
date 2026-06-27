'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const feedbackShots = [
  {
    src: '/feed1.jpeg',
    alt: 'Anh chup phan hoi khach hang ve FreshFoodStore so 1',
  },
  {
    src: '/feed2.jpeg',
    alt: 'Anh chup phan hoi khach hang ve FreshFoodStore so 2',
  },
  {
    src: '/feed3.jpeg',
    alt: 'Anh chup phan hoi khach hang ve FreshFoodStore so 3',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? feedbackShots.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === feedbackShots.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="bg-white px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-[1280px] gap-10 xl:grid-cols-[1.03fr_0.97fr] xl:items-start">
        <div className="grid gap-4 md:grid-cols-[1.35fr_0.95fr] md:grid-rows-[278px_278px]">
          <div className="overflow-hidden bg-[#f3f3ed] md:row-span-1 md:h-[278px] xl:h-[320px] xl:row-span-1">
            <Image
              src="/cus1.jpeg"
              alt="Khach hang FreshFoodStore nhan don hang tuoi sach"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden bg-[#f3f3ed] md:h-[278px] xl:h-[320px]">
            <Image
              src="/cus2.jpeg"
              alt="Khoanh khac khach hang FreshFoodStore chup anh cung don hang"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden bg-[#f3f3ed] md:h-[278px] xl:h-[320px]">
            <Image
              src="/cus3.jpeg"
              alt="Hinh anh giao nhan thuc te cua FreshFoodStore"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden bg-[#f3f3ed] md:h-[278px] xl:h-[320px]">
            <Image
              src="/cus4.jpeg"
              alt="Khach hang nhan don hang FreshFoodStore tai nha"
              width={900}
              height={1200}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white">
          <div className="overflow-hidden bg-white">
            <Image
              src={feedbackShots[activeIndex].src}
              alt={feedbackShots[activeIndex].alt}
              width={1200}
              height={1000}
              className="h-auto w-full object-contain"
              priority={activeIndex === 0}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-full border border-border-light bg-white p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <button
                type="button"
                aria-label="Xem phản hồi trước"
                onClick={showPrevious}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-all duration-200 hover:bg-primary-hover active:scale-95 shadow-sm shadow-primary/20 cursor-pointer"
              >
                <ChevronLeft size={16} strokeWidth={2.5} />
              </button>

              <div className="flex min-w-[56px] items-baseline justify-center gap-1 font-sans">
                <span className="text-lg font-bold text-dark">
                  {activeIndex + 1}
                </span>
                <span className="text-xs font-semibold text-gray-300">/</span>
                <span className="text-xs font-semibold text-gray-400">
                  {feedbackShots.length}
                </span>
              </div>

              <button
                type="button"
                aria-label="Xem phản hồi tiếp theo"
                onClick={showNext}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition-all duration-200 hover:bg-primary-hover active:scale-95 shadow-sm shadow-primary/20 cursor-pointer"
              >
                <ChevronRight size={16} strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
