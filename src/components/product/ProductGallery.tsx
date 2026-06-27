'use client';

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  thumbnails: string[];
  name: string;
}

export default function ProductGallery({ images, thumbnails, name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollUp = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const handleScrollDown = () => {
    setActiveIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      {/* List Thumbnail (Dọc ở Desktop, Ngang ở Mobile) */}
      <div className="order-2 md:order-1 flex md:flex-col items-center gap-2 md:w-[90px] shrink-0 justify-between">
        
        {/* Nút lên (Chỉ hiển thị trên desktop) */}
        <button
          onClick={handleScrollUp}
          className="hidden md:flex p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-dark transition-colors cursor-pointer border border-border-light"
          type="button"
          title="Ảnh trước"
        >
          <ChevronUp size={16} />
        </button>

        {/* Thumbnail Items */}
        <div className="flex md:flex-col gap-2.5 overflow-x-auto md:overflow-x-visible md:max-h-[380px] scrollbar-none py-1 md:py-0 w-full justify-center md:justify-start">
          {thumbnails.map((thumb, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square w-16 sm:w-20 md:w-full rounded-lg overflow-hidden border-2 bg-white transition-all cursor-pointer shrink-0 ${
                activeIndex === index
                  ? 'border-primary ring-2 ring-primary/10 scale-95'
                  : 'border-border-light hover:border-gray-400'
              }`}
              type="button"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={thumb}
                alt={`${name} thumbnail ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </button>
          ))}
        </div>

        {/* Nút xuống (Chỉ hiển thị trên desktop) */}
        <button
          onClick={handleScrollDown}
          className="hidden md:flex p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-dark transition-colors cursor-pointer border border-border-light"
          type="button"
          title="Ảnh tiếp theo"
        >
          <ChevronDown size={16} />
        </button>
        
      </div>

      {/* Main Large Image */}
      <div className="order-1 md:order-2 flex-grow aspect-square bg-[#F9F9F9] border border-border-light rounded-2xl overflow-hidden flex items-center justify-center p-6">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex] || images[0]}
          alt={name}
          className="object-contain max-h-full max-w-full hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}
