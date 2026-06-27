'use client';

import React, { useState } from 'react';
import { Search, PhoneCall, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Tìm kiếm: "${searchQuery}" (Tính năng demo)`);
  };

  return (
    <header className="w-full bg-white py-5 px-4 md:px-0 border-b border-border-light">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo FreshFoodStore */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
            <Leaf size={24} className="text-primary fill-primary/10" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-dark flex items-center">
            Fresh<span className="text-primary font-bold">FoodStore</span>
          </span>
        </Link>

        {/* Thanh tìm kiếm */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="w-full md:max-w-[500px] flex items-center border border-border-light rounded-md overflow-hidden focus-within:border-primary transition-colors"
        >
          <div className="flex items-center pl-3 text-gray-text">
            <Search size={18} />
          </div>
          <input
            type="text"
            placeholder="Tìm kiếm thực phẩm tươi sạch..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 text-sm text-dark placeholder-gray-text focus:outline-none bg-transparent"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-2.5 transition-colors cursor-pointer"
          >
            Tìm kiếm
          </button>
        </form>

        {/* Hotline bên phải */}
        <div className="flex items-center gap-3">
          <div className="border border-border-light p-2.5 rounded-full text-primary bg-bg-light">
            <PhoneCall size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-text uppercase tracking-wider">Hỗ trợ 24/7</span>
            <Link href="tel:19001234" className="text-base font-bold text-dark hover:text-primary transition-colors">
              (1900) 1234
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
