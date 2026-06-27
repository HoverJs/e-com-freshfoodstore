export type OrderStatus = 'Đang xử lý' | 'Đang giao' | 'Hoàn tất';

export interface OrderSummary {
  id: string;
  date: string;
  total: number;
  count: number;
  status: OrderStatus;
}

export interface OrderDetailItem {
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface OrderDetail {
  id: string;
  date: string;
  productCount: number;
  status: OrderStatus;
  paymentMethod: string;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  billingAddress: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  shippingAddress: {
    name: string;
    address: string;
    email: string;
    phone: string;
  };
  items: OrderDetailItem[];
}

const sharedAddress = {
  name: 'Nguyễn Văn A',
  address: '123 Hà Huy Tập, ĐaKao, Quận 1, TP.Hồ Chí Minh',
  email: 'nguyenvana@gmail.com',
  phone: '+84 123456789',
};

export const orderHistory: OrderSummary[] = [
  { id: '3933', date: '04/04/2021', total: 135000, count: 5, status: 'Đang xử lý' },
  { id: '5045', date: '27/03/2021', total: 25000, count: 1, status: 'Đang giao' },
  { id: '5028', date: '20/03/2021', total: 250000, count: 4, status: 'Hoàn tất' },
  { id: '4600', date: '19/03/2021', total: 35000, count: 1, status: 'Hoàn tất' },
  { id: '4152', date: '24/04/2021', total: 578000, count: 3, status: 'Đang xử lý' },
  { id: '8811', date: '10/03/2021', total: 345000, count: 7, status: 'Hoàn tất' },
  { id: '3536', date: '05/03/2021', total: 560000, count: 2, status: 'Hoàn tất' },
  { id: '1374', date: '27/02/2021', total: 560000, count: 2, status: 'Hoàn tất' },
  { id: '7791', date: '25/02/2021', total: 560000, count: 2, status: 'Hoàn tất' },
  { id: '4846', date: '24/02/2021', total: 23000, count: 1, status: 'Hoàn tất' },
  { id: '5948', date: '20/02/2021', total: 23000, count: 1, status: 'Hoàn tất' },
  { id: '1577', date: '12/10/2020', total: 23000, count: 1, status: 'Hoàn tất' },
];

export const recentOrders: OrderSummary[] = [
  { id: '738', date: '08/09/2020', total: 135000, count: 5, status: 'Đang xử lý' },
  { id: '703', date: '24/05/2020', total: 25000, count: 1, status: 'Đang giao' },
  { id: '130', date: '22/10/2020', total: 250000, count: 4, status: 'Hoàn tất' },
  { id: '561', date: '01/02/2020', total: 35000, count: 1, status: 'Hoàn tất' },
  { id: '536', date: '21/09/2020', total: 578000, count: 13, status: 'Hoàn tất' },
  { id: '492', date: '22/10/2020', total: 345000, count: 7, status: 'Hoàn tất' },
];

const detailOverrides: Record<string, Omit<OrderDetail, 'billingAddress' | 'shippingAddress'>> = {
  '4152': {
    id: '4152',
    date: '24 tháng 4, 2021',
    productCount: 3,
    status: 'Đang xử lý',
    paymentMethod: 'PayPal',
    subtotal: 668000,
    discount: 90000,
    shipping: 0,
    total: 578000,
    items: [
      {
        name: 'Cá Hồi Filet Tươi',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa6KgWCA6pONmUyc9-Uk4e0yFwHQ4OnRxX-RIaYIHKvewU051LdhrKk2Y&s=10',
        price: 299000,
        quantity: 1,
      },
      {
        name: 'Thịt Bò Mỹ Ba Chỉ',
        image: 'https://www.lottemart.vn/media/catalog/product/0/4/0400086820002.jpg',
        price: 189000,
        quantity: 1,
      },
      {
        name: 'Táo Xanh Ninh Thuận',
        image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=80',
        price: 60000,
        quantity: 3,
      },
    ],
  },
};

export function formatCurrency(amount: number) {
  return `${amount.toLocaleString('vi-VN')}đ`;
}

export function formatOrderCount(count: number) {
  return `${count} sản phẩm`;
}

export function getOrderStep(status: OrderStatus) {
  if (status === 'Đang xử lý') {
    return 2;
  }

  if (status === 'Đang giao') {
    return 3;
  }

  return 4;
}

export function getOrderDetailById(orderId: string): OrderDetail | null {
  const matchingSummary = [...orderHistory, ...recentOrders].find((order) => order.id === orderId);

  if (!matchingSummary) {
    return null;
  }

  const override = detailOverrides[orderId];

  if (override) {
    return {
      ...override,
      billingAddress: sharedAddress,
      shippingAddress: sharedAddress,
    };
  }

  const defaultItems: OrderDetailItem[] =
    matchingSummary.count > 1
      ? [
          {
            name: 'Cải Thìa',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_kueY-4DLjCwUoMbLWl0HtCw5GSC31IjdYoUBgCrjvKfkuWWVSYgTTdt6&s=10',
            price: Math.max(Math.round(matchingSummary.total * 0.6), 15000),
            quantity: 1,
          },
          {
            name: 'Táo Xanh Ninh Thuận',
            image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=500&auto=format&fit=crop&q=80',
            price: Math.max(matchingSummary.total - Math.max(Math.round(matchingSummary.total * 0.6), 15000), 8000),
            quantity: 1,
          },
        ]
      : [
          {
            name: 'Rau củ theo mùa',
            image:
              'https://product.hstatic.net/200000423303/product/bong-cai-xanh-huu-co_9dbd73ab4b3a4e62bf00ddeeb645b9a7_1024x1024.jpg',
            price: matchingSummary.total,
            quantity: 1,
          },
        ];

  const subtotal = defaultItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    id: matchingSummary.id,
    date: matchingSummary.date,
    productCount: matchingSummary.count,
    status: matchingSummary.status,
    paymentMethod: matchingSummary.status === 'Đang giao' ? 'QR ngân hàng' : 'Thanh toán khi nhận hàng',
    subtotal,
    discount: Math.max(subtotal - matchingSummary.total, 0),
    shipping: 0,
    total: matchingSummary.total,
    billingAddress: sharedAddress,
    shippingAddress: sharedAddress,
    items: defaultItems,
  };
}
