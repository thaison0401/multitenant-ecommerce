<h1 align="center">🛒 Next.js Multi-Vendor E-commerce Architecture</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_14-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_Server_Components-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="RSC" />
  <img src="https://img.shields.io/badge/Payload_CMS-000000?style=for-the-badge&logo=payload&logoColor=white" alt="Payload CMS" />
  <img src="https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white" alt="tRPC" />
  <img src="https://img.shields.io/badge/Stripe_Connect-008CDD?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</p>

<p align="center">
  <strong>A production-ready, multi-tenant marketplace built with modern web technologies.</strong>
</p>

## 🌟 Tầm nhìn dự án (System Overview)

Đây không phải là một website bán hàng đơn thuần. Dự án này là một **Hệ sinh thái Multi-Vendor Marketplace** hoàn chỉnh, nơi nhiều nhà bán hàng (Vendors) có thể hoạt động độc lập trên cùng một nền tảng. 

Hệ thống được thiết kế để giải quyết các bài toán kiến trúc phức tạp trong môi trường thực tế, bao gồm: **Multi-tenancy** (tách biệt dữ liệu vendor một cách an toàn), **Automated Revenue Splitting** (phân chia doanh thu tự động qua Stripe) và kiến trúc **Headless CMS**.

🚀 **Live Demo:** [https://multitenant-ecommerce-pearl.vercel.app/](https://multitenant-ecommerce-pearl.vercel.app/)

---

## 🏗️ Kiến trúc & Công nghệ (Modern Tech Stack)

Dự án áp dụng chặt chẽ các xu hướng công nghệ của năm 2024 - 2025, tận dụng tối đa Server-Side Rendering (SSR), Server Actions và đảm bảo tính an toàn kiểu dữ liệu (Type-safety) từ đầu đến cuối.

### 🎨 Frontend
- **Framework:** Next.js 14 (App Router) kết hợp React Server Components.
- **UI/UX:** TailwindCSS & Shadcn UI cho giao diện đồng nhất, dễ mở rộng.

### ⚙️ Backend & Database
- **Headless CMS:** Payload CMS - Cung cấp khả năng quản lý nội dung mạnh mẽ và tự động sinh API.
- **API Layer:** tRPC - Giao tiếp Client-Server hoàn toàn Type-Safe, loại bỏ rủi ro sai lệch dữ liệu.
- **Database:** MongoDB - Linh hoạt trong việc lưu trữ dữ liệu phức tạp của mô hình sàn thương mại.

### 💳 Payment & Deployment
- **Payment Gateway:** Stripe Connect - Xử lý luồng thanh toán phức tạp (Split Payment).
- **Deployment:** Vercel - CI/CD tự động, tối ưu hóa tối đa cho hệ sinh thái Next.js.

---

## 🔥 Tính năng cốt lõi theo phân quyền (Features by Actor)

Hệ thống phân quyền chặt chẽ với 4 nhóm Actor chính (Guest, Customer, Vendor, Admin), đảm bảo luồng nghiệp vụ (Activity) và Use Case chuẩn xác:

### 🛍️ 1. Customer (Khách hàng)
- Tìm kiếm & Lọc sản phẩm nâng cao (Search + Filter).
- Trải nghiệm giỏ hàng mượt mà (Cart Management).
- Thanh toán an toàn qua cổng Stripe.
- Theo dõi lịch sử đơn hàng đã mua (Order History).

### 🏪 2. Vendor (Nhà bán hàng)
- **Vendor Dashboard:** Bảng điều khiển quản trị riêng biệt, độc lập dữ liệu.
- Quản lý danh mục và sản phẩm của riêng shop mình.
- Theo dõi và xử lý đơn hàng chi tiết.
- Kết nối tài khoản **Stripe Connect** để nhận phần chia doanh thu tự động.

### 👑 3. Admin (Quản trị viên nền tảng)
- Quản lý tập trung toàn bộ hệ thống Users.
- Quản lý và kiểm duyệt các Vendors.
- Quản lý toàn bộ danh sách Sản phẩm trên sàn.

---

## 📊 Nền tảng thiết kế (System Design)

Dự án được xây dựng dựa trên các bản thiết kế hệ thống tiêu chuẩn:
- **ERD (Entity-Relationship Diagram):** Kiến trúc CSDL đáp ứng tốt bài toán Multi-vendor.
- **Use Case & Activity Diagrams:** Chuẩn hóa luồng đi của người dùng từ khi vào trang đến khi thanh toán thành công và tiền được chia về ví Vendor.
