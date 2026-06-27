import type { ComponentType } from 'react';
import { AtSign, Camera, Globe, MoveLeft, MoveRight, PinIcon } from 'lucide-react';
import Image from 'next/image';

import { SocialPlatform, teamMembers } from '@/data/about';

const socialIconMap: Record<SocialPlatform, ComponentType<{ size?: number; className?: string }>> = {
  facebook: Globe,
  twitter: AtSign,
  pinterest: PinIcon,
  instagram: Camera,
};

export default function TeamSection() {
  return (
    <section className="bg-bg-light px-4 py-14 md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Team phát triển dự án
          </h2>
          <p className="mx-auto mt-4 max-w-[660px] text-base leading-7 text-gray-text">
            Chúng tôi phát triển dự án với mục tiêu giúp mọi người dễ dàng tìm
            được nguồn thực phẩm tươi sạch, minh bạch và giao nhanh mỗi ngày.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <button
            type="button"
            aria-label="Xem thành viên trước"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-dark transition-colors hover:border-primary hover:text-primary"
          >
            <MoveLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Xem thành viên tiếp theo"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-light bg-white text-dark transition-colors hover:border-primary hover:text-primary"
          >
            <MoveRight size={18} />
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-[20px] border border-border-light bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={320}
                  height={260}
                  className="h-[260px] w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-dark/0 opacity-0 transition-all duration-300 group-hover:bg-dark/45 group-hover:opacity-100">
                  {member.socialLinks.map((platform) => {
                    const Icon = socialIconMap[platform];

                    return (
                      <span
                        key={platform}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-dark transition-colors hover:bg-primary hover:text-white"
                      >
                        <Icon size={16} />
                      </span>
                    );
                  })}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-dark">{member.name}</h3>
                <p className="mt-1 text-sm text-gray-text">{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
