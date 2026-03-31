import type { CollectionConfig } from "payload";
import { tenantsArrayField } from "@payloadcms/plugin-multi-tenant/fields";

import { isSuperAdmin } from "@/lib/access";

//Quan hệ được thể hiện gián tiếp thông qua: users.tenants và logic tạo product dựa vào tenant của user.
const defaultTenantArrayField = tenantsArrayField({
  tenantsArrayFieldName: "tenants",
  tenantsCollectionSlug: "tenants",
  tenantsArrayTenantFieldName: "tenant",
  arrayFieldAccess: {
    read: () => true,
    create: ({ req }) => isSuperAdmin(req.user),
    update: ({ req }) => isSuperAdmin(req.user),
  },
  tenantFieldAccess: {
    read: () => true,
    create: ({ req }) => isSuperAdmin(req.user),
    update: ({ req }) => isSuperAdmin(req.user),
  },
});

export const Users: CollectionConfig = {
  slug: "users",
  labels: {
    singular: "Tài khoản",
    plural: "Tài khoản",
  },
  access: {
    read: () => true,
    create: ({ req }) => isSuperAdmin(req.user),
    delete: ({ req }) => isSuperAdmin(req.user),
    update: ({ req, id }) => {
      if (isSuperAdmin(req.user)) return true; // Admin → sửa tất cả

      return req.user?.id === id; //User → chỉ sửa chính mình
    },
  },
  admin: {
    useAsTitle: "username",
    hidden: ({ user }) => !isSuperAdmin(user), //Ẩn menu trong Admin Panel với user thường.
  },
  auth: {
    cookies: {
      ...(process.env.NODE_ENV !== "development" && {
        sameSite: "None",
        domain: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
        secure: true,
      }),
    },
  },
  fields: [
    {
      name: "username",
      required: true,
      unique: true,
      type: "text",
      label: "Người dùng",
    },
    {
      admin: {
        position: "sidebar",
      },
      name: "roles",
      type: "select",
      defaultValue: ["user"],
      hasMany: true,
      label: "Vai trò & Quyền hạn",
      options: [
        { label: "Quản trị viên", value: "super-admin" },
        { label: "Người dùng", value: "user" },
      ],
      access: {
        update: ({ req }) => isSuperAdmin(req.user),
      },
    },
    {
      ...defaultTenantArrayField,
      label: "Danh sách nhà cung cấp",
      labels: {
        singular: "Nhà cung cấp",
        plural: "Nhà cung cấp",
      },
      admin: {
        ...(defaultTenantArrayField?.admin || {}),
        position: "sidebar",
        description: "Các nhà cung cấp mà tài khoản này có quyền quản lý.",
      },
    },
  ],
};
