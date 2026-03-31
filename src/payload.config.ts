// storage-adapter-import-placeholder
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloudPlugin } from "@payloadcms/payload-cloud";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { multiTenantPlugin } from "@payloadcms/plugin-multi-tenant";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { isSuperAdmin } from "./lib/access";

import { Tags } from "./collections/Tags";
import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Orders } from "./collections/Orders";
import { Tenants } from "./collections/Tenants";
import { Reviews } from "./collections/Reviews";
import { Products } from "./collections/Products";
import { Categories } from "./collections/Categories";
import { Config } from "./payload-types";

// Import gói ngôn ngữ tiếng Việt từ Payload
import { vi } from "@payloadcms/translations/languages/vi";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug, //Xác định collection users là tài khoản đăng nhập admin
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      beforeNavLinks: ["@/components/stripe-verify#StripeVerify"],
    },
  },

  // Chinh sách i18n để hỗ trợ tiếng Việt
  i18n: {
    supportedLanguages: { vi }, // Khai báo hỗ trợ tiếng Việt
    fallbackLanguage: "vi", // Đặt tiếng Việt làm ngôn ngữ mặc định (nếu muốn)
  },

  collections: [
    Users,
    Media,
    Categories,
    Products,
    Tags,
    Tenants,
    Orders,
    Reviews,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url:
      process.env.DATABASE_URI ||
      "mongodb+srv://sontran:123@cluster0.cjewop7.mongodb.net/ecommerce",
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    multiTenantPlugin<Config>({
      //Cho phép nhiều gian hàng dùng chung hệ thống
      collections: {
        products: {},
        media: {},
      },
      tenantsArrayField: {
        includeDefaultField: false, //Tránh auto gán tenant mặc định
      },
      userHasAccessToAllTenants: (user) => isSuperAdmin(user), //Super Admin quản lý toàn bộ gian hàng
    }),
    vercelBlobStorage({
      enabled: true,
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN, //Upload ảnh/file lên Vercel Blob (Không lưu file trong server)
    }),
  ],
});
