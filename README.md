<h1 align="center">🛒 Multi-Tenant Marketplace Platform</h1>

<p align="center">
A modern <b>full-stack multi-vendor marketplace</b> built with <b>Next.js 14</b>, <b>Payload CMS</b>, and <b>Stripe Connect</b>.
</p>

<p align="center">
<img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js"/>
<img src="https://img.shields.io/badge/React-Server_Components-20232A?style=for-the-badge&logo=react"/>
<img src="https://img.shields.io/badge/Payload-CMS-black?style=for-the-badge"/>
<img src="https://img.shields.io/badge/tRPC-TypeSafe_API-2596BE?style=for-the-badge"/>
<img src="https://img.shields.io/badge/Stripe-Connect-635BFF?style=for-the-badge&logo=stripe"/>
<img src="https://img.shields.io/badge/MongoDB-Database-4EA94B?style=for-the-badge&logo=mongodb"/>
<img src="https://img.shields.io/badge/Bun-Package_Manager-black?style=for-the-badge&logo=bun"/>
</p>

---

## 🚀 Live Demo

🌐 **[E-commerce Multi Vendor Website](https://multitenant-ecommerce-pearl.vercel.app/)**

---

## ⭐ Project Highlights

This project demonstrates how to build a **production-ready multi-vendor marketplace** using modern web technologies.

Key architectural concepts implemented:

- **Multi-Tenant Marketplace Architecture**
- **Stripe Connect Revenue Splitting**
- **Headless CMS architecture**
- **Type-Safe APIs using tRPC**
- **Server-Side Rendering with Next.js**
- **Role-Based Access Control**

The architecture is inspired by real-world platforms such as:

- Amazon
- Shopee

---

## 🧠 System Overview

Unlike traditional e-commerce websites, this system acts as a **multi-tenant marketplace platform**, allowing multiple independent creators and vendors to operate their own businesses within the same ecosystem.

---

### 🏪 For Vendors

Each vendor is treated as an isolated tenant. They can:

- Manage their own products with **rich-text descriptions and secure file attachments**
- Operate a **dedicated storefront (subdomain-ready routing architecture)**
- Track orders and monitor revenue through a private **Payload CMS dashboard**
- Receive **automated payouts** directly to their bank accounts after completing **Stripe KYC onboarding**

---

### 🛍️ For Customers

Customers enjoy a seamless unified shopping experience:

- Purchase products from **multiple independent vendors**
- Access a centralized **Purchases Library** to download digital files
- Leave **verified ratings and written reviews** for purchased products

---

### 👑 For Platform Administrators

The platform administrator maintains full control of the ecosystem:

- Manage users, products, and vendors across the marketplace
- Enforce **Role-Based Access Control (RBAC)**
- Moderate vendors and maintain marketplace quality
- Collect an **application fee (e.g., 10%)** automatically from each transaction via **Stripe Connect**

---

## 🏗 System Architecture

The platform follows a modern full-stack architecture optimized for scalability.

```text
                 ┌──────────────────────────────┐
                 │          Client Layer        │
                 │                              │
                 │      Browser / React UI      │
                 │   Shadcn UI + TailwindCSS    │
                 │   React Query + tRPC Client  │
                 └───────────────┬──────────────┘
                                 │
                                 ▼
                 ┌──────────────────────────────┐
                 │       Application Layer      │
                 │                              │
                 │           Next.js 14         │
                 │   React Server Components    │
                 │          tRPC Router         │
                 │         Payload CMS          │
                 └───────────────┬──────────────┘
                                 │
                                 ▼
                 ┌──────────────────────────────┐
                 │     Infrastructure Layer     │
                 │                              │
                 │           MongoDB            │
                 │         Stripe API           │
                 │         Vercel Blob          │
                 └──────────────────────────────┘
```

---

## 💳 Payment Flow (Stripe Connect)

The platform uses **Stripe Connect** to securely process transactions between customers, the marketplace platform, and independent vendors.

This architecture enables **automatic revenue splitting** and ensures vendors receive payouts directly to their own Stripe accounts.

---

### 1️⃣ Vendor Onboarding & Verification

Before a vendor can list products on the marketplace, they must complete **Stripe Identity Verification (KYC)** through the vendor dashboard.

During this process:

- Vendor is redirected to Stripe Onboarding
- Stripe collects identity and banking information
- A **Stripe Connected Account** is created for the vendor

This ensures compliance with financial regulations and enables vendors to receive payouts securely.

---

### 2️⃣ Transaction Lifecycle

When a customer purchases a product, the payment process follows this lifecycle:

```text
Customer Checkout
        |
        v
Stripe Payment Intent Created
        |
        v
Payment Confirmed
        |
        v
Application Fee Deducted
        |
        v
Vendor Earnings Transferred
        |
        v
Stripe Payout to Vendor Bank Account
```

---

### 3️⃣ Automated Revenue Splitting

Stripe Connect automatically splits the payment **at the time of purchase**.

Each transaction is processed as follows:

**Application Fee (Platform Revenue)**  
The marketplace deducts a configurable **application fee** (for example 10%) from the order value.

**Vendor Earnings**  
The remaining balance is instantly routed to the vendor’s **Stripe Connected Account**.

This architecture allows the platform to scale to **multiple independent vendors** without handling sensitive banking logic directly.

---

## 🧰 Tech Stack

### Frontend

- Next.js 14 (App Router)
- React Server Components
- TailwindCSS
- Shadcn UI
- TanStack Query v5 (server state management)
- Zustand (client state management for cart)
- Nuqs (URL state management for filters)

### Backend

- Payload CMS (Headless CMS)
- tRPC API (End-to-end type-safe APIs)

### Database

- MongoDB

### Payment

- Stripe
- Stripe Connect (Marketplace payments)

### Package Manager

- Bun

### Deployment

- Vercel

---

## 🔥 Features

### 🛍 Customer
Customers enjoy a smooth multi-vendor shopping experience:
- **Browse & Search** products from multiple vendors
- **Advanced Filters** by category, price, and tags
- **Shopping Cart & Secure Checkout** via Stripe
- **Purchase Library** to access bought products
- **Ratings & Reviews** for purchased items

---

### 🏪 Vendor
Each vendor operates in an **isolated multi-tenant environment**:
- **Branded Storefront** with unique routing
- **Vendor Dashboard** powered by Payload CMS
- **Product Management** (create, edit, upload files)
- **Order & Revenue Tracking**
- **Stripe Connect Payouts** with identity verification

---

### 👑 Admin
Administrators maintain full marketplace control:
- **Super Admin Dashboard** for all platform entities
- **Role-Based Access Control (RBAC)**
- **Vendor Moderation** (approve, suspend vendors)
- **Marketplace Monitoring** for products and orders

---

## 📸 Screenshots

<!--
Add screenshots here when available.

Example:

![Homepage](./screenshots/homepage.png)
![Product Page](./screenshots/product-page.png)
![Vendor Dashboard](./screenshots/vendor-dashboard.png)
-->

---

## ⚙️ Installation

### 1️⃣ Prerequisites

Make sure you have the following installed:

- Node.js (v18+)
- Bun
- MongoDB Database (MongoDB Atlas recommended)
- Stripe Developer Account

---

### 2️⃣ Clone repository

```bash
git clone https://github.com/thaison0401/multitenant-ecommerce.git
cd multitenant-ecommerce
```

---

### 3️⃣ Install dependencies

Recommended:

```bash
bun install
```

Alternative:

```bash
npm install
```

---

### 4️⃣ Configure environment variables

Create a `.env.local` file in the root directory.

Example configuration:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Payload CMS
PAYLOAD_SECRET=your_payload_secret_key

# App URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# Vercel Blob Storage
BLOB_READ_WRITE_TOKEN=vercel_blob_token
```

---

### 5️⃣ Initialize Database

Generate Payload types:

```bash
bun run generate:types
```

Reset database (optional if old data exists):

```bash
bun run database:fresh
```

Seed database with initial data:

```bash
bun run database:seed
```

Note: Do **not run `fresh` and `seed` simultaneously** to avoid MongoDB write conflicts.

---

### 6️⃣ Run development server

```bash
bun run dev
```

or

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 🔑 Default Admin Access

Admin dashboard:

```
http://localhost:3000/admin
```

Credentials:

```
Email: admin@demo.com
Password: demo
```

---

## 📂 Project Structure

```text
multitenant-ecommerce/
|
├── app/              # Next.js App Router
├── components/       # Shared UI components
├── modules/
│   ├── auth/         # Authentication logic
│   ├── cart/         # Zustand cart store
│   ├── products/     # Product features
│   ├── tenants/      # Multi-tenant logic
│   └── orders/       # Order management
│
├── collections/      # Payload CMS collections
├── trpc/             # Type-safe API routers
├── lib/              # Utilities
├── public/           # Static assets
└── styles/           # Global styles
```

---

## 🔐 Security Features

- Secure Stripe payment integration
- Authentication and authorization
- Role-based access control
- Server-side validation

---

## 📈 Future Improvements

Potential upgrades:

- Product reviews and ratings
- Vendor analytics dashboard
- Real-time notifications
- Chat between buyers and vendors
- AI product recommendation
- Microservices architecture

---

## 👨‍💻 Author

**Tran Thai Son**

Information Technology Student

Interested in **Full-Stack Development, System Architecture, and Scalable Web Applications**

🔗 GitHub  
[https://github.com/thaison0401](https://github.com/thaison0401)

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
