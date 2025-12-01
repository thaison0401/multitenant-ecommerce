import Link from "next/link";

export const Footer = () => {
  return (
    // justify-between: Đẩy 2 thẻ div con ra 2 đầu mút trái/phải
    // items-center: Căn giữa theo chiều dọc
    <footer className="flex border-t justify-between items-center font-medium p-6 bg-white">
      {/* 1. CỤM BÊN TRÁI */}
      <div className="flex items-center gap-2">
        <p>Được vận hành bởi © 2025 Funroad Inc.</p>
      </div>

      {/* 2. CỤM BÊN PHẢI (Đã tách ra khỏi cụm trái) */}
      <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
        <span>© 2025 Funroad Inc.</span>
        <Link href="/privacy" className="hover:text-gray-900 transition-colors">
          Bảo mật
        </Link>
        <Link href="/terms" className="hover:text-gray-900 transition-colors">
          Điều khoản
        </Link>
      </div>
    </footer>
  );
};
