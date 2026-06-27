export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Nguyễn Văn Nam',
    role: 'Khách hàng thân thiết',
    rating: 5,
    comment: 'Tôi rất hài lòng với chất lượng thực phẩm tại FreshFoodStore. Rau củ luôn tươi xanh, thịt cá sạch sẽ và đặc biệt là giao hàng cực kỳ nhanh chóng. Sẽ tiếp tục ủng hộ lâu dài!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 't2',
    name: 'Trần Thị Thuỷ',
    role: 'Nội trợ gia đình',
    rating: 5,
    comment: 'FreshFoodStore giúp tôi tiết kiệm được rất nhiều thời gian đi chợ. Thực phẩm đóng gói sạch sẽ, có nguồn gốc rõ ràng nên tôi cực kỳ yên tâm khi nấu ăn cho gia đình nhỏ của mình.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60',
  },
  {
    id: 't3',
    name: 'Phạm Minh Đức',
    role: 'Đầu bếp chuyên nghiệp',
    rating: 5,
    comment: 'Là một đầu bếp, tôi cực kỳ khắt khe về nguyên liệu đầu vào. Nhưng FreshFoodStore chưa bao giờ làm tôi thất vọng. Các loại gia vị và rau củ hữu cơ ở đây luôn có hương vị nguyên bản và tươi ngon nhất.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60',
  }
];
