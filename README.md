# 🛒 ShopEase - E-commerce Web Application

<p>
  A full-stack E-commerce web application built as part of the 
  <strong>DevelopersHub Internship Program</strong>. 
  The project features a fully responsive design for both desktop and mobile, 
  dynamic product listings powered by MongoDB, secure user authentication using JWT, 
  cart functionality for customers, and a complete backend built with 
  Node.js and Express.js.
</p>

<hr>

<h2>🚀 Live Demo</h2>

<p>
  <a href="https://ecommerce-backend-design-production-677a.up.railway.app/" target="_blank">
    View Live Project
  </a>
</p>

<hr>

<h2>🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Backend</strong></td>
      <td>Node.js, Express.js</td>
    </tr>
    <tr>
      <td><strong>Database</strong></td>
      <td>MongoDB + Mongoose</td>
    </tr>
    <tr>
      <td><strong>Templating</strong></td>
      <td>EJS (Embedded JavaScript)</td>
    </tr>
    <tr>
      <td><strong>Frontend</strong></td>
      <td>HTML5, CSS3, JavaScript</td>
    </tr>
    <tr>
      <td><strong>Authentication</strong></td>
      <td>JWT + Cookies</td>
    </tr>
    <tr>
      <td><strong>Deployment</strong></td>
      <td>Railway</td>
    </tr>
    <tr>
      <td><strong>Version Control</strong></td>
      <td>Git & GitHub</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📁 Project Structure</h2>

```bash
ecommerce-backend-design/
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Product.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   ├── cartRoutes.js
│   └── productRoutes.js
├── views/
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── add-product.ejs
│   ├── cart.ejs
│   ├── home.ejs
│   ├── product-detail.ejs
│   └── products.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── assets/
│   └── images/
├── app.js
├── seed.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

<hr>

<h2>⚙️ Getting Started</h2>

<h3>📌 Prerequisites</h3>

<p>Make sure you have the following installed:</p>

<ul>
  <li>
    <a href="https://nodejs.org/" target="_blank">Node.js</a> (v18 or above)
  </li>
  <li>
    <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
    or
    <a href="https://www.mongodb.com/cloud/atlas" target="_blank">
      MongoDB Atlas
    </a>
  </li>
  <li>
    <a href="https://git-scm.com/" target="_blank">Git</a>
  </li>
</ul>

<hr>

<h3>📥 Installation</h3>

<h4>1️⃣ Clone the repository</h4>

```bash
git clone https://github.com/AbdulQadir152/ecommerce-backend-design.git
```

<h4>2️⃣ Navigate into the project folder</h4>

```bash
cd ecommerce-backend-design
```

<h4>3️⃣ Install dependencies</h4>

```bash
npm install
```

<h4>4️⃣ Create a <code>.env</code> file in the root directory</h4>

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

<h4>5️⃣ Seed the database with sample products</h4>

```bash
node seed.js
```

<h4>6️⃣ Start the development server</h4>

```bash
npm run dev
```

<h4>7️⃣ Open in browser</h4>

```bash
http://localhost:3000
```

<hr>

<h2>📋 Features</h2>

<ul>
  <li>Fully responsive E-commerce UI for desktop and mobile</li>
  <li>Dynamic product listing using MongoDB</li>
  <li>Product detail pages with database integration</li>
  <li>Server-side product search functionality</li>
  <li>User Signup and Login using JWT authentication</li>
  <li>Protected routes using authentication middleware</li>
  <li>Add Product functionality for admin users</li>
  <li>Cart functionality for customers</li>
  <li>Admin restriction for cart access</li>
  <li>Reusable EJS partials and clean MVC-like structure</li>
  <li>Railway deployment with environment variables</li>
</ul>

<hr>

<h2>📋 Pages & Routes</h2>

<table>
  <thead>
    <tr>
      <th>Route</th>
      <th>Page</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/</code></td>
      <td>Home Page</td>
    </tr>
    <tr>
      <td><code>/products</code></td>
      <td>Product Listing Page</td>
    </tr>
    <tr>
      <td><code>/products/:id</code></td>
      <td>Product Detail Page</td>
    </tr>
    <tr>
      <td><code>/signup</code></td>
      <td>User Signup Page</td>
    </tr>
    <tr>
      <td><code>/login</code></td>
      <td>User Login Page</td>
    </tr>
    <tr>
      <td><code>/add-product</code></td>
      <td>Add Product Page (Admin)</td>
    </tr>
    <tr>
      <td><code>/cart</code></td>
      <td>User Cart Page</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📅 Weekly Progress</h2>

<h3>✅ Week 1 — Project Setup & Static Backend</h3>

<ul>
  <li>Set up Node.js + Express.js server</li>
  <li>Created EJS templates for core pages</li>
  <li>Served static pages using Express routes</li>
  <li>Implemented responsive design using CSS media queries</li>
  <li>Built mobile hamburger menu using vanilla JavaScript</li>
  <li>Organized clean folder structure</li>
  <li>Pushed project to GitHub</li>
</ul>

<h3>✅ Week 2 — Database Integration & Dynamic Content</h3>

<ul>
  <li>Connected MongoDB database using Mongoose</li>
  <li>Created Product schema and database models</li>
  <li>Implemented dynamic product rendering</li>
  <li>Built Product Detail functionality using MongoDB IDs</li>
  <li>Implemented server-side search functionality</li>
  <li>Added environment variable support using dotenv</li>
  <li>Seeded database with sample products</li>
</ul>

<h3>✅ Week 3 — Authentication, Deployment & Cart</h3>

<ul>
  <li>Implemented JWT-based user authentication</li>
  <li>Created Login and Signup functionality</li>
  <li>Built protected routes using middleware</li>
  <li>Added Add Product functionality for admin users</li>
  <li>Implemented customer cart functionality</li>
  <li>Restricted cart access for admin users</li>
  <li>Deployed application on Railway</li>
  <li>Configured production environment variables</li>
</ul>

<hr>

<h2>📦 NPM Scripts</h2>

```bash
npm start
npm run dev
node seed.js
```

<hr>

<h2>🔐 Environment Variables</h2>

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

<p>
  ⚠️ Never commit your <code>.env</code> file.
</p>

<hr>

<h2>🙌 Acknowledgements</h2>

<ul>
  <li>
    <a href="https://developershub.com" target="_blank">
      DevelopersHub
    </a>
  </li>
  <li>
    <a href="https://unsplash.com" target="_blank">
      Unsplash
    </a>
  </li>
  <li>
    <a href="https://www.mongodb.com/" target="_blank">
      MongoDB
    </a>
  </li>
  <li>
    <a href="https://mongoosejs.com/" target="_blank">
      Mongoose
    </a>
  </li>
  <li>
    <a href="https://railway.app/" target="_blank">
      Railway
    </a>
  </li>
</ul>

<hr>

<h2>📄 License</h2>

<p>
  This project is built for educational purposes as part of the 
  DevelopersHub Internship Program.
</p>