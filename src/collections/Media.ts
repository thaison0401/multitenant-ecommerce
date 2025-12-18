import { isSuperAdmin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Quản lý File & Ảnh",
    plural: "Quản lý File & Ảnh",
  },
  access: {
    read: () => true,
    delete: ({ req }) => isSuperAdmin(req.user),
  },
  admin: {
    hidden: ({ user }) => !isSuperAdmin(user),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
      label: "Văn bản thay thế",
      admin: {
        description: "Mô tả ngắn gọn nội dung hình ảnh hoặc tên file.",
      },
    },
  ],
  upload: true,
};
