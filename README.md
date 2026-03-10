<h1 align="center">🛒 Multi-Tenant Marketplace Platform</h1>

<p align="center">
A modern full-stack multi-vendor marketplace built with <b>Next.js 14</b>, <b>Payload CMS</b>, and <b>Stripe Connect</b>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/React-Server_Components-20232A?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Payload-CMS-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/tRPC-TypeSafe_API-2596BE?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Stripe-Connect-635BFF?style=for-the-badge&logo=stripe" />
  <img src="https://img.shields.io/badge/MongoDB-Database-4EA94B?style=for-the-badge&logo=mongodb" />
</p>

---

# 🚀 Live Demo

🌐 https://multitenant-ecommerce-pearl.vercel.app/

---

# ⭐ Project Highlights

This project demonstrates how to build a **production-ready multi-vendor marketplace** using modern web technologies.

Key architectural concepts implemented:

- Multi-Tenant Marketplace Architecture
- Stripe Connect Revenue Splitting
- Headless CMS architecture
- Type-safe APIs using tRPC
- Server-Side Rendering with Next.js
- Role-based access control

The architecture is inspired by real-world platforms such as:

- Amazon
- Shopee
- Etsy

---

# 🧠 System Overview

Unlike a traditional e-commerce website, this system allows **multiple independent vendors** to operate within the same platform.

Each vendor can:

- manage their own products
- track their own orders
- receive payments automatically

while the **platform administrator maintains full control of the ecosystem**.

---

# 🏗 System Architecture

The platform follows a modern full-stack architecture optimized for scalability.

```
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

```
Customer → Stripe Checkout → Stripe Connect → Vendor Payout
```

Stripe automatically splits the payment between:

- the platform
- the vendor

---

# 🧰 Tech Stack

## Frontend

- Next.js 14 (App Router)
- React Server Components
- TailwindCSS
- Shadcn UI

## Backend

- Payload CMS
- tRPC API

## Database

- MongoDB

## Payment

- Stripe
- Stripe Connect

## Deployment

- Vercel

---

# 🔥 Features

## 🛍 Customer

Customers can:

- browse products from multiple vendors
- search and filter products
- manage shopping cart
- checkout securely using Stripe
- view order history

---

## 🏪 Vendor

Each vendor operates independently on the platform.

Features include:

- Vendor dashboard
- Product management
- Order tracking
- Revenue monitoring
- Stripe payout integration

---

## 👑 Admin

Platform administrators can:

- manage users
- approve vendors
- monitor products
- maintain marketplace integrity

---

# 📸 Screenshots

Create a folder inside the repository:

```
/screenshots
```

Example structure:

```
screenshots/
 ├── homepage.png
 ├── product-page.png
 └── vendor-dashboard.png
```

Display screenshots in README:

```
![Homepage](./screenshots/homepage.png)

![Product Page](./screenshots/product-page.png)

![Vendor Dashboard](./screenshots/vendor-dashboard.png)
```

---

# ⚙️ Installation

Clone the repository

```
git clone https://github.com/thaison0401/multitenant-ecommerce.git
```

Navigate to project directory

```
cd multitenant-ecommerce
```

Install dependencies

```
npm install
```

Create environment variables

```
.env.local
```

Example configuration

```
MONGODB_URI=
PAYLOAD_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SERVER_URL=
```

Run development server

```
npm run dev
```

Open the application

```
http://localhost:3000
```

---

# 📂 Project Structure

```
multitenant-ecommerce
│
├── app
├── components
├── collections
├── lib
├── utils
├── public
├── styles
└── payload
```

---

# 🔐 Security Features

- Secure Stripe payment integration
- Authentication and authorization
- Role-based access control
- Server-side validation

---

# 📈 Future Improvements

Potential future upgrades:

- Product reviews & ratings
- Vendor analytics dashboard
- Real-time notifications
- Chat system between buyer and vendor
- AI product recommendation
- Microservices architecture

---

# 👨‍💻 Author

**Tran Thai Son**

Information Technology Student  
Passionate about **Full-Stack Development and System Architecture**

GitHub  
https://github.com/thaison0401

---

# ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
