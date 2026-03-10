<h1 align="center">🛒 Multi-Tenant Marketplace Platform</h1>

<p align="center">
A modern full-stack multi-vendor marketplace built with <b>Next.js 14</b>, <b>Payload CMS</b>, and <b>Stripe Connect</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-Server_Components-20232A?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Payload-CMS-black?style=for-the-badge" alt="Payload CMS" />
  <img src="https://img.shields.io/badge/tRPC-TypeSafe_API-2596BE?style=for-the-badge" alt="tRPC" />
  <img src="https://img.shields.io/badge/Stripe-Connect-635BFF?style=for-the-badge&logo=stripe" alt="Stripe Connect" />
  <img src="https://img.shields.io/badge/MongoDB-Database-4EA94B?style=for-the-badge&logo=mongodb" alt="MongoDB" />
</p>

---

## 🚀 Live Demo

🌐 **[Visit Digital Marketplace Live](https://multitenant-ecommerce-pearl.vercel.app/)**

---

## ⭐ Project Highlights

This project demonstrates how to build a **production-ready multi-vendor marketplace** with modern web technologies.

Key architectural concepts implemented:
- **Multi-Tenant Marketplace Architecture**
- **Stripe Connect Revenue Splitting**
- **Headless CMS architecture**
- **Type-Safe APIs using tRPC**
- **Server-Side Rendering with Next.js**
- **Role-based access control**

The architecture is inspired by real platforms such as:
- Amazon
- Shopee
- Etsy

---

## 🧠 System Overview

Unlike a traditional e-commerce website, this system allows **multiple independent vendors** to operate within a single platform.

Each vendor can:
- Manage their own products
- Track their own orders
- Receive payments automatically

While the **platform admin maintains full control of the ecosystem**.

---

## 🏗 System Architecture

The platform follows a modern full-stack architecture optimized for scalability.

```text
Client (Browser)
│
▼
Next.js Frontend
│
▼
tRPC API
│
▼
Payload CMS
│
▼
MongoDB
Payment Flow
Plaintext
Customer → Stripe Checkout → Stripe Connect → Vendor Payout
Stripe automatically splits the payment between:

The platform

The vendor

🧰 Tech Stack
Frontend

Next.js 14 (App Router)

React Server Components

TailwindCSS

Shadcn UI

Backend

Payload CMS

tRPC API

Database

MongoDB

Payment

Stripe

Stripe Connect

Deployment

Vercel

🔥 Features
🛍 Customer
Customers can:

Browse products from multiple vendors

Search and filter products

Manage shopping cart

Checkout securely using Stripe

View order history

🏪 Vendor
Each vendor operates independently on the platform. Features include:

Vendor dashboard

Product management

Order tracking

Revenue monitoring

Stripe payout integration

👑 Admin
Platform administrators can:

Manage users

Approve vendors

Monitor products

Maintain marketplace integrity

📸 Screenshots
(Add your screenshots here by replacing the image paths)

⚙️ Installation
1. Clone the repository

Bash
git clone [https://github.com/thaison0401/multitenant-ecommerce.git](https://github.com/thaison0401/multitenant-ecommerce.git)
2. Go to project directory

Bash
cd multitenant-ecommerce
3. Install dependencies

Bash
npm install
# or yarn install / pnpm install
4. Create environment variables
Create a .env or .env.local file in the root directory:

Đoạn mã
MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_payload_secret_key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
5. Run development server

Bash
npm run dev
Open browser at http://localhost:3000

📂 Project Structure
Plaintext
multitenant-ecommerce/
├── app/          # Next.js App Router (Frontend)
├── components/   # React components & Shadcn UI
├── collections/  # Payload CMS database schemas
├── lib/          # Utility functions and configurations
├── public/       # Static assets
└── trpc/         # Type-safe API routers
🔐 Security Features
Secure Stripe payment processing

Authentication and authorization

Role-based access control

Server-side validation

📈 Future Improvements
Potential upgrades:

Product reviews & ratings

Vendor analytics dashboard

Real-time notifications

Chat between buyer and vendor

AI recommendation system

Microservices architecture

👨‍💻 Author
Tran Thai Son 🎓 Information Technology Student @ UTH

💻 Passionate about Full-Stack Development and System Architecture

GitHub: thaison0401

LinkedIn: (Thêm link LinkedIn của bạn vào đây)

⭐ Support
If you like this project, consider giving it a star ⭐ on GitHub.
