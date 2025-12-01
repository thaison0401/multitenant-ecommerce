import Link from "next/link";
import {
  ShoppingBag,
  Zap,
  Users,
  ArrowRight,
  ShieldCheck,
  Star,
  RefreshCcw,
} from "lucide-react";

export default function FeaturesPage() {
  return (
    // Sử dụng w-full để nền trong suốt, ăn theo màu nền #F4F4F0 của Layout tổng
    <div className="w-full py-24 font-sans antialiased text-gray-900">
      {/* 1. HERO SECTION */}
      <div className="px-6 lg:px-8 text-center mb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-6 leading-[1.15]">
            Trải Nghiệm Mua Sắm <br />
            <span className="text-black">Tuyệt Vời Nhất</span>
          </h1>
          <p className="text-lg leading-8 text-gray-600 font-medium">
            Chúng tôi tối ưu hóa mọi điểm chạm để đảm bảo hành trình mua sắm các
            sản phẩm số của bạn diễn ra nhanh chóng, an toàn và liền mạch.
          </p>
        </div>
      </div>

      {/* 2. FEATURE GRID: Lưới 3 cột x 2 hàng = 6 thẻ */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* --- HÀNG 1 --- */}

          {/* Feature 1 */}
          <FeatureCard
            icon={<ShoppingBag className="h-8 w-8 text-pink-600" />}
            iconBg="bg-pink-50"
            title="Giỏ Hàng Thông Minh"
            desc="Lưu trữ sản phẩm từ nhiều cửa hàng khác nhau trong cùng một phiên mua sắm. Thanh toán một lần duy nhất cho tất cả."
          />

          {/* Feature 2 */}
          <FeatureCard
            icon={<Zap className="h-8 w-8 text-yellow-600" />}
            iconBg="bg-yellow-50"
            title="Nhận Hàng Tức Thì"
            desc="Không cần chờ vận chuyển. Ngay sau khi thanh toán thành công, bạn có thể tải xuống file Ebook/Software lập tức."
          />

          {/* Feature 3 */}
          <FeatureCard
            icon={<Users className="h-8 w-8 text-purple-600" />}
            iconBg="bg-purple-50"
            title="Hỗ Trợ Trực Tiếp"
            desc="Kết nối trực tiếp với người bán thông qua hệ thống của sàn để được giải đáp thắc mắc về sản phẩm nhanh chóng."
          />

          {/* --- HÀNG 2 (Mới thêm) --- */}

          {/* Feature 4: Bảo mật */}
          <FeatureCard
            icon={<ShieldCheck className="h-8 w-8 text-green-600" />}
            iconBg="bg-green-50"
            title="Thanh Toán An Toàn"
            desc="Mọi giao dịch được mã hóa và bảo vệ bởi Stripe. Cam kết hoàn tiền 100% nếu sản phẩm bị lỗi hoặc không đúng mô tả."
          />

          {/* Feature 5: Đánh giá */}
          <FeatureCard
            icon={<Star className="h-8 w-8 text-orange-500" />}
            iconBg="bg-orange-50"
            title="Đánh Giá Minh Bạch"
            desc="Hệ thống review thực tế từ những người đã mua hàng (Verified Purchase). Giúp bạn có cái nhìn khách quan trước khi quyết định."
          />

          {/* Feature 6: Cập nhật */}
          <FeatureCard
            icon={<RefreshCcw className="h-8 w-8 text-blue-600" />}
            iconBg="bg-blue-50"
            title="Cập Nhật Trọn Đời"
            desc="Mua một lần, sở hữu mãi mãi. Bạn sẽ nhận được thông báo và tải về miễn phí các bản cập nhật tính năng mới nhất từ tác giả."
          />
        </div>
      </div>

      {/* 3. CTA SECTION */}
      <div className="text-center px-6">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-black px-10 py-4 text-lg font-bold text-white shadow-lg hover:bg-pink-400 hover:text-black hover:scale-105 transition-all duration-300"
        >
          Trải nghiệm ngay{" "}
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        <p className="mt-6 text-sm font-medium text-gray-500">
          Khám phá hàng ngàn sản phẩm số chất lượng cao ngay hôm nay.
        </p>
      </div>
    </div>
  );
}

// Component thẻ tính năng chuẩn hóa (giúp các thẻ đều nhau tăm tắp)
function FeatureCard({
  icon,
  iconBg,
  title,
  desc,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="h-full bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all flex flex-col items-start text-left group">
      <div
        className={`p-4 ${iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed flex-grow font-medium">
        {desc}
      </p>
    </div>
  );
}
