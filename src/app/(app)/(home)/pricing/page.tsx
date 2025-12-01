import Link from "next/link";
import { Check, X, HelpCircle, ArrowRight, Sparkles } from "lucide-react";

export default function PricingPage() {
  // Class chung cho nút bấm
  const buttonClass =
    "block w-full rounded-full py-3 text-center text-sm font-bold transition-all duration-300 bg-black text-white hover:bg-pink-400 hover:text-black shadow-md hover:shadow-lg hover:-translate-y-1";

  return (
    // Đã thêm font-sans và antialiased
    <div className="w-full py-24 font-sans antialiased text-gray-900">
      {/* 1. HERO SECTION - CÓ KHUNG BO TRÒN NỔI BẬT */}
      <div className="px-6 lg:px-8 text-center mb-24">
        {/* 👇👇👇 KHUNG BO TRÒN BẠN CẦN 👇👇👇 */}
        <div className="mx-auto max-w-4xl bg-white p-10 md:p-14 rounded-[3rem] border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
          {/* Hiệu ứng nền nhẹ */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/40 via-purple-50/20 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 shadow-sm cursor-default">
              <Sparkles className="mr-2 h-4 w-4 text-yellow-500" />
              Minh Bạch & Hiệu Quả
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl mb-6 leading-[1.15]">
              Chọn Giải Pháp Phù Hợp <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                Để Bắt Đầu Kinh Doanh
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-8 text-gray-600 font-medium max-w-2xl mx-auto">
              Không có phí ẩn. Bạn chỉ trả phí khi bạn bán được hàng.{" "}
              <br className="hidden md:block" />
              Nâng cấp bất cứ lúc nào để mở khóa các tính năng cao cấp.
            </p>
          </div>
        </div>
        {/* 👆👆👆 KẾT THÚC KHUNG BO TRÒN 👆👆👆 */}
      </div>

      {/* 2. PRICING CARDS */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* --- Card 1: Professional (Trái) --- */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Professional</h3>
              <p className="text-sm text-gray-500 mt-1 font-medium">
                Tối ưu lợi nhuận kinh doanh.
              </p>
            </div>
            <div className="my-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$29</span>
              <span className="text-gray-500 ml-2 font-medium">/ tháng</span>
            </div>

            <Link href="/home" className={buttonClass}>
              Dùng thử 14 ngày
            </Link>

            <ul className="mt-8 space-y-4 flex-1">
              <ListItem text="Tạo 3 Cửa hàng" active />
              <ListItem text="Không giới hạn sản phẩm" active />
              <ListItem text="Phí sàn chỉ 3% / đơn hàng" active />
              <ListItem text="Tên miền riêng (Custom Domain)" active />
              <ListItem text="Phân tích doanh thu nâng cao" active />
              <ListItem text="Hỗ trợ ưu tiên 24/7" active />
            </ul>
          </div>

          {/* --- Card 2: Starter (GIỮA - Nổi bật nhất) --- */}
          <div className="relative bg-white p-8 rounded-[2rem] border-2 border-black shadow-2xl flex flex-col h-full transform md:-translate-y-4 z-10">
            {/* Badge nổi bật */}
            <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider shadow-lg">
              Phổ biến nhất
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Starter</h3>
              <p className="text-sm text-gray-500 mt-1 font-medium">
                Dành cho người mới bắt đầu.
              </p>
            </div>
            <div className="my-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$0</span>
              <span className="text-gray-500 ml-2 font-medium">/ tháng</span>
            </div>

            <Link href="/home" className={buttonClass}>
              Bắt đầu miễn phí
            </Link>

            <ul className="mt-8 space-y-4 flex-1">
              <ListItem text="Tạo 1 Cửa hàng (Tenant)" active={true} />
              <ListItem text="Đăng tối đa 10 sản phẩm" active={true} />
              <ListItem text="Phí sàn 10% / đơn hàng" active={true} />
              <ListItem text="Thanh toán Stripe cơ bản" active={true} />
              <ListItem text="Hỗ trợ qua Email" active={true} />
            </ul>
          </div>

          {/* --- Card 3: Enterprise (Phải) --- */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-900">Enterprise</h3>
              <p className="text-sm text-gray-500 mt-1 font-medium">
                Cho doanh nghiệp quy mô lớn.
              </p>
            </div>
            <div className="my-6 flex items-baseline">
              <span className="text-5xl font-extrabold text-gray-900">$99</span>
              <span className="text-gray-500 ml-2 font-medium">/ tháng</span>
            </div>

            <Link href="/contact" className={buttonClass}>
              Liên hệ tư vấn
            </Link>

            <ul className="mt-8 space-y-4 flex-1">
              <ListItem text="Không giới hạn Cửa hàng" />
              <ListItem text="API Riêng (Private API)" />
              <ListItem text="Phí sàn thỏa thuận (1%)" />
              <ListItem text="Quản lý Team & Phân quyền" />
              <ListItem text="Hợp đồng SLA cam kết" />
            </ul>
          </div>
        </div>
      </div>

      {/* 3. COMPARISON TABLE */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-24">
        <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center tracking-tight">
          So Sánh Tính Năng Chi Tiết
        </h3>
        <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="p-6 text-sm font-bold text-gray-900 w-1/3 tracking-wide">
                    Tính năng
                  </th>
                  <th className="p-6 text-sm font-bold text-gray-900 text-center w-1/5 tracking-wide">
                    Professional
                  </th>
                  <th className="p-6 text-sm font-bold text-black text-center w-1/5 bg-gray-100 tracking-wide">
                    Starter
                  </th>
                  <th className="p-6 text-sm font-bold text-gray-900 text-center w-1/5 tracking-wide">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <TableRow
                  feature="Số lượng sản phẩm"
                  v1="Không giới hạn"
                  v2="10"
                  v3="Không giới hạn"
                />
                <TableRow
                  feature="Phí giao dịch (Platform Fee)"
                  v1="3%"
                  v2="10%"
                  v3="Thỏa thuận"
                />
                <TableRow
                  feature="Dung lượng lưu trữ"
                  v1="50GB"
                  v2="1GB"
                  v3="1TB+"
                />
                <TableRow
                  feature="Tên miền riêng"
                  v1={true}
                  v2={false}
                  v3={true}
                />
                <TableRow
                  feature="Xóa logo bản quyền"
                  v1={true}
                  v2={false}
                  v3={true}
                />
                <TableRow
                  feature="API Access"
                  v1={false}
                  v2={false}
                  v3={true}
                />
                <TableRow
                  feature="Hỗ trợ kỹ thuật"
                  v1="Ưu tiên 24/7"
                  v2="Email"
                  v3="1-1 Trực tiếp"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. FAQ SECTION */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10 tracking-tight">
          Câu Hỏi Thường Gặp
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FaqItem
            q="Tôi có cần thẻ tín dụng để đăng ký gói miễn phí không?"
            a="Không. Bạn có thể tạo tài khoản và bắt đầu bán hàng ngay lập tức mà không cần nhập thông tin thanh toán."
          />
          <FaqItem
            q="Phí sàn được tính như thế nào?"
            a="Phí sàn được trừ tự động trên mỗi giao dịch thành công. Ví dụ với gói Starter (10%), nếu bạn bán sản phẩm $100, bạn nhận $90 và sàn nhận $10."
          />
          <FaqItem
            q="Tôi có thể nâng cấp gói sau này không?"
            a="Chắc chắn rồi. Bạn có thể nâng cấp lên gói Pro hoặc Enterprise bất cứ lúc nào trong trang quản trị để hưởng mức phí ưu đãi hơn."
          />
          <FaqItem
            q="Phí giao dịch bao gồm những gì?"
            a="Phí giao dịch bao gồm phí xử lý thẻ của Stripe (khoảng 2.9% + $0.30) và phí nền tảng của Funroad."
          />
        </div>
      </div>

      {/* 5. BOTTOM CTA */}
      <div className="mx-auto max-w-xl px-6 lg:px-8 mt-12 text-center pb-8">
        <p className="text-lg font-medium text-gray-500 mb-4">
          Bạn vẫn còn thắc mắc?
        </p>

        <Link
          href="/contact"
          className="group inline-flex items-center text-xl sm:text-xl font-extrabold text-black hover:text-pink-400 transition-colors duration-300"
        >
          Liên hệ đội ngũ hỗ trợ
          <ArrowRight className="ml-3 h-6 w-6 sm:h-8 sm:w-8 group-hover:translate-x-2 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

// --- SUB COMPONENTS ---

// Component hiển thị từng dòng tính năng trong gói giá
function ListItem({
  text,
  active = false,
}: {
  text: string;
  active?: boolean;
}) {
  return (
    <li className="flex gap-3 text-sm text-gray-600 items-start font-medium">
      <div
        className={`mt-0.5 rounded-full p-0.5 ${active ? "bg-black text-white" : "bg-gray-100 text-gray-500"}`}
      >
        <Check className="h-3 w-3" />
      </div>
      <span className={active ? "font-semibold text-gray-900" : ""}>
        {text}
      </span>
    </li>
  );
}

// Component hiển thị từng dòng trong bảng so sánh
function TableRow({
  feature,
  v1,
  v2,
  v3,
}: {
  feature: string;
  v1: string | boolean;
  v2: string | boolean;
  v3: string | boolean;
}) {
  const renderValue = (val: string | boolean) => {
    if (typeof val === "boolean") {
      return val ? (
        <Check className="h-5 w-5 mx-auto text-black" />
      ) : (
        <X className="h-5 w-5 mx-auto text-gray-300" />
      );
    }
    return <span className="text-gray-700 font-semibold">{val}</span>;
  };

  return (
    <tr className="hover:bg-gray-50/50 transition-colors">
      <td className="p-6 text-sm text-gray-900 font-semibold">{feature}</td>
      <td className="p-6 text-center text-sm">{renderValue(v1)}</td>
      <td className="p-6 text-center text-sm bg-gray-50 font-bold">
        {renderValue(v2)}
      </td>
      <td className="p-6 text-center text-sm">{renderValue(v3)}</td>
    </tr>
  );
}

// Component hiển thị từng câu hỏi thường gặp
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="bg-white p-6 rounded-[1.5rem] border border-gray-200 shadow-sm hover:border-gray-300 transition-colors h-full">
      <dt className="flex items-start gap-3 font-bold text-gray-900 mb-2 tracking-tight">
        <HelpCircle className="h-5 w-5 text-gray-400 shrink-0 mt-0.5" />
        <span>{q}</span>
      </dt>
      <dd className="text-sm leading-relaxed text-gray-600 pl-8 font-medium">
        {a}
      </dd>
    </div>
  );
}
