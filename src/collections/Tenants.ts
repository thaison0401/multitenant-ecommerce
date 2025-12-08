import type { CollectionConfig } from "payload";

import { isSuperAdmin } from "@/lib/access";

export const Tenants: CollectionConfig = {
  slug: "tenants",
  labels: {
    singular: "Nhà cung cấp",
    plural: "Nhà cung cấp",
  },
  access: {
    create: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "slug",
  },
  fields: [
    {
      name: "name",
      required: true,
      type: "text",
      label: "Tên nhà cung cấp",
      admin: {
        description: "Tên hiển thị công khai (Ví dụ: funroad,...)",
      },
    },
    {
      name: "slug",
      type: "text",
      index: true,
      required: true,
      unique: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      label: "Mã đường dẫn (Slug)",
      admin: {
        description:
          "Dùng làm địa chỉ truy cập shop. Lưu ý: Viết liền không dấu, không viết hoa, không ký tự đặc biệt (Ví dụ: funroad)",
      },
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      label: "Logo nhà cung cấp",
    },
    {
      name: "stripeAccountId",
      type: "text",
      required: true,
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      label: "ID tài khoản Stripe",
      admin: {
        description:
          "Mã tài khoản kết nối Stripe của nhà cung cấp này (Dùng để nhận tiền)",
      },
    },
    {
      name: "stripeDetailsSubmitted",
      type: "checkbox",
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
      label: "Đã hoàn tất xác minh Stripe",
      admin: {
        description:
          "Nhà cung cấp KHÔNG THỂ đăng bán sản phẩm nếu chưa hoàn tất việc gửi thông tin xác minh cho Stripe.",
      },
    },
  ],
};
