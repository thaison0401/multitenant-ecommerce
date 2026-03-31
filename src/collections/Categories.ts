import type { CollectionConfig } from "payload";

import { isSuperAdmin } from "@/lib/access";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: "Danh mục",
    plural: "Danh mục",
  },
  access: {
    read: () => true, //Phân quyền rõ ràng, tránh user tự ý sửa danh mục.
    create: ({ req }) => isSuperAdmin(req.user),
    update: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    useAsTitle: "name",
    hidden: ({ user }) => !isSuperAdmin(user), //Ẩn menu trong Admin Panel với user thường.
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Tên danh mục",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
      label: "Đường dẫn (Slug)",
    },
    { name: "color", type: "text", label: "Màu sắc (Mã Hex)" },
    {
      name: "parent",
      type: "relationship",
      relationTo: "categories",
      hasMany: false,
      label: "Danh mục cấp trên",
      admin: {
        description:
          "Chọn danh mục lớn chứa danh mục này (Để trống nếu đây là danh mục gốc)",
      },
    },
    {
      name: "subcategories",
      type: "join",
      collection: "categories",
      on: "parent",
      hasMany: true,
      label: "Danh mục cấp dưới",
    },
  ],
};
