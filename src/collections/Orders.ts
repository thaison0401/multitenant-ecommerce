import type { CollectionConfig } from "payload";

import { isSuperAdmin } from "@/lib/access";

export const Orders: CollectionConfig = {
  slug: "orders",
  labels: {
    singular: "Đơn hàng",
    plural: "Đơn hàng",
  },
  access: {
    read: ({ req }) => isSuperAdmin(req.user),
    create: ({ req }) => isSuperAdmin(req.user),
    update: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Tên đơn hàng",
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      hasMany: false,
      label: "Người dùng",
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      required: true,
      hasMany: false,
      label: "Sản phẩm",
    },
    {
      name: "stripeCheckoutSessionId", //Lưu Stripe session để đối soát
      type: "text",
      required: true,
      label: "Mã giao dịch Stripe (Stripe ID)",
      admin: {
        description: "Mã định danh dùng để đối soát thanh toán trên Stripe.",
      },
    },
    {
      name: "stripeAccountId",
      type: "text",
      label: "ID tài khoản Người bán (Stripe Account ID)",
      admin: {
        description:
          "ID tài khoản Stripe của người bán nhận tiền đơn hàng này.",
      },
    },
  ],
};
