import { products } from './products';

export interface FilterCategory {
  id: string;
  name: string;
  slug: string;
  count: number;
}

export interface SaleProduct {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
}

export const filterCategories: FilterCategory[] = [
  { id: '1', name: 'Trái cây tươi', slug: 'trai-cay', count: 25 },
  { id: '2', name: 'Rau củ', slug: 'rau-cu', count: 150 },
  { id: '3', name: 'Cá, hải sản', slug: 'hai-san', count: 54 },
  { id: '4', name: 'Thịt', slug: 'thit-ca', count: 47 },
  { id: '5', name: 'Nấm', slug: 'nam', count: 43 },
  { id: '6', name: 'Thực phẩm đông lạnh', slug: 'do-dong-lanh', count: 38 },
  { id: '7', name: 'Gia vị', slug: 'gia-vi', count: 15 },
];

export const filterTags: string[] = [
  'Healthy',
  'Ít béo',
  'Ăn Chay',
  'Trẻ em',
  'Vitamins',
  'Cá tươi',
  'Thịt',
  'Rau sạch',
  'Tiffin',
  'Ăn trưa',
  'Ăn tối',
  'Ăn sáng',
  'Trái cây',
];

export const saleProducts = [
  { id: 'p2', defaultName: 'Ớt chuông' },
  { id: 'p27', defaultName: 'Xoài' },
  { id: 'p19', defaultName: 'Ớt chuông xanh' }
].map(item => {
  const p = products.find(prod => prod.id === item.id);
  return {
    id: item.id,
    name: item.defaultName,
    price: p?.price || 0,
    originalPrice: p?.originalPrice || p?.price || 0,
    image: p?.image || '',
    rating: p?.rating || 5,
    slug: p?.slug || ''
  };
});
