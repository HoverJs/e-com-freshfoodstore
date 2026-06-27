export type AboutFeatureIcon =
  | 'leaf'
  | 'headphones'
  | 'message'
  | 'shield'
  | 'truck'
  | 'package';

export type SocialPlatform = 'facebook' | 'twitter' | 'pinterest' | 'instagram';

export interface AboutFeature {
  id: string;
  title: string;
  description: string;
  icon: AboutFeatureIcon;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socialLinks: SocialPlatform[];
}

export interface AboutTestimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface PartnerLogo {
  id: string;
  label: string;
}

export const aboutFeatures: AboutFeature[] = [
  {
    id: 'feature-1',
    title: '100% Thực phẩm tươi',
    description: 'Nguồn hàng sạch, tuyển chọn mỗi ngày từ nông trại uy tín.',
    icon: 'leaf',
  },
  {
    id: 'feature-2',
    title: 'Hỗ trợ 24/7',
    description: 'Tư vấn nhanh khi bạn cần đặt hàng hoặc theo dõi đơn.',
    icon: 'headphones',
  },
  {
    id: 'feature-3',
    title: 'Nhận xét khách hàng',
    description: 'Phản hồi minh bạch để bạn mua sắm yên tâm hơn.',
    icon: 'message',
  },
  {
    id: 'feature-4',
    title: 'Thanh toán an toàn',
    description: 'Bảo mật giao dịch với nhiều lựa chọn thanh toán tiện lợi.',
    icon: 'shield',
  },
  {
    id: 'feature-5',
    title: 'Miễn phí ship',
    description: 'Áp dụng cho nhiều đơn hàng nội thành và ưu đãi định kỳ.',
    icon: 'truck',
  },
  {
    id: 'feature-6',
    title: '100% Tươi sạch',
    description: 'Quy trình đóng gói kỹ lưỡng để giữ trọn độ tươi ngon.',
    icon: 'package',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Jenny Wilson',
    role: 'CEO & Founder',
    image: '/images/about/Image (4).png',
    socialLinks: ['facebook', 'twitter', 'pinterest', 'instagram'],
  },
  {
    id: 'team-2',
    name: 'Jane Cooper',
    role: 'Worker',
    image: '/images/about/Image (5).png',
    socialLinks: ['facebook', 'twitter', 'pinterest', 'instagram'],
  },
  {
    id: 'team-3',
    name: 'Cody Fisher',
    role: 'Security Guard',
    image: '/images/about/Image (6).png',
    socialLinks: ['facebook', 'twitter', 'pinterest', 'instagram'],
  },
  {
    id: 'team-4',
    name: 'Robert Fox',
    role: 'Senior Farmer Manager',
    image: '/images/about/Image (7).png',
    socialLinks: ['facebook', 'twitter', 'pinterest', 'instagram'],
  },
];

export const aboutTestimonials: AboutTestimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Robert Fox',
    role: 'Customer',
    comment:
      'FreshFoodStore giúp gia đình tôi luôn có rau củ tươi mỗi ngày, giao hàng đúng giờ và đóng gói rất cẩn thận.',
    avatar: '/images/about/Image (8).png',
    rating: 5,
  },
  {
    id: 'testimonial-2',
    name: 'Dianne Russell',
    role: 'Customer',
    comment:
      'Mình thích nhất là phần nguồn gốc sản phẩm rõ ràng. Đặt hàng nhanh, chăm sóc khách hàng cũng rất nhiệt tình.',
    avatar: '/images/about/Image (9).png',
    rating: 5,
  },
  {
    id: 'testimonial-3',
    name: 'Eleanor Pena',
    role: 'Customer',
    comment:
      'Đây là nơi mình tin tưởng để mua thực phẩm sạch cho cả nhà. Hàng tươi, giá hợp lý và trải nghiệm rất mượt.',
    avatar: '/images/about/Image (10).png',
    rating: 5,
  },
];

export const partnerLogos: PartnerLogo[] = [
  { id: 'logo-1', label: 'steps' },
  { id: 'logo-2', label: 'mango' },
  { id: 'logo-3', label: 'food' },
  { id: 'logo-4', label: 'FOOD' },
  { id: 'logo-5', label: 'book-off' },
  { id: 'logo-6', label: 'G Series' },
];
