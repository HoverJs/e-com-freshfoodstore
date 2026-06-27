'use client';

import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoTitle?: string;
}

export default function VideoModal({ isOpen, onClose, videoTitle = 'Quy trình thu hoạch nông sản sạch FreshFoodStore' }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1A1A1A] w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative border border-gray-800">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
          <h3 className="font-bold text-white text-sm sm:text-base line-clamp-1">{videoTitle}</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
            type="button"
          >
            <X size={20} />
          </button>
        </div>

        {/* Video Body */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="FreshFoodStore Agriculture Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#262626] text-xs text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span>Video giới thiệu nông sản FreshFoodStore tươi xanh, đảm bảo vệ sinh an toàn thực phẩm.</span>
        </div>

      </div>
    </div>
  );
}
