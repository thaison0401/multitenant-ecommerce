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

Unlike traditional e-commerce websites, this system allows **multiple independent vendors** to operate within the same platform.

Each vendor can:

- Manage their own products
- Track their own orders
- Receive payments automatically

Meanwhile, the **platform administrator maintains full control of the marketplace ecosystem**.

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
```

### Payment Flow

```text
Customer → Stripe Checkout → Stripe Connect → Vendor Payout
```

Stripe automatically splits the payment between:

- Platform fee
- Vendor payout

---

## 🧰 Tech Stack

### Frontend

- Next.js 14 (App Router)
- React Server Components
- TailwindCSS
- Shadcn UI

### Backend

- Payload CMS
- tRPC API

### Database

- MongoDB

### Payment

- Stripe
- Stripe Connect

### Deployment

- Vercel

---

## 🔥 Features

### 🛍 Customer

Customers can:

- Browse products from multiple vendors
- Search and filter products
- Manage shopping cart
- Checkout securely using Stripe
- View order history

---

### 🏪 Vendor

Each vendor operates independently within the platform.

Features include:

- Vendor dashboard
- Product management
- Order tracking
- Revenue monitoring
- Stripe payout integration

---

### 👑 Admin

Platform administrators can:

- Manage users
- Approve vendors
- Monitor products
- Maintain marketplace integrity

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

### 1️⃣ Clone repository

```bash
git clone https://github.com/thaison0401/multitenant-ecommerce.git
```

### 2️⃣ Navigate to project directory

```bash
cd multitenant-ecommerce
```

### 3️⃣ Install dependencies

```bash
npm install
```

or

```bash
yarn install
```

or

```bash
pnpm install
```

---

### 4️⃣ Configure environment variables

Create a file:

```
.env.local
```

Example configuration:

```env
MONGODB_URI=your_mongodb_connection_string
PAYLOAD_SECRET=your_payload_secret_key
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

---

### 5️⃣ Run development server

```bash
npm run dev
```

Open browser:

```
http://localhost:3000
```

---

## 📂 Project Structure

```text
multitenant-ecommerce/
│
├── app/          # Next.js App Router
├── components/   # React components
├── collections/  # Payload CMS schemas
├── lib/          # Utility functions
├── public/       # Static assets
├── styles/       # CSS styles
└── trpc/         # Type-safe API routers
```

---

## 🔐 Security Features

- Secure Stripe payment integration
- Authentication and authorization
- Role-based access control
- Server-side validation

---

## 📈 Future Improvements

Potential upgrades for the platform:

- Product reviews and ratings
- Vendor analytics dashboard
- Real-time notifications
- Chat between buyers and vendors
- AI product recommendation
- Microservices architecture

---

## 👨‍💻 Author

**Tran Thai Son**

🎓 Information Technology Student  

💻 Interested in **Full-Stack Development, System Architecture, and Scalable Web Applications**

GitHub  
👉 **[https://github.com/thaison0401](https://github.com/thaison0401)**

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
