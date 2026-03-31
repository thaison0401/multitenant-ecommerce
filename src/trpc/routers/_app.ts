import { createTRPCRouter } from "../init";

import { authRouter } from "@/modules/auth/server/procedures";
import { tagsRouter } from "@/modules/tags/server/procedures";
import { reviewsRouter } from "@/modules/reviews/server/procedures";
import { libraryRouter } from "@/modules/library/server/procedures";
import { tenantsRouter } from "@/modules/tenants/server/procedures";
import { productsRouter } from "@/modules/products/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { checkoutRouter } from "@/modules/checkout/server/procedures";

//Gom toàn bộ API backend của hệ thống vào một router duy nhất để frontend gọi.
export const appRouter = createTRPCRouter({
  auth: authRouter,
  tags: tagsRouter,
  tenants: tenantsRouter,
  reviews: reviewsRouter,
  library: libraryRouter,
  checkout: checkoutRouter,
  products: productsRouter,
  categories: categoriesRouter,
});
// Giup fe tu dong goi y api khi su dung
export type AppRouter = typeof appRouter;
