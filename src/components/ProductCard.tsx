'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Apple, Beef, Eye, Fish, Heart, Leaf, ShoppingCart, Star } from 'lucide-react';

import type { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isWishlist, setIsWishlist] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { addToCart } = useCart();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);

    for (let i = 1; i <= 5; i += 1) {
      if (i <= floorRating) {
        stars.push(<Star key={i} size={14} className="fill-amber-400 text-amber-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(
          <div key={i} className="relative inline-block">
            <Star size={14} className="text-gray-300" />
            <div className="absolute left-0 top-0 w-1/2 overflow-hidden">
              <Star size={14} className="fill-amber-400 text-amber-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} size={14} className="text-gray-300" />);
      }
    }

    return stars;
  };

  const handleAddToCart = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    addToCart({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      slug: product.slug,
    });
  };

  const handleToggleWishlist = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setIsWishlist((current) => !current);
  };

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-bg-light">
        {product.tag ? (
          <span
            className={`absolute left-3.5 top-3.5 z-10 rounded px-2.5 py-1 text-[10px] font-bold uppercase shadow-sm ${
              product.tag === 'Sale'
                ? 'bg-red-500 text-white'
                : product.tag === 'Hot'
                  ? 'bg-orange-500 text-white'
                  : product.tag === 'Best Seller'
                    ? 'bg-amber-500 text-white'
                    : 'bg-blue-500 text-white'
            }`}
          >
            {product.tag}
          </span>
        ) : null}

        {!product.inStock ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
            <span className="rounded-md bg-dark px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
              Hết hàng
            </span>
          </div>
        ) : null}

        {imgError ? (
          <Link
            href={`/products/${product.slug}`}
            className="flex h-full w-full flex-col items-center justify-center gap-2 bg-bg-light p-4 text-primary/60"
          >
            {product.categorySlug === 'thit-ca' ? (
              <Beef size={40} />
            ) : product.categorySlug === 'hai-san' ? (
              <Fish size={40} />
            ) : product.categorySlug === 'trai-cay' ? (
              <Apple size={40} />
            ) : (
              <Leaf size={40} />
            )}
            <span className="text-center text-[9px] font-bold uppercase tracking-widest text-gray-text">
              Fresh Food
            </span>
          </Link>
        ) : (
          <Link href={`/products/${product.slug}`} className="block h-full w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </Link>
        )}

        <div className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={handleToggleWishlist}
            className={`cursor-pointer rounded-full bg-white p-2.5 text-dark shadow-md transition-all hover:bg-primary hover:text-white ${
              isWishlist ? 'border-red-500 fill-red-500 text-red-500' : ''
            }`}
            title="Yêu thích"
          >
            <Heart size={18} className={isWishlist ? 'fill-red-500 text-red-500' : ''} />
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="flex cursor-pointer items-center justify-center rounded-full bg-white p-2.5 text-dark shadow-md transition-all hover:bg-primary hover:text-white"
            title="Xem chi tiết"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-4 text-left">
        <div className="mb-1 flex items-center gap-1">
          <div className="flex">{renderStars(product.rating)}</div>
          <span className="ml-1 text-[10px] font-medium text-gray-text">({product.reviewsCount})</span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="mb-2 min-h-[40px] cursor-pointer line-clamp-2 text-sm font-bold leading-tight text-dark transition-colors group-hover:text-primary">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-border-light pt-2">
          <div className="flex flex-col">
            <span className="text-sm font-extrabold leading-none text-primary sm:text-base">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice ? (
              <span className="mt-1 text-xs leading-none text-gray-text line-through">
                {formatPrice(product.originalPrice)}
              </span>
            ) : null}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex shrink-0 cursor-pointer items-center justify-center rounded-full p-2.5 shadow-sm transition-all ${
              product.inStock
                ? 'bg-bg-light text-dark hover:scale-105 hover:bg-primary hover:text-white'
                : 'cursor-not-allowed bg-gray-100 text-gray-400'
            }`}
            title="Thêm vào giỏ hàng"
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
