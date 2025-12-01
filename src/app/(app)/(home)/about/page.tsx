import Link from "next/link";
import {
  Code2,
  Database,
  CreditCard,
  Rocket,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  Github,
  MessageCircle,
  Mail,
  AppWindow,
} from "lucide-react";

export default function AboutPage() {
  return (
    // Thêm 'font-sans' để áp dụng font chữ hiện đại (Inter/System UI)
    <div className="w-full font-sans antialiased text-gray-900">
      {/* 1. HERO SECTION - ĐÃ ĐƯỢC CẬP NHẬT */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 text-center">
        {/* Bọc tiêu đề trong một khung bo tròn, màu trắng, có viền và bóng */}
        <div className="mx-auto max-w-3xl bg-white rounded-[2.5rem] p-10 md:p-12 border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
          {/* Hiệu ứng ánh sáng nền nhẹ (tùy chọn, giúp khung nổi bật hơn) */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/30 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-4 py-1.5 text-sm font-semibold text-gray-600 shadow-sm cursor-default">
              <GraduationCap className="mr-2 h-4 w-4 text-black-600" />
              Thực Tập Tốt Nghiệp
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.15]">
              Kiến Trúc Đa Cửa Hàng <br />
              <span className="text-gray-500">Thế Hệ Mới</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 font-medium mx-auto max-w-2xl">
              Funroad không chỉ là một sàn thương mại điện tử. Với các tính năng
              từ quản lý kho hàng số, tối ưu hóa quy trình thanh toán đến phân
              tích doanh thu minh bạch. Funroad chính là bệ phóng vững chắc cho
              hành trình kinh doanh trực tuyến của bạn. Đây là giải pháp công
              nghệ toàn diện giúp tạo lập, quản lý và vận hành hàng ngàn cửa
              hàng số trên cùng một hệ thống.
            </p>
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
        {/* Phần Sứ mệnh & Tính năng cốt lõi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Box lớn bên trái */}
          <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
              Vấn đề & Giải pháp
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Xây dựng một website bán hàng thì dễ, nhưng xây dựng một{" "}
              <strong>nền tảng</strong> để người khác tạo website bán hàng (như
              Shopify/Shopee) là một bài toán khó về kiến trúc dữ liệu.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Dự án này giải quyết vấn đề phân tách dữ liệu (Data Isolation)
              bằng kiến trúc{" "}
              <strong className="text-black-600">Multi-tenancy</strong>, kết hợp
              với <strong className="text-black-600">Stripe Connect</strong> để
              tự động hóa dòng tiền phức tạp giữa Người mua - Sàn - Người bán.
            </p>
            <div className="mt-8 flex gap-4">
              {/* Nút bấm */}
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold shadow-sm transition-all hover:scale-105 bg-black text-white hover:bg-pink-400 hover:text-black"
              >
                Trải nghiệm ngay <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-black text-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-gray-300">Hiệu suất</h3>
              <div className="mt-2 text-5xl font-extrabold tracking-tight">
                100%
              </div>
              <p className="mt-2 text-sm text-gray-400 font-medium">
                Server Side Rendering
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <h3 className="text-lg font-medium text-gray-300">Công nghệ</h3>
              <div className="mt-2 text-3xl font-bold tracking-tight">
                Next.js 15
              </div>
              <p className="mt-2 text-sm text-gray-400 font-medium">
                App Router & Server Actions
              </p>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-800 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
          </div>
        </div>

        {/* 3. TECH STACK */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6 px-2 tracking-tight">
            Công Nghệ Cốt Lõi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TechCard
              icon={<AppWindow className="h-6 w-6 text-fuchsia-600" />}
              title="Payload CMS 3.0"
              desc="Headless CMS mã nguồn mở, tự động sinh API và cung cấp giao diện Admin trực quan."
            />
            <TechCard
              icon={<Database className="h-6 w-6 text-emerald-600" />}
              title="MongoDB Database"
              desc="Cơ sở dữ liệu NoSQL linh hoạt, lưu trữ hàng triệu bản ghi sản phẩm với hiệu suất cao."
            />
            <TechCard
              icon={<CreditCard className="h-6 w-6 text-indigo-600" />}
              title="Stripe Connect"
              desc="Xử lý thanh toán, chia sẻ doanh thu và quản lý tài khoản người bán."
            />
            <TechCard
              icon={<Code2 className="h-6 w-6 text-blue-600" />}
              title="TypeScript & tRPC"
              desc="Đảm bảo an toàn kiểu dữ liệu từ Backend tới Frontend (Type-safe)."
            />
            <TechCard
              icon={<ShieldCheck className="h-6 w-6 text-orange-600" />}
              title="Auth & Security"
              desc="Middleware bảo vệ route, xử lý Cookie đa miền và phân quyền người dùng."
            />
            <TechCard
              icon={<Rocket className="h-6 w-6 text-black" />}
              title="Vercel Deploy"
              desc="Triển khai CI/CD tự động, tối ưu hóa tốc độ tải trang (Edge Network)."
            />
          </div>
        </div>

        {/* 4. AUTHOR PROFILE & CONTACT */}
        <div className="bg-white rounded-[2rem] p-8 border border-gray-200 shadow-sm mt-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left hover:shadow-md transition-shadow">
          <div className="h-32 w-32 shrink-0 rounded-full bg-gray-100 flex items-center justify-center text-4xl font-extrabold text-gray-400 border-4 border-white shadow-md">
            S
          </div>
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-[#F4F4F0] text-xs font-bold text-gray-600 mb-3 border border-gray-200 uppercase tracking-wide">
              DEVELOPER
            </div>
            <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
              Trần Thái Sơn
            </h3>
            <p className="text-gray-500 mt-1 text-lg font-medium">
              Mã số sinh viên: 2251120048
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
              &quot;Xây dựng hệ thống Sàn thương mại điện tử đa nhà cung cấp
              (Multi-Vendor Marketplace). Dự án sử dụng các công nghệ tiên tiến
              nhất bao gồm Next.js 15, Payload CMS v3 và MongoDB. Điểm nhấn kỹ
              thuật là tích hợp Stripe Connect để xử lý dòng tiền phức
              tạp.&quot;
            </p>

            <div className="flex flex-wrap gap-3 mt-6 justify-center md:justify-start">
              <Link
                href="https://github.com/thaisonlun"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-700 transition-colors shadow-sm"
              >
                <Github className="h-4 w-4" /> Github
              </Link>
              <Link
                href="https://zalo.me/0589882106"
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500 transition-colors shadow-sm"
              >
                <MessageCircle className="h-4 w-4" /> Zalo
              </Link>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=2251120048@edu.ut.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
          <div>
            {/* Nút Liên hệ tôi */}
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold shadow-md transition-all hover:scale-105 bg-black text-white hover:bg-pink-400 hover:text-black"
            >
              Liên hệ tôi{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component phụ
function TechCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="group bg-white p-6 rounded-[1.5rem] border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-200 cursor-default">
      <div className="h-12 w-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-[#F4F4F0] transition-colors border border-gray-100">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 leading-relaxed font-medium">
        {desc}
      </p>
    </div>
  );
}
