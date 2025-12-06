import { getPayload } from "payload";
import config from "@payload-config";

import { stripe } from "./lib/stripe";

const categories = [
  {
    name: "Tất cả",
    slug: "all",
  },
  {
    name: "Kinh doanh & Tài chính",
    color: "#FFB347",
    slug: "business-money",
    subcategories: [
      { name: "Kế toán", slug: "accounting" },
      {
        name: "Khởi nghiệp",
        slug: "entrepreneurship",
      },
      { name: "Việc làm thêm & Dự án phụ", slug: "gigs-side-projects" },
      { name: "Đầu tư", slug: "investing" },
      { name: "Quản lý & Lãnh đạo", slug: "management-leadership" },
      {
        name: "Marketing & Bán hàng",
        slug: "marketing-sales",
      },
      {
        name: "Kết nối, Nghề nghiệp & Việc làm",
        slug: "networking-careers-jobs",
      },
      { name: "Tài chính cá nhân", slug: "personal-finance" },
      { name: "Bất động sản", slug: "real-estate" },
    ],
  },
  {
    name: "Lập trình & Công nghệ",
    color: "#7EC8E3",
    slug: "software-development",
    subcategories: [
      { name: "Lập trình Web", slug: "web-development" },
      { name: "Lập trình Mobile", slug: "mobile-development" },
      { name: "Lập trình Game", slug: "game-development" },
      { name: "Ngôn ngữ lập trình", slug: "programming-languages" },
      { name: "DevOps", slug: "devops" },
    ],
  },
  {
    name: "Viết sách & Xuất bản",
    color: "#D8B5FF",
    slug: "writing-publishing",
    subcategories: [
      { name: "Tiểu thuyết", slug: "fiction" },
      { name: "Phi hư cấu", slug: "non-fiction" },
      { name: "Blogging", slug: "blogging" },
      { name: "Copywriting", slug: "copywriting" },
      { name: "Tự xuất bản", slug: "self-publishing" },
    ],
  },
  {
    name: "Khác",
    slug: "other",
  },
  {
    name: "Giáo dục",
    color: "#FFE066",
    slug: "education",
    subcategories: [
      { name: "Khóa học online", slug: "online-courses" },
      { name: "Gia sư", slug: "tutoring" },
      { name: "Chuẩn bị thi cử", slug: "test-preparation" },
      { name: "Học ngôn ngữ", slug: "language-learning" },
    ],
  },
  {
    name: "Phát triển bản thân",
    color: "#96E6B3",
    slug: "self-improvement",
    subcategories: [
      { name: "Năng suất làm việc", slug: "productivity" },
      { name: "Phát triển cá nhân", slug: "personal-development" },
      { name: "Chánh niệm", slug: "mindfulness" },
      { name: "Phát triển sự nghiệp", slug: "career-growth" },
    ],
  },
  {
    name: "Sức khỏe & Thể hình",
    color: "#FF9AA2",
    slug: "fitness-health",
    subcategories: [
      { name: "Bài tập", slug: "workout-plans" },
      { name: "Dinh dưỡng", slug: "nutrition" },
      { name: "Sức khỏe tinh thần", slug: "mental-health" },
      { name: "Yoga", slug: "yoga" },
    ],
  },
  {
    name: "Thiết kế",
    color: "#B5B9FF",
    slug: "design",
    subcategories: [
      { name: "UI/UX", slug: "ui-ux" },
      { name: "Thiết kế đồ hoạ", slug: "graphic-design" },
      { name: "Mô hình 3D", slug: "3d-modeling" },
      { name: "Typography", slug: "typography" },
    ],
  },
  {
    name: "Vẽ & Hội họa",
    color: "#FFCAB0",
    slug: "drawing-painting",
    subcategories: [
      { name: "Màu nước", slug: "watercolor" },
      { name: "Acrylic", slug: "acrylic" },
      { name: "Sơn dầu", slug: "oil" },
      { name: "Pastel", slug: "pastel" },
      { name: "Than chì", slug: "charcoal" },
    ],
  },
  {
    name: "Âm nhạc",
    color: "#FFD700",
    slug: "music",
    subcategories: [
      { name: "Sáng tác", slug: "songwriting" },
      { name: "Sản xuất nhạc", slug: "music-production" },
      { name: "Lý thuyết âm nhạc", slug: "music-theory" },
      { name: "Lịch sử âm nhạc", slug: "music-history" },
    ],
  },
  {
    name: "Nhiếp ảnh",
    color: "#FF6B6B",
    slug: "photography",
    subcategories: [
      { name: "Chân dung", slug: "portrait" },
      { name: "Phong cảnh", slug: "landscape" },
      { name: "Đường phố", slug: "street-photography" },
      { name: "Thiên nhiên", slug: "nature" },
      { name: "Macro", slug: "macro" },
    ],
  },
];

const seed = async () => {
  const payload = await getPayload({ config });

  const adminAccount = await stripe.accounts.create({});

  //Create admin tenant
  const adminTenant = await payload.create({
    collection: "tenants",
    data: {
      name: "admin",
      slug: "admin",
      stripeAccountId: adminAccount.id,
    },
  });

  //Create admin user
  await payload.create({
    collection: "users",
    data: {
      email: "admin@demo.com",
      password: "demo",
      roles: ["super-admin"],
      username: "admin",
      tenants: [
        {
          tenant: adminTenant.id,
        },
      ],
    },
  });

  for (const category of categories) {
    const parentCategory = await payload.create({
      collection: "categories",
      data: {
        name: category.name,
        slug: category.slug,
        color: category.color,
        parent: null,
      },
    });

    for (const subCategory of category.subcategories || []) {
      await payload.create({
        collection: "categories",
        data: {
          name: subCategory.name,
          slug: subCategory.slug,
          parent: parentCategory.id,
        },
      });
    }
  }
};

try {
  await seed();
  console.log("Seeding completed successfully");
  process.exit(0);
} catch (error) {
  console.error("Error during seeding:", error);
  process.exit(1);
}
