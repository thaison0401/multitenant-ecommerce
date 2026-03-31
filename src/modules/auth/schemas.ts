import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(1, "Vui lòng nhập mật khẩu"),
});

export const registerSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(3, "Mật khẩu phải có ít nhất 3 ký tự"),
  username: z
    .string()
    .min(3, "Tên nhà cung cấp phải có ít nhất 3 ký tự")
    .max(63, "Tên nhà cung cấp không được quá 63 ký tự")
    //Quy tắc đặt tên
    .regex(
      /^[a-z0-9][a-z0-9-]*[a-z0-9]$/,
      "Tên nhà cung cấp chỉ được chứa chữ thường, số và dấu gạch ngang. Không được bắt đầu hoặc kết thúc bằng dấu gạch ngang."
    )
    .refine(
      (val) => !val.includes("--"),
      "Tên nhà cung cấp không được chứa hai dấu gạch ngang liên tiếp"
    )
    .transform((val) => val.toLowerCase()),
});
