'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (value: number) => void;
  max?: number;
}

export default function QuantitySelector({ quantity, onChange, max = 99 }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center border border-border-light rounded-full p-1 bg-white select-none">
      <button
        onClick={handleDecrement}
        disabled={quantity <= 1}
        className="w-8 h-8 rounded-full flex items-center justify-center text-dark hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        type="button"
      >
        <Minus size={14} />
      </button>
      <span className="w-10 text-center text-sm font-bold text-dark">{quantity}</span>
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="w-8 h-8 rounded-full flex items-center justify-center text-dark hover:bg-gray-100 transition-colors disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
        type="button"
      >
        <Plus size={14} />
      </button>
    </div>
  );
}
