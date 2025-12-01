import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="w-full py-24">
      {/* Container chính */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Liên Hệ Hỗ Trợ
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Bạn có thắc mắc về sản phẩm hoặc cần hỗ trợ kỹ thuật? <br />
            Đừng ngần ngại để lại lời nhắn cho chúng tôi.
          </p>
        </div>

        {/* Khối nội dung chính (Card trắng) */}
        <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Cột Trái: Thông tin liên hệ (ĐÃ SỬA MÀU) */}
            <div className="bg-[#1a1a1a] p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Trang trí nền (Mờ hơn để không rối) */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Thông Tin Liên Hệ
                </h3>
                <p className="text-gray-400 mb-12 leading-relaxed">
                  Dự án Demo phục vụ báo cáo thực tập tốt nghiệp. Vui lòng liên
                  hệ sinh viên thực hiện để biết thêm chi tiết.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300">2251120048@ut.edu.vn</span>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300">(+84) 058 988 2106</span>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="h-12 w-12 bg-white/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300">
                      Tp. Hồ Chí Minh, Vietnam
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-16 lg:mt-0 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-500">© 2025 Funroad Inc.</p>
              </div>
            </div>

            {/* Cột Phải: Form gửi tin nhắn */}
            <div className="p-10 lg:p-16 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Gửi Lời Nhắn
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                    >
                      Họ
                    </label>
                    <input
                      type="text"
                      className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#F9F9F9]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                    >
                      Tên
                    </label>
                    <input
                      type="text"
                      className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#F9F9F9]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#F9F9F9]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-2"
                  >
                    Nội dung
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6 bg-[#F9F9F9]"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-black text-white hover:bg-pink-400 hover:text-primary px-5 py-4 text-center text-sm font-bold text-white shadow-lg hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all hover:scale-[1.02]"
                  >
                    Gửi ngay{" "}
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
