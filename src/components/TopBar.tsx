'use client';

import React, { useState } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

export default function TopBar() {
  const [language, setLanguage] = useState('ENG');
  const [currency, setCurrency] = useState('USD');
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showCurrDropdown, setShowCurrDropdown] = useState(false);

  return (
    <div className="w-full border-b border-border-light bg-white text-xs text-gray-text py-2.5 px-4 md:px-0">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        {/* Địa chỉ bên trái */}
        <div className="flex items-center gap-1.5 justify-center sm:justify-start">
          <MapPin size={14} className="text-gray-text" />
          <span>Địa chỉ: 123 Đường Sạch, Phường Thảo Điền, Quận 2, TP. Hồ Chí Minh</span>
        </div>

        {/* Dropdowns bên phải */}
        <div className="flex items-center gap-5 justify-center sm:justify-end">
          {/* Ngôn ngữ */}
          <div className="relative">
            <button
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              onBlur={() => setTimeout(() => setShowLangDropdown(false), 200)}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
            >
              <span>{language === 'ENG' ? 'English' : 'Tiếng Việt'}</span>
              <ChevronDown size={12} />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-border-light shadow-lg rounded z-50 py-1 min-w-[100px]">
                <button
                  onClick={() => setLanguage('ENG')}
                  className="w-full text-left px-3 py-1 hover:bg-bg-light hover:text-primary block"
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('VIE')}
                  className="w-full text-left px-3 py-1 hover:bg-bg-light hover:text-primary block"
                >
                  Tiếng Việt
                </button>
              </div>
            )}
          </div>

          {/* Ngăn cách */}
          <span className="text-border-light">|</span>

          {/* Tiền tệ */}
          <div className="relative">
            <button
              onClick={() => setShowCurrDropdown(!showCurrDropdown)}
              onBlur={() => setTimeout(() => setShowCurrDropdown(false), 200)}
              className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none cursor-pointer"
            >
              <span>{currency}</span>
              <ChevronDown size={12} />
            </button>
            {showCurrDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-white border border-border-light shadow-lg rounded z-50 py-1 min-w-[80px]">
                <button
                  onClick={() => setCurrency('USD')}
                  className="w-full text-left px-3 py-1 hover:bg-bg-light hover:text-primary block"
                >
                  USD
                </button>
                <button
                  onClick={() => setCurrency('VND')}
                  className="w-full text-left px-3 py-1 hover:bg-bg-light hover:text-primary block"
                >
                  VND
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
