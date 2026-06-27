'use client';

import { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';

import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

import QuantitySelector from './QuantitySelector';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);

    for (let i = 1; i <= 5; i += 1) {
      if (i <= floorRating) {
        stars.push(<Star key={i} size={16} className="fill-amber-400 text-amber-400" />);
      } else {
        stars.push(<Star key={i} size={16} className="text-gray-300" />);
      }
    }

    return stars;
  };

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
        slug: product.slug,
      },
      quantity,
    );
  };

  const getCategoryName = (slug: string) => {
    switch (slug) {
      case 'rau-cu':
        return 'Rau củ';
      case 'trai-cay':
        return 'Trái cây';
      case 'thit-ca':
        return 'Thịt & Cá';
      case 'trung':
        return 'Trứng';
      case 'do-uong':
        return 'Đồ uống';
      case 'hai-san':
        return 'Hải sản';
      case 'do-dong-lanh':
        return 'Đồ đông lạnh';
      case 'nam':
        return 'Nấm';
      case 'gia-vi':
        return 'Gia vị';
      case 'snacks':
        return 'Snacks';
      case 'dau-thuc-vat':
        return 'Dầu thực vật';
      default:
        return slug;
    }
  };

  return (
    <div className="flex flex-col text-left">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-extrabold tracking-tight text-dark sm:text-3xl">{product.name}</h1>
        <span
          className={`rounded-md px-2.5 py-1 text-xs font-bold ${
            product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {product.stockStatus || (product.inStock ? 'Còn hàng' : 'Hết hàng')}
        </span>
      </div>

      <div className="mb-5 flex items-center gap-4 border-b border-border-light pb-4 text-xs text-gray-500">
        <div className="flex items-center gap-1.5">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="ml-0.5 font-semibold text-dark">{product.rating} Đánh giá</span>
          <span className="text-gray-300">|</span>
          <span className="cursor-pointer transition-colors hover:text-primary">
            {product.reviewCount || product.reviewsCount} Nhận xét
          </span>
        </div>
        <span className="text-gray-300">|</span>
        <div>
          <span>SKU: </span>
          <span className="font-bold text-dark">{product.sku}</span>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3.5">
        {product.oldPrice ? (
          <span className="text-lg text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>
        ) : null}
        <span className="text-2xl font-extrabold text-primary sm:text-3xl">{formatPrice(product.price)}</span>
        {product.discount ? (
          <span className="rounded-full border border-red-100 bg-red-50 px-3 py-1 text-xs font-bold text-red-600 shadow-sm">
            Sale {product.discount}% OFF
          </span>
        ) : null}
      </div>

      <div className="mb-6 flex flex-col justify-between gap-4 border-y border-border-light py-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-text">Nhãn hàng:</span>
          <div className="rounded-md border border-border-light bg-gray-50 px-3 py-1 text-xs font-bold tracking-wide text-primary shadow-sm">
            {product.brand}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-text">Chia sẻ:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white shadow-sm transition-transform hover:scale-105 hover:bg-primary-hover"
            >
              F
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-xs font-extrabold text-dark shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              T
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-xs font-extrabold text-dark shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              P
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-xs font-extrabold text-dark shadow-sm transition-transform hover:scale-105 hover:bg-gray-200"
            >
              I
            </a>
          </div>
        </div>
      </div>

      <p className="mb-6 text-sm leading-relaxed text-gray-text">{product.shortDescription}</p>

      <div className="mb-8 flex flex-wrap items-center gap-4">
        <QuantitySelector quantity={quantity} onChange={setQuantity} max={product.inStock ? 20 : 0} />

        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="flex flex-grow items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-md transition-all active:scale-95 hover:bg-primary-hover disabled:cursor-not-allowed disabled:bg-gray-300 sm:flex-grow-0"
          type="button"
        >
          <ShoppingBag size={18} />
          <span>Thêm vào giỏ hàng</span>
        </button>

        <button
          onClick={() => setIsWishlist((current) => !current)}
          className={`cursor-pointer rounded-full border border-border-light p-3.5 transition-all ${
            isWishlist
              ? 'border-red-200 bg-red-50 text-red-500 shadow-sm'
              : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-dark'
          }`}
          type="button"
          title="Yêu thích"
        >
          <Heart size={20} className={isWishlist ? 'fill-red-500 text-red-500' : ''} />
        </button>
      </div>

      <div className="flex flex-col gap-3 border-t border-border-light pt-6 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-bold text-dark">Loại:</span>
          <span className="cursor-pointer text-gray-text transition-colors hover:text-primary">
            {getCategoryName(product.categorySlug)}
          </span>
        </div>
        {product.tags && product.tags.length > 0 ? (
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-bold text-dark">Thẻ:</span>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="cursor-pointer rounded bg-bg-light px-2.5 py-1 text-gray-text transition-colors hover:bg-border-light hover:text-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
