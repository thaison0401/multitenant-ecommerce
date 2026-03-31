import z from "zod";
import { TRPCError } from "@trpc/server";

import { DEFAULT_LIMIT } from "@/constants";
import { Media, Tenant } from "@/payload-types";
import { createTRPCRouter, protectedProcedure } from "@/trpc/init";

export const libraryRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const ordersData = await ctx.db.find({
        collection: "orders", //Kiem tra ng dung da mua chua
        limit: 1,
        pagination: false,
        // Đây là dòng CHẶN User xem sản phẩm chưa mua
        where: {
          and: [
            {
              product: {
                equals: input.productId,
              },
            },
            {
              user: {
                equals: ctx.session.user.id,
              },
            },
          ],
        },
      });

      const order = ordersData.docs[0];

      if (!order) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Đơn hàng không tồn tại",
        });
      }

      const product = await ctx.db.findByID({
        collection: "products",
        id: input.productId,
      });

      if (!product) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Sản phẩm không tồn tại",
        });
      }

      return product;
    }),

  getMany: protectedProcedure
    .input(
      z.object({
        cursor: z.number().default(1),
        limit: z.number().default(DEFAULT_LIMIT),
      })
    )
    .query(async ({ ctx, input }) => {
      const ordersData = await ctx.db.find({
        collection: "orders", //// Chỉ lấy đơn hàng của user hiện tại
        depth: 0, // chỉ lấy ID → tối ưu performance
        page: input.cursor,
        limit: input.limit,
        where: {
          user: {
            equals: ctx.session.user.id, // Không bao giờ lấy order người khác
          },
        },
      });

      const productIds = ordersData.docs.map((order) => order.product);

      const productsData = await ctx.db.find({
        collection: "products",
        pagination: false,
        where: {
          id: {
            in: productIds, // Lấy DS sản phẩm dựa trên productIds da mua
          },
        },
      });

      const dataWithSummarizedReviews = await Promise.all(
        productsData.docs.map(async (doc) => {
          const reviewsData = await ctx.db.find({
            collection: "reviews", // Lấy đánh giá cho từng sản phẩm
            pagination: false,
            where: {
              product: {
                equals: doc.id,
              },
            },
          });

          return {
            ...doc,
            reviewCount: reviewsData.totalDocs, // Tổng số đánh giá
            reviewRating:
              reviewsData.docs.length === 0
                ? 0
                : reviewsData.docs.reduce(
                    (acc, review) => acc + review.rating, //Tính trung bình rating
                    0
                  ) / reviewsData.totalDocs,
          };
        })
      );

      return {
        ...productsData,
        docs: dataWithSummarizedReviews.map((doc) => ({
          ...doc,
          image: doc.image as Media | null,
          tenant: doc.tenant as Tenant & { image: Media | null },
        })),
      };
    }),
});
