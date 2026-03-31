import { cookies as getCookies } from "next/headers";

interface Props {
  prefix: string;
  value: string;
}
export const generateAuthCookie = async ({ prefix, value }: Props) => {
  const cookies = await getCookies();

  cookies.set({
    name: `${prefix}-token`,
    value,
    httpOnly: true, //JS phía client không đọc được, Chống XSS đánh cắp token
    path: "/",
    ...(process.env.NODE_ENV !== "development" && {
      sameSite: "none", //Cho phép cookie gửi qua cross-site
      domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
      secure: true, //Cookie chỉ gửi qua HTTPS
    }),
  });
};
