import { products, Product } from '@/data/products';

export function getProductBySlug(slug: string): Product | undefined {
  const found = products.find((p) => p.slug === slug);
  if (!found) return undefined;

  // Điền dữ liệu mặc định để tránh crash trang nếu sản phẩm chưa có đầy đủ thông tin chi tiết
  const defaultImages = [
    found.image,
    'https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1557844352-761f2565b576?w=500&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=80'
  ];

  return {
    ...found,
    oldPrice: found.oldPrice || found.originalPrice || found.price,
    discount: found.discount || (found.originalPrice ? Math.round((1 - found.price / found.originalPrice) * 100).toString() : undefined),
    reviewCount: found.reviewCount || found.reviewsCount || 0,
    sku: found.sku || `SKU-${found.id.toUpperCase()}`,
    stockStatus: found.stockStatus || (found.inStock ? 'Còn hàng' : 'Hết hàng'),
    images: found.images && found.images.length > 0 ? found.images : defaultImages,
    thumbnails: found.thumbnails && found.thumbnails.length > 0 ? found.thumbnails : defaultImages,
    brand: found.brand || 'FreshFoodStore',
    shortDescription: found.shortDescription || `${found.name} tươi ngon chất lượng cao, cung cấp dinh dưỡng lành mạnh mỗi ngày.`,
    description: found.description || `${found.name} được thu hoạch tự nhiên từ nông trại sạch tiêu chuẩn VietGAP. Sản phẩm được lựa chọn kỹ càng, đóng gói cẩn thận để giữ nguyên độ tươi ngon cũng như các chất dinh dưỡng tốt nhất khi giao đến tay khách hàng. Phù hợp làm nguyên liệu cho nhiều bữa ăn gia đình đầm ấm.`,
    tags: found.tags && found.tags.length > 0 ? found.tags : ['Thực phẩm sạch', 'Tươi ngon', found.name],
    relatedProductIds: found.relatedProductIds && found.relatedProductIds.length > 0 ? found.relatedProductIds : ['p18', 'p8', 'p19', 'p23']
  };
}

export function getRelatedProducts(product: Product): Product[] {
  if (product.relatedProductIds && product.relatedProductIds.length > 0) {
    const matched = products.filter((p) => product.relatedProductIds?.includes(p.id));
    if (matched.length > 0) return matched;
  }
  // Fallback: lấy các sản phẩm cùng danh mục loại trừ chính nó
  return products.filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id).slice(0, 4);
}
