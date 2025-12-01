import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export const Footer = () => {
  return (
    <footer className="border-t font-medium bg-white">
      {/* Thêm 'justify-between' vào đây */}
      <div className="max-w-(--breakpoint-xl) mx-auto flex items-center justify-between h-full gap-2 px-4 py-6 lg:px-12">
        {/* Gom nhóm phần bên Trái lại để nó dính liền nhau */}
        <div className="flex items-center gap-2">
          <p>Vận hành bởi</p>
          <Link href={process.env.NEXT_PUBLIC_APP_URL!}>
            <span className={cn("text-2xl font-semibold", poppins.className)}>
              Funroad
            </span>
          </Link>
        </div>

        {/* Phần bên phải: Copyright & Links nhỏ */}
        <div className="flex items-center gap-6 text-xs text-gray-400 font-medium">
          <span>© 2025 Funroad Inc.</span>
          <Link
            href="/privacy"
            className="hover:text-gray-900 transition-colors"
          >
            Bảo mật
          </Link>
          <Link href="/terms" className="hover:text-gray-900 transition-colors">
            Điều khoản
          </Link>
        </div>
      </div>
    </footer>
  );
};
