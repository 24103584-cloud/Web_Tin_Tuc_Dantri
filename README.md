# ĐỒ ÁN XÂY DỰNG ỨNG DỤNG WEB TIN TỨC DÂN TRÍ

## 1. Giới thiệu dự án
Website tin tức được xây dựng bằng HTML5, CSS3 và JavaScript thuần (Vanilla JS), mô phỏng giao diện và tính năng của Báo điện tử Dân trí (dantri.com.vn).

## 2. Cấu trúc thư mục
- `index.html`: Trang chủ & hiển thị danh sách bài viết theo chuyên mục.
- `crawler.html`: Trang giao diện công cụ crawler tin tức.
- `style.css`: File định dạng giao diện (Responsive CSS Grid & Flexbox).
- `main.js`: File xử lý chính (Nav, render layout, xem chi tiết, LocalStorage).
- `crawler.js`: File chứa hàm cào dữ liệu từ URL Dân trí.
- `categories.json`: Cấu trúc cây phân cấp chuyên mục.
- `bài đăng.json`: Dữ liệu bài viết mẫu ban đầu.

## 3. Tính năng chính
- Navigation bar động load từ cây chuyên mục JSON.
- Layout Responsive:
  - Top Section: 1 bài nổi bật bên trái + 2 bài bên phải.
  - Các bài còn lại hiển thị danh sách dọc (sắp xếp thời gian giảm dần).
- Trang chi tiết bài viết đầy đủ thông tin.
- Hệ thống Crawler cào bài viết từ Dân trí và lưu tự động vào LocalStorage.

## 4. Hướng dẫn chạy dự án
1. Mở file `index.html` bằng trình duyệt web hoặc chạy qua VS Code Extension **Live Server**.
2. Để cào bài viết mới: Truy cập trang Crawler -> Dán URL bài viết Dân trí -> Bấm "Crawl Dữ Liệu".
