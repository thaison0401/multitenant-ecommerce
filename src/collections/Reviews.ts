import type { CollectionConfig } from "payload";

import { isSuperAdmin } from "@/lib/access";

export const Reviews: CollectionConfig = {
  slug: "reviews",
  labels: {
    singular: "Đánh giá",
    plural: "Đánh giá",
  },
  access: {
    read: ({ req }) => isSuperAdmin(req.user),
    create: ({ req }) => isSuperAdmin(req.user),
    update: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "description",
  },
  fields: [
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Nội dung đánh giá",
    },
    {
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
      label: "Số sao (1-5)",
    },

    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      hasMany: false,
      required: true,
      label: "Sản phẩm",
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      hasMany: false,
      required: true,
      label: "Người dùng",
    },
  ],
};
