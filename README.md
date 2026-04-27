# 🛒 ShopEase - eCommerce Web Application

A full-stack eCommerce web application built as part of the **DevelopersHub Internship Program**. The project features a fully responsive design for both desktop and mobile, dynamic product listings, and a complete backend powered by Node.js and Express.js.

---

## Live Demo
> Live Demo: Coming in Week 3 (Deployment Phase)

---

## 📸 Screenshots
> Screenshots will be added after UI finalization (Week 2)

---

## 🛠️ Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Backend    | Node.js, Express.js               |
| Database   | MongoDB (integrated in Week 2)    |
| Templating | EJS (Embedded JavaScript)         |
| Frontend   | HTML5, CSS3, JavaScript           |
| Auth       | JWT (integrated in Week 3)        |
| Deployment | Render / Vercel (Week 3)          |
| Version Control | Git & GitHub                 |

---

## 📁 Project Structure
ecommerce-backend-design/
├── routes/
│   └── index.js          # All application routes
├── views/
│   ├── partials/
│   │   ├── header.ejs    # Shared header
│   │   └── footer.ejs    # Shared footer
│   ├── home.ejs          # Home page
│   ├── products.ejs      # Product listing page
│   └── product-detail.ejs # Product detail page
├── public/
│   ├── css/
│   │   └── style.css     # Global styles + media queries
│   └── js/
│       └── main.js       # Client-side JavaScript
├── assets/
│   └── images/           # Static image assets
├── app.js                # Express server entry point
├── package.json
└── .gitignore

---

## ⚙️ Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or above)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository**
```bash
   git clone https://github.com/AbdulQadir152/ecommerce-backend-design.git
```

2. **Navigate into the project folder**
```bash
   cd ecommerce-backend-design
```

3. **Install dependencies**
```bash
   npm install
```

4. **Start the development server**
```bash
   npm run dev
```

5. **Open in browser**
http://localhost:3000

---

## 📋 Pages & Routes

| Route            | Page                  |
|------------------|-----------------------|
| `/`              | Home Page             |
| `/products`      | Product Listing Page  |
| `/products/:id`  | Product Detail Page   |
| `/login`         | Login (Week 3)        |
| `/signup`        | Signup (Week 3)       |

---

## 📅 Weekly Progress

### ✅ Week 1 — Project Setup & Static Backend
- Set up Node.js + Express.js server
- Created EJS templates for Home, Product Listing, and Product Detail pages
- Served static pages through Express routes
- Implemented fully responsive design using CSS media queries
- Mobile hamburger menu implemented
- Pushed to GitHub

### 🔄 Week 2 — Database Integration (In Progress)
- Connect MongoDB database
- Create Products collection with full schema
- Dynamically render products using EJS
- Implement server-side search functionality

### ⏳ Week 3 — Auth, Pagination & Deployment
- User authentication using JWT
- Login and Signup pages
- Add product functionality
- Pagination for product listing
- Deploy to Render/Vercel

---

## 📦 NPM Scripts

```bash
npm start      # Start production server
npm run dev    # Start development server with nodemon
```

---

## 🙌 Acknowledgements
- [DevelopersHub](https://developershub.com) — Internship Program
- [Unsplash](https://unsplash.com) — Product images used for demo purposes

---

## 📄 License
This project is for educational purposes as part of an internship program.