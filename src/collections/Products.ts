import type { CollectionConfig } from "payload";

import { Tenant } from "@/payload-types";
import { isSuperAdmin } from "@/lib/access";

export const Products: CollectionConfig = {
  slug: "products",
  labels: {
    singular: "Sản phẩm",
    plural: "Sản phẩm",
  },
  access: {
    create: ({ req }) => {
      if (isSuperAdmin(req.user)) return true;

      const tenant = req.user?.tenants?.[0]?.tenant as Tenant;

      return Boolean(tenant?.stripeDetailsSubmitted); //Chặn seller chưa xác minh Stripe đăng bán
    },
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "name",
    description:
      "Bạn phải xác minh tài khoản trước khi có thể đăng bán sản phẩm.",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Tên sản phẩm",
    },
    {
      name: "description",
      type: "richText",
      label: "Mô tả sản phẩm",
    },
    {
      name: "price",
      type: "number",
      required: true,
      label: "Giá bán",
      admin: {
        description: "Giá tính bằng USD",
      },
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      label: "Danh mục",
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
      label: "Thẻ",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Hình ảnh sản phẩm",
    },
    {
      name: "cover",
      type: "upload",
      relationTo: "media",
      label: "Ảnh bìa sản phẩm",
    },
    {
      name: "refundPolicy",
      type: "select",
      label: "Chính sách hoàn tiền",
      options: [
        { label: "30 ngày", value: "30-day" },
        { label: "14 ngày", value: "14-day" },
        { label: "7 ngày", value: "7-day" },
        { label: "3 ngày", value: "3-day" },
        { label: "1 ngày", value: "1-day" },
        { label: "Không hoàn tiền", value: "no-refunds" },
      ],
      defaultValue: "30-day",
    },
    {
      name: "content",
      type: "richText",
      label: "Nội dung sản phẩm (File/Tài liệu)",
      admin: {
        description:
          "Nội dung được bảo vệ, chỉ hiển thị cho khách hàng sau khi đã thanh toán. (Dùng để viết hướng dẫn, chèn link tải Ebook/Source code...).",
      },
    },
    {
      name: "isPrivate",
      label: "Chế độ riêng tư",
      defaultValue: false,
      type: "checkbox",
      admin: {
        description:
          "Nếu bật, sản phẩm này sẽ KHÔNG được hiển thị trên cửa hàng công khai (chỉ Admin mới nhìn thấy).",
      },
    },
    {
      name: "isArchived",
      label: "Lưu trữ (Ẩn sản phẩm)",
      defaultValue: false,
      type: "checkbox",
      admin: {
        description:
          "Nếu chọn, sản phẩm này sẽ bị ẩn đi và không thể mua được nữa (thay vì xóa hẳn).",
      },
    },
  ],
};
