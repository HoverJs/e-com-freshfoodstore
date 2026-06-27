'use client';

import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Product } from '@/data/products';
import VideoModal from './VideoModal';

interface ProductTabsProps {
  product: Product;
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<'mota' | 'chitiet' | 'nhanxet'>('mota');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const getCategoryName = (slug: string) => {
    switch (slug) {
      case 'rau-cu': return 'Rau củ';
      case 'trai-cay': return 'Trái cây';
      case 'thit-ca': return 'Thịt & Cá';
      case 'trung': return 'Trứng';
      case 'do-uong': return 'Đồ uống';
      case 'hai-san': return 'Hải sản';
      case 'do-dong-lanh': return 'Đồ đông lạnh';
      case 'nam': return 'Nấm';
      case 'gia-vi': return 'Gia vị';
      case 'snacks': return 'Snacks';
      case 'dau-thuc-vat': return 'Dầu thực vật';
      default: return slug;
    }
  };

  return (
    <div className="w-full">
      {/* Tab Buttons Navigation */}
      <div className="flex border-b border-border-light justify-center gap-8 mb-8">
        <button
          onClick={() => setActiveTab('mota')}
          className={`py-3.5 px-1 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
            activeTab === 'mota'
              ? 'border-primary text-dark font-extrabold'
              : 'border-transparent text-gray-400 hover:text-dark'
          }`}
          type="button"
        >
          Mô tả
        </button>
        <button
          onClick={() => setActiveTab('chitiet')}
          className={`py-3.5 px-1 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
            activeTab === 'chitiet'
              ? 'border-primary text-dark font-extrabold'
              : 'border-transparent text-gray-400 hover:text-dark'
          }`}
          type="button"
        >
          Thông tin chi tiết
        </button>
        <button
          onClick={() => setActiveTab('nhanxet')}
          className={`py-3.5 px-1 font-bold text-sm sm:text-base border-b-2 transition-all cursor-pointer ${
            activeTab === 'nhanxet'
              ? 'border-primary text-dark font-extrabold'
              : 'border-transparent text-gray-400 hover:text-dark'
          }`}
          type="button"
        >
          Nhận xét khách hàng
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white py-2 text-left">
        {/* Tab Mô Tả */}
        {activeTab === 'mota' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left Col: Text Descriptions */}
            <div className="space-y-6">
              <p className="text-sm text-gray-text leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
              
              {/* Bullet list with green checkmarks */}
              <ul className="space-y-3.5">
                {[
                  '100g rau tươi cung cấp lượng vitamin và khoáng chất dồi dào.',
                  'Đảm bảo quy trình gieo trồng hoàn toàn tự nhiên và khép kín.',
                  'Không chứa dư lượng thuốc bảo vệ thực vật hay chất kích thích tăng trưởng.',
                  'Hỗ trợ tiêu hóa, tăng cường sức đề kháng và thanh lọc cơ thể.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-dark font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-50 text-primary flex items-center justify-center shrink-0 mt-0.5 border border-green-200">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: Video Preview Banner & Features Box */}
            <div className="flex flex-col gap-6">
              {/* Video Banner Container */}
              <div 
                onClick={() => setIsVideoOpen(true)}
                className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-border-light cursor-pointer group bg-dark/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&auto=format&fit=crop&q=80"
                  alt="Video Preview"
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-dark/10 group-hover:bg-dark/20 transition-colors" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-white ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 2 Feature Boxes below Video */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F4FDF4] border border-green-100 rounded-xl p-4 flex items-center gap-3.5 text-left">
                  <span className="text-3xl">🏷️</span>
                  <div>
                    <h5 className="font-bold text-dark text-sm">Giảm {product.discount || '64'}%</h5>
                    <p className="text-xs text-gray-text mt-0.5">Tiết kiệm tới {product.discount || '64'}% giá trị</p>
                  </div>
                </div>
                <div className="bg-[#F4FDF4] border border-green-100 rounded-xl p-4 flex items-center gap-3.5 text-left">
                  <span className="text-3xl">🥬</span>
                  <div>
                    <h5 className="font-bold text-dark text-sm">100% Tươi sạch</h5>
                    <p className="text-xs text-gray-text mt-0.5">100% Nông sản hữu cơ sạch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Thông tin chi tiết */}
        {activeTab === 'chitiet' && (
          <div className="max-w-2xl border border-border-light rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {[
                  { label: 'Tên sản phẩm', val: product.name },
                  { label: 'Danh mục', val: getCategoryName(product.categorySlug) },
                  { label: 'Xuất xứ', val: 'Việt Nam (Đà Lạt)' },
                  { label: 'Trọng lượng', val: '200g / gói' },
                  { label: 'Tình trạng', val: product.stockStatus || (product.inStock ? 'Còn hàng' : 'Hết hàng') },
                  { label: 'Hạn sử dụng', val: '3 - 5 ngày kể từ ngày thu hoạch' },
                  { label: 'Bảo quản', val: 'Ngăn mát tủ lạnh (4 - 8°C), nên bọc kín bằng màng bọc thực phẩm' }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-bg-light/40' : 'bg-white'}>
                    <td className="px-6 py-3.5 font-bold text-dark w-1/3 border-b border-border-light/70">{row.label}</td>
                    <td className="px-6 py-3.5 text-gray-text border-b border-border-light/70">{row.val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab Nhận xét khách hàng */}
        {activeTab === 'nhanxet' && (
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-dark mb-4">Ý kiến của khách hàng ({product.reviewCount || product.reviewsCount})</h4>
            
            {/* Reviews List */}
            <div className="space-y-5">
              {[
                {
                  name: 'Nguyễn Thị Hương',
                  avatar: 'H',
                  rating: 5,
                  date: '24 Tháng 06, 2026',
                  comment: 'Rau cải rất tươi sạch, không bị dập nát, xào tỏi ăn ngọt lịm. Giao hàng cực kỳ nhanh, đóng gói cẩn thận. Nhất định sẽ ủng hộ shop dài dài!'
                },
                {
                  name: 'Trần Minh Quân',
                  avatar: 'Q',
                  rating: 5,
                  date: '22 Tháng 06, 2026',
                  comment: 'Nông sản của FreshFoodStore lúc nào cũng tươi rói. Cải chíp này nhà mình luộc chấm kho quẹt ai cũng khen ngon. Đúng chuẩn VietGAP sạch sẽ an tâm.'
                },
                {
                  name: 'Lê Hoài Nam',
                  avatar: 'N',
                  rating: 4,
                  date: '19 Tháng 06, 2026',
                  comment: 'Chất lượng cải ngon ngọt, lá xanh mướt. Giao trễ 15 phút nhưng chất lượng rau bù lại hoàn toàn hài lòng.'
                }
              ].map((rev, idx) => (
                <div key={idx} className="border border-border-light rounded-xl p-5 flex gap-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                  {/* Avatar Circle */}
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-extrabold text-sm shrink-0">
                    {rev.avatar}
                  </div>
                  {/* Review Info */}
                  <div className="flex-grow space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="font-bold text-dark text-sm">{rev.name}</h5>
                      <span className="text-[10px] text-gray-400">{rev.date}</span>
                    </div>
                    {/* Stars */}
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <svg
                          key={sIdx}
                          className={`w-3.5 h-3.5 ${sIdx < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-text leading-relaxed">{rev.comment}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Video Modal Trigger */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoTitle={`Quy trình đóng gói cải tươi sạch - ${product.name}`}
      />
    </div>
  );
}
