import React from 'react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/data/products';
import { getRelatedProducts } from '@/lib/products';

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({ product }: RelatedProductsProps) {
  const relatedList = getRelatedProducts(product);

  if (relatedList.length === 0) return null;

  return (
    <div className="w-full mt-16 pt-12 border-t border-border-light">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-dark tracking-tight mb-8 text-center">
        Sản Phẩm Liên Quan
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4 md:px-0">
        {relatedList.slice(0, 4).map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}
