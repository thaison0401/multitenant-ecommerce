import { TRPCError } from "@trpc/server";
import { headers as getHeaders } from "next/headers";

import { stripe } from "@/lib/stripe";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

import { generateAuthCookie } from "../utils";
import { loginSchema, registerSchema } from "../schemas";

export const authRouter = createTRPCRouter({
  session: baseProcedure.query(async ({ ctx }) => {
    const headers = await getHeaders();

    const session = await ctx.db.auth({ headers });

    return session;
  }),

  register: baseProcedure
    .input(registerSchema)
    .mutation(async ({ input, ctx }) => {
      const existingData = await ctx.db.find({
        collection: "users",
        limit: 1,
        where: {
          username: {
            equals: input.username,
          },
        },
      });

      const existingUser = existingData.docs[0];

      if (existingUser) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Tên cửa hàng đã tồn tại", // Đã Việt hóa
        });
      }

      const account = await stripe.accounts.create({});

      if (!account) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Không thể tạo tài khoản thanh toán Stripe",
        });
      }

      const tenant = await ctx.db.create({
        collection: "tenants",
        data: {
          name: input.username,
          slug: input.username,
          stripeAccountId: account.id,
        },
      });

      await ctx.db.create({
        collection: "users",
        data: {
          email: input.email,
          username: input.username,
          password: input.password, // this will be hashed
          tenants: [
            {
              tenant: tenant.id,
            },
          ],
        },
      });

      // Đăng nhập ngay sau khi tạo
      try {
        const data = await ctx.db.login({
          collection: "users",
          data: {
            email: input.email,
            password: input.password,
          },
        });

        if (!data.token) {
          throw new Error();
        }

        await generateAuthCookie({
          prefix: ctx.db.config.cookiePrefix,
          value: data.token,
        });
      } catch {
        // Đã xóa biến error để tránh lỗi ESLint
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Đăng nhập tự động thất bại", // Đã Việt hóa
        });
      }
    }),

  login: baseProcedure.input(loginSchema).mutation(async ({ input, ctx }) => {
    try {
      const data = await ctx.db.login({
        collection: "users",
        data: {
          email: input.email,
          password: input.password,
        },
      });

      if (!data.token) {
        throw new Error();
      }

      await generateAuthCookie({
        prefix: ctx.db.config.cookiePrefix,
        value: data.token,
      });

      return data;
    } catch {
      // Đã xóa biến error để tránh lỗi ESLint
      // Bắt mọi lỗi đăng nhập và trả về thông báo tiếng Việt chuẩn
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Email hoặc mật khẩu không chính xác",
      });
    }
  }),
});
