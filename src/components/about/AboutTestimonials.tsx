import { MoveLeft, MoveRight } from 'lucide-react';
import Image from 'next/image';

const customerGallery = [
  {
    src: '/cus1.jpeg',
    alt: 'Khách hàng FreshFoodStore nhận đơn hàng tươi sạch',
    className: 'col-span-1 row-span-2 aspect-[0.82] h-full',
  },
  {
    src: '/cus2.jpeg',
    alt: 'Khoảnh khắc giao hàng của FreshFoodStore',
    className: 'col-span-1 row-span-1 aspect-[1.08]',
  },
  {
    src: '/cus3.jpeg',
    alt: 'Nhân viên FreshFoodStore cùng khách hàng',
    className: 'col-span-1 row-span-1 aspect-[1.08]',
  },
  {
    src: '/cus4.jpeg',
    alt: 'Khách hàng chụp ảnh với túi hàng FreshFoodStore',
    className: 'col-span-2 row-span-1 aspect-[1.18] md:col-span-1 md:row-span-2 md:aspect-[0.82]',
  },
];

const feedbackShots = [
  {
    src: '/feed1.jpeg',
    alt: 'Ảnh chụp phản hồi khách hàng về FreshFoodStore số 1',
  },
  {
    src: '/feed2.jpeg',
    alt: 'Ảnh chụp phản hồi khách hàng về FreshFoodStore số 2',
  },
  {
    src: '/feed3.jpeg',
    alt: 'Ảnh chụp phản hồi khách hàng về FreshFoodStore số 3',
  },
];

export default function AboutTestimonials() {
  return (
    <section className="bg-white px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 max-w-[640px]">
          <span className="text-sm font-extrabold uppercase tracking-[0.22em] text-primary">
            FreshFoodStore Reviews
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Phản Hồi Thực Tế Từ Khách Hàng
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-text">
            Những hình ảnh giao nhận và đánh giá thật từ khách hàng giúp FreshFoodStore giữ vững cam kết
            về thực phẩm sạch, giao nhanh và trải nghiệm tử tế mỗi ngày.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.04fr_0.96fr]">
          <div className="grid auto-rows-fr grid-cols-2 gap-4">
            {customerGallery.map((item) => (
              <div
                key={item.src}
                className={`overflow-hidden rounded-[26px] bg-[#F4F7F1] shadow-[0_20px_50px_rgba(26,26,26,0.08)] ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={720}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="rounded-[32px] bg-[#FCFCFC] p-5 shadow-[0_20px_60px_rgba(26,26,26,0.08)] ring-1 ring-border-light md:p-7">
            <div className="flex flex-col gap-3 border-b border-border-light pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">Đánh giá nổi bật</p>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-dark md:text-3xl">
                  Khách hàng nói gì về chúng tôi
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Xem phản hồi trước"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
                >
                  <MoveLeft size={18} />
                </button>
                <span className="text-lg font-semibold text-gray-text">1</span>
                <button
                  type="button"
                  aria-label="Xem phản hồi tiếp theo"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <MoveRight size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              {feedbackShots.map((feedback) => (
                <div
                  key={feedback.src}
                  className="overflow-hidden rounded-[24px] bg-white shadow-[0_16px_40px_rgba(26,26,26,0.08)] ring-1 ring-border-light"
                >
                  <Image
                    src={feedback.src}
                    alt={feedback.alt}
                    width={900}
                    height={520}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
