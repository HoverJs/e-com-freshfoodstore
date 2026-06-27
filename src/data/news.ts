export interface NewsDeal {
  id: string;
  title: string;
  description: string;
  badge: string;
  discount: string;
  period: string;
  category: string;
  cta: string;
  accentClass: string;
  image: string;
}

export interface VoucherInfo {
  id: string;
  code: string;
  title: string;
  description: string;
  condition: string;
}

export interface PromoTimelineItem {
  id: string;
  title: string;
  date: string;
  detail: string;
}

export const featuredDeals: NewsDeal[] = [
  {
    id: 'deal-1',
    title: 'Deal sáng tươi xanh cho rau củ hữu cơ',
    description:
      'Giảm sâu cho nhóm rau củ Đà Lạt và combo salad dùng trong ngày, phù hợp cho đơn hàng gia đình.',
    badge: 'Flash Deal',
    discount: 'Giảm đến 35%',
    period: '06:00 - 11:00 mỗi ngày',
    category: 'Rau củ tươi',
    cta: 'Mua combo xanh',
    accentClass: 'from-[#f0fff0] via-[#ecfaec] to-[#dff5e0]',
    image: '/images/about/Image (2).png',
  },
  {
    id: 'deal-2',
    title: 'Trái cây nhập khẩu ưu đãi cuối tuần',
    description:
      'Táo, nho, kiwi và xoài cao cấp được chọn lọc theo mùa, phù hợp để biếu tặng hoặc trữ lạnh dùng dần.',
    badge: 'Weekend Pick',
    discount: 'Mua 2 giảm 20%',
    period: 'Thứ 6 - Chủ nhật',
    category: 'Trái cây',
    cta: 'Xem giỏ trái cây',
    accentClass: 'from-[#fff8ec] via-[#fff2d8] to-[#ffe7bf]',
    image: '/images/about/Image (1).png',
  },
  {
    id: 'deal-3',
    title: 'Khuyến mãi thực phẩm nấu nhanh trong 15 phút',
    description:
      'Áp dụng cho thực phẩm sơ chế, đông lạnh và nước dùng tiện lợi để bữa tối gọn hơn nhưng vẫn đủ dinh dưỡng.',
    badge: 'Hot Combo',
    discount: 'Tiết kiệm 120.000đ',
    period: 'Áp dụng đến 31/07',
    category: 'Bữa tối tiện lợi',
    cta: 'Khám phá combo',
    accentClass: 'from-[#eef7ff] via-[#e3f1ff] to-[#d5e9ff]',
    image: '/images/about/Image (3).png',
  },
];

export const vouchers: VoucherInfo[] = [
  {
    id: 'voucher-1',
    code: 'FRESH10',
    title: 'Giảm 10% cho đơn đầu tiên',
    description: 'Dành cho khách hàng mới khi mua sắm tại FreshFoodStore.',
    condition: 'Áp dụng cho đơn từ 299.000đ',
  },
  {
    id: 'voucher-2',
    code: 'SHIPFREE',
    title: 'Miễn phí vận chuyển nội thành',
    description: 'Dùng cho các khung giờ giao tiêu chuẩn tại TP.HCM.',
    condition: 'Áp dụng cho đơn từ 199.000đ',
  },
  {
    id: 'voucher-3',
    code: 'GREENBOX',
    title: 'Giảm 50.000đ cho combo rau củ',
    description: 'Ưu đãi riêng cho các combo meal prep và giỏ xanh hàng tuần.',
    condition: 'Áp dụng cho đơn combo từ 449.000đ',
  },
  {
    id: 'voucher-4',
    code: 'FAMILY80',
    title: 'Ưu đãi cuối tuần cho gia đình',
    description: 'Tiết kiệm thêm khi mua nhóm sản phẩm bếp núc và thực phẩm tươi.',
    condition: 'Áp dụng cho đơn từ 799.000đ',
  },
];

export const promoTimeline: PromoTimelineItem[] = [
  {
    id: 'timeline-1',
    title: 'Tuần lễ trái cây mát lạnh',
    date: '01/07 - 07/07',
    detail: 'Tập trung vào hộp trái cây cắt sẵn, nước ép lạnh và combo detox mùa hè.',
  },
  {
    id: 'timeline-2',
    title: 'Ngày hội voucher thành viên',
    date: '08/07 - 14/07',
    detail: 'Khách mua lặp lại sẽ nhận thêm mã giảm riêng cho đơn rau, thịt và hàng đông lạnh.',
  },
  {
    id: 'timeline-3',
    title: 'Combo bếp nhanh cho dân văn phòng',
    date: '15/07 - 21/07',
    detail: 'Đẩy mạnh các set nguyên liệu 15 phút với giá trọn gói dễ chọn, dễ nấu.',
  },
];
