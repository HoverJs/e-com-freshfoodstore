# FreshFoodStore - Cửa Hàng Thực Phẩm Sạch & Hữu Cơ

FreshFoodStore là trang chủ thương mại điện tử thực phẩm sạch, rau củ hữu cơ, trái cây tươi ngon và nông sản chất lượng cao. Dự án được phát triển theo phong cách hiện đại, sạch sẽ, cao cấp, chú trọng tối ưu trải nghiệm người dùng và responsive hoàn hảo cho mọi thiết bị.

## Công nghệ sử dụng
- **Core**: Next.js App Router (15+)
- **UI & Logic**: React + TypeScript
- **Styling**: Tailwind CSS v4 (Sử dụng CSS-first custom theme cho FreshFoodStore)
- **Icons**: lucide-react
- **Responsive**: Hỗ trợ đầy đủ Mobile, Tablet, Desktop (container max-width 1200px)

## Cấu trúc thư mục
```text
src/
├── app/
│   ├── layout.tsx         # Layout chính, cấu hình Metadata và CSS
│   └── page.tsx           # Trang chủ ghép nối tất cả các component
├── components/
│   ├── TopBar.tsx         # Thanh thông tin trên cùng (địa chỉ, ngôn ngữ, tiền tệ)
│   ├── Header.tsx         # Header chính (Logo FreshFoodStore, Tìm kiếm, Hotline)
│   ├── Navbar.tsx         # Thanh điều hướng màu đen (Menu, Giỏ hàng, Wishlist, User)
│   ├── Hero.tsx           # Banner chính và Sidebar danh mục trái
│   ├── ServiceFeatures.tsx# Lợi ích dịch vụ (Giao hàng, Hỗ trợ 24/7, v.v.)
│   ├── PromoBanners.tsx   # 3 banner khuyến mãi nằm ngang
│   ├── CategoryGrid.tsx   # Danh mục sản phẩm dạng lưới 2 hàng
│   ├── ProductCard.tsx    # Card sản phẩm đơn lẻ (bán chạy, đánh giá, v.v.)
│   ├── ProductSection.tsx # Phần "Sản phẩm nổi bật" với các bộ lọc
│   ├── MiniProductLists.tsx# 3 cột danh sách mini (Bán chạy, Đánh giá, Khuyến mãi)
│   ├── VideoBanner.tsx    # Banner video với nút play trên nền rau củ
│   ├── Testimonials.tsx   # Đánh giá từ khách hàng
│   ├── Newsletter.tsx     # Đăng ký nhận tin tức nền đen
│   └── Footer.tsx         # Footer nhiều cột chi tiết
├── data/
│   ├── categories.ts      # Danh sách danh mục mock
│   ├── products.ts        # Danh sách sản phẩm mock
│   └── testimonials.ts    # Danh sách nhận xét mock
```

## Hướng dẫn chạy dự án cục bộ

### 1. Cài đặt các thư viện
```bash
npm install
```

### 2. Chạy môi trường phát triển (development)
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn để trải nghiệm giao diện.

### 3. Build sản xuất (production build)
```bash
npm run build
```
Lệnh này sẽ biên dịch mã nguồn và đóng gói sản phẩm phục vụ deploy.
