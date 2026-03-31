import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    // 1. Lấy dữ liệu từ DB (Vẫn sort theo tên để phần thân giữa được A-Z)
    const data = await ctx.db.find({
      collection: "categories",
      depth: 1, // Tự động lấy dữ liệu con
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: "name",
    });

    // 2. Format dữ liệu (Giữ nguyên logic của bạn)
    const formattedData = data.docs.map((doc) => ({
      ...doc,
      subcategories: (doc.subcategories?.docs ?? []).map((subDoc) => ({
        ...(subDoc as Category),
      })),
    }));

    // 3. Tách riêng ông "Tất cả" (all) và "Khác" (other) ra khỏi đám đông
    const allCategory = formattedData.find((c) => c.slug === "all");
    const otherCategory = formattedData.find((c) => c.slug === "other");

    // 4. Lấy đám đông còn lại (đã trừ 2 ông kia ra)
    const restCategories = formattedData.filter(
      (c) => c.slug !== "all" && c.slug !== "other"
    );

    // 5. Xếp hàng lại: [Tất cả] đứng đầu -> [Đám đông A-Z] -> [Khác] đứng cuối
    return [
      ...(allCategory ? [allCategory] : []),
      ...restCategories,
      ...(otherCategory ? [otherCategory] : []),
    ];
  }),
});
