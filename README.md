# 🛒 Multi-Tenant E-Commerce Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Stripe](https://img.shields.io/badge/Stripe-Payment-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

A modern **multi-vendor marketplace platform** built with **Next.js, Payload CMS, MongoDB, and Stripe Connect**.

This system allows multiple vendors to sell products on the same platform while administrators manage the marketplace centrally.  
The architecture is inspired by real-world platforms like **Amazon, Shopee, and Etsy**.

---

# 🚀 Live Demo

Coming soon / Deploy on Vercel

Example:


https://your-project.vercel.app


---

# ✨ Core Features

## 👤 Customer

- Browse products from multiple vendors
- Search and filter products
- Add products to cart
- Secure checkout with Stripe
- View order history

---

## 🏪 Vendor

- Vendor dashboard
- Add / edit / delete products
- Manage product listings
- Track orders and sales
- Connect Stripe account for payouts

---

## 🛠 Admin

- Manage users and vendors
- Manage product listings
- Control marketplace data
- Monitor system activity

---

# 🧠 Key Concepts

This project demonstrates several modern web development concepts:

### Multi-Tenant Architecture

Each vendor can manage their own products independently within the same system.

### Headless CMS

Payload CMS is used to manage backend logic and content.

### Stripe Connect Integration

Supports automatic revenue splitting between platform and vendors.

### Modern React Architecture

- Next.js App Router
- React Server Components
- API with tRPC

---

# 🏗 System Architecture


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


Customer → Stripe Checkout → Stripe Connect → Vendor Payout


---

# 🧰 Tech Stack

### Frontend

- Next.js
- React
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

# 📸 Screenshots

You can add screenshots inside a `/screenshots` folder.

Example:


screenshots/home.png
screenshots/product.png
screenshots/dashboard.png


Then display them here.

Example:








---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/thaison0401/multitenant-ecommerce.git
cd multitenant-ecommerce

Install dependencies

npm install

Create environment variables

.env.local

Example:

MONGODB_URI=
PAYLOAD_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_SERVER_URL=

Run development server

npm run dev

Open in browser

http://localhost:3000
📂 Project Structure
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
🔐 Security Features

Secure payment processing using Stripe

Authentication and authorization

Server-side validation

Role-based access control

📈 Future Improvements

Possible future upgrades:

Product reviews and ratings

Vendor analytics dashboard

Real-time notifications

Chat between buyers and vendors

Recommendation system

Microservices architecture

👨‍💻 Author

Tran Thai Son

IT Student – Software Engineering

GitHub
https://github.com/thaison0401
