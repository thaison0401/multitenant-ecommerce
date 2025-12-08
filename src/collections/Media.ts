import { isSuperAdmin } from "@/lib/access";
import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: {
    singular: "Thư viện ảnh",
    plural: "Thư viện ảnh",
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
        description: "Mô tả ngắn gọn nội dung hình ảnh.",
      },
    },
  ],
  upload: true,
};
