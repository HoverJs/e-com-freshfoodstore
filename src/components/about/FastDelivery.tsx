import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const deliveryPoints = [
  'Giao hàng nhanh',
  'Đảm bảo an toàn',
  'Giao dịch nhanh chóng',
];

export default function FastDelivery() {
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-[520px]">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Giao hàng nhanh
          </h2>
          <p className="mt-5 text-base leading-7 text-gray-text">
            Quy trình xử lý đơn hàng và vận chuyển của FreshFoodStore được tối ưu
            để thực phẩm đến tay bạn nhanh, gọn và vẫn giữ nguyên độ tươi ngon.
          </p>
          <ul className="mt-6 space-y-3">
            {deliveryPoints.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-gray-text">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={14} />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/category"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-hover"
          >
            Mua ngay
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#f8fbff_0%,#eef6ff_52%,#ffffff_100%)] shadow-[0_24px_60px_rgba(26,26,26,0.08)]">
          <Image
            src="/images/about/Image (3).png"
            alt="Nhân viên giao hàng FreshFoodStore"
            width={887}
            height={627}
            className="h-auto w-full object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
