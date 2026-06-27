'use client';

import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function VideoBanner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="w-full py-8 px-4 md:px-0">
      <div 
        className="max-w-[1200px] mx-auto rounded-2xl overflow-hidden min-h-[350px] md:min-h-[420px] relative flex flex-col items-center justify-center text-center px-6 shadow-sm group"
      >
        {/* Background image rau củ quả tươi sạch từ Unsplash */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&auto=format&fit=crop&q=80')` 
          }}
        />
        {/* Overlay tối mờ */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/65 transition-colors" />

        {/* Nội dung trên Banner */}
        <div className="relative z-10 text-white max-w-[600px] flex flex-col items-center">
          <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 bg-primary/20 px-3 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm">
            Quy trình sản xuất
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight mb-6">
            Nông Nghiệp Hữu Cơ Thực Sự Là Gì?
          </h2>
          
          {/* Nút Play tròn to có hiệu ứng lan tỏa */}
          <button 
            onClick={() => setIsOpen(true)}
            className="w-20 h-20 bg-white hover:bg-primary hover:text-white text-primary rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer relative group/btn"
          >
            {/* Hiệu ứng vòng tròn lan tỏa nhấp nháy bên sau */}
            <span className="absolute inset-0 rounded-full bg-white/30 animate-ping group-hover/btn:bg-primary/30" />
            <Play size={30} className="ml-1 fill-current" />
          </button>
          
          <span className="text-xs text-gray-300 uppercase tracking-widest mt-6 font-bold">
            Bấm để phát video (2:30)
          </span>
        </div>

        {/* Modal Video Popup (Nếu mở) */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 md:p-8 backdrop-blur-sm animate-fade-in">
            {/* Click ngoài để đóng */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setIsOpen(false)} />
            
            {/* Video container */}
            <div className="relative bg-black w-full max-w-[800px] aspect-video rounded-xl overflow-hidden shadow-2xl z-10 border border-white/10">
              {/* Nút Đóng */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-20 bg-black/75 hover:bg-red-600 text-white p-2 rounded-full transition-colors shadow-md cursor-pointer"
                title="Đóng video"
              >
                <X size={18} />
              </button>

              {/* Iframe video mockup hữu cơ (Video thực tế về organic farm) */}
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/5T2k9aP9U3Y?autoplay=1" 
                title="Quy trình nông nghiệp hữu cơ sạch FreshFoodStore"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
