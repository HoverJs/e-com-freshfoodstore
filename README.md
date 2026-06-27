# 🍏 FreshFoodStore - Cửa Hàng Thực Phẩm Sạch & Hữu Cơ | Clean & Organic Food E-Commerce Platform

## 📖 Giới thiệu | Introduction

### Tiếng Việt
**FreshFoodStore** là một nền tảng thương mại điện tử (E-commerce) hiện đại, chuyên phân phối các mặt hàng thực phẩm sạch, rau củ đạt chuẩn hữu cơ (organic), trái cây tươi nhập khẩu và nội địa cùng các nông sản chất lượng cao. Dự án được phát triển theo phong cách hiện đại, sạch sẽ, cao cấp, chú trọng tối ưu trải nghiệm người dùng và responsive hoàn hảo cho mọi thiết bị.

### English
**FreshFoodStore** is a modern e-commerce platform specializing in the distribution of clean food products, certified organic vegetables, fresh imported and locally sourced fruits, and high-quality agricultural products. The project was created with the goal of providing a fast, safe, and convenient online grocery shopping experience for health-conscious consumers.

---

## ✨ Điểm nổi bật & Tính năng | Key Features

* **Giao diện hiện đại & Premium (Modern & Premium UI):** Thiết kế mang phong cách tươi mát, sạch sẽ, làm nổi bật chất lượng sản phẩm.
* **Trải nghiệm mua sắm mượt mà (Seamless Shopping Experience):** Tối ưu hóa hành trình mua hàng từ tìm kiếm, xem chi tiết sản phẩm cho đến giỏ hàng.
* **Tương thích hoàn hảo (Fully Responsive):** Hiển thị tối ưu và đẹp mắt trên mọi thiết bị (Mobile, Tablet, Desktop).
* **Hiệu năng cao (High Performance):** Tốc độ tải trang nhanh chóng nhờ việc tối ưu hóa code và cấu trúc.

---

## 🛠️ Công nghệ sử dụng | Technology Stack
- **Core**: Next.js App Router (15+)
- **UI & Logic**: React + TypeScript
- **Styling**: Tailwind CSS v4 (Sử dụng CSS-first custom theme cho FreshFoodStore)
- **Icons**: lucide-react
- **Responsive**: Hỗ trợ đầy đủ Mobile, Tablet, Desktop (container max-width 1200px)

---

## 📁 Cấu trúc thư mục | Directory Structure
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

---

## 🚀 Hướng dẫn chạy dự án cục bộ | Local Development

### 1. Cài đặt các thư viện | Install Dependencies
```bash
npm install
```

### 2. Chạy môi trường phát triển | Run Development Server
```bash
npm run dev
```
Mở [http://localhost:3000](http://localhost:3000) trên trình duyệt của bạn để trải nghiệm giao diện.

### 3. Build sản xuất | Production Build
```bash
npm run build
```
Lệnh này sẽ biên dịch mã nguồn và đóng gói sản phẩm phục vụ deploy.
