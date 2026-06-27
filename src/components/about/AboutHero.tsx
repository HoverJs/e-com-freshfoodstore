import Image from 'next/image';

const collageImages = {
  hero: {
    src: '/images/about/Image (1).png',
    alt: 'Khach hang FreshFoodStore nhan gio thuc pham tuoi',
  },
  delivery: {
    src: '/images/about/Image (3).png',
    alt: 'Nhan vien FreshFoodStore giao thuc pham tan nha',
  },
  trusted: {
    src: '/images/about/Image (2).png',
    alt: 'Nguon nong san tuoi duoc tuyen chon ky luong',
  },
  customer1: {
    src: '/cus1.jpeg',
    alt: 'Khach hang hai long voi don hang FreshFoodStore',
  },
  customer2: {
    src: '/cus2.jpeg',
    alt: 'Khoanh khac giao nhan thuc pham tai nha',
  },
  customer3: {
    src: '/cus3.jpeg',
    alt: 'Gia dinh nhan thuc pham tuoi song',
  },
  customer4: {
    src: '/cus4.jpeg',
    alt: 'Khach hang tan huong trai nghiem mua sam thuc pham sach',
  },
  feed1: {
    src: '/feed1.jpeg',
    alt: 'Can canh gio thuc pham huu co',
  },
  feed2: {
    src: '/feed2.jpeg',
    alt: 'Rau cu tuoi song san sang giao den khach hang',
  },
};

function BentoTile({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[22px] bg-[#eef4ea] shadow-[0_18px_45px_rgba(26,26,26,0.08)] ${className ?? ''}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  );
}

export default function AboutHero() {
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
        <div className="max-w-[540px]">
          <h1 className="text-4xl font-extrabold tracking-tight text-dark md:text-5xl">
            Cửa hàng thực phẩm tươi sống 100%
          </h1>
          <p className="mt-5 text-base leading-7 text-gray-text md:text-lg">
            FreshFoodStore mang đến trải nghiệm mua sắm thực phẩm sạch hiện đại,
            nơi bạn dễ dàng chọn rau củ tươi, trái cây tuyển chọn và các mặt hàng
            thiết yếu cho bữa ăn mỗi ngày.
          </p>
          <p className="mt-4 text-base leading-7 text-gray-text md:text-lg">
            Chúng tôi tập trung vào chất lượng sản phẩm, giao hàng nhanh và sự
            tiện lợi để mọi gia đình đều có thể mua sắm an tâm ngay tại nhà.
          </p>
        </div>

        <div className="rounded-[30px] bg-[#fbf8f1] p-3 shadow-[0_30px_70px_rgba(26,26,26,0.08)] sm:p-4">
          <div className="grid gap-3 sm:gap-4">
            <div className="grid gap-3 sm:grid-cols-[1.55fr_1fr] sm:gap-4">
              <BentoTile
                src={collageImages.hero.src}
                alt={collageImages.hero.alt}
                className="min-h-[320px] sm:min-h-[430px]"
                priority
              />

              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <BentoTile
                  src={collageImages.customer1.src}
                  alt={collageImages.customer1.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.customer2.src}
                  alt={collageImages.customer2.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.feed1.src}
                  alt={collageImages.feed1.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.customer3.src}
                  alt={collageImages.customer3.alt}
                  className="min-h-[150px]"
                />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-[1.25fr_0.95fr] sm:gap-4">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <BentoTile
                  src={collageImages.feed2.src}
                  alt={collageImages.feed2.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.customer4.src}
                  alt={collageImages.customer4.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.trusted.src}
                  alt={collageImages.trusted.alt}
                  className="min-h-[150px]"
                />
                <BentoTile
                  src={collageImages.delivery.src}
                  alt={collageImages.delivery.alt}
                  className="min-h-[150px]"
                />
              </div>

              <BentoTile
                src={collageImages.delivery.src}
                alt={collageImages.delivery.alt}
                className="min-h-[320px] sm:min-h-[340px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
