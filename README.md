# 🛒 ShopEase - E-commerce Web Application

<p>
  A full-stack eCommerce web application built as part of the 
  <strong>DevelopersHub Internship Program</strong>. 
  The project features a fully responsive design for both desktop and mobile, 
  dynamic product listings powered by MongoDB, and a complete backend built with 
  Node.js and Express.js.
</p>

<hr>

<h2>🚀 Live Demo</h2>

<p><em>Coming in Week 3 after deployment</em></p>

<hr>

<h2>📸 Screenshots</h2>

<p><em>Will be added soon</em></p>

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
      <td>JWT (Week 3)</td>
    </tr>
    <tr>
      <td><strong>Deployment</strong></td>
      <td>Render / Vercel (Week 3)</td>
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
├── models/
│   └── Product.js              # MongoDB Product schema
├── routes/
│   └── index.js                # All application routes
├── views/
│   ├── partials/
│   │   ├── header.ejs          # Shared header
│   │   └── footer.ejs          # Shared footer
│   ├── home.ejs                # Home page
│   ├── products.ejs            # Product listing page with search
│   └── product-detail.ejs      # Product detail page
├── public/
│   ├── css/
│   │   └── style.css           # Global styles + media queries
│   └── js/
│       └── main.js             # Client-side JavaScript
├── assets/
│   └── images/                 # Static image assets
├── app.js                      # Express server entry point
├── seed.js                     # Database seeder script
├── .env                        # Environment variables (not committed)
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
    <a href="https://www.mongodb.com/" target="_blank">MongoDB</a> (local) 
    or a 
    <a href="https://www.mongodb.com/cloud/atlas" target="_blank">
      MongoDB Atlas
    </a> account
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
MONGODB_URI=mongodb://localhost:27017/shopease
PORT=3000
```

<p>
  If using MongoDB Atlas, replace the URI with your Atlas connection string.
</p>

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
      <td><code>/products?search=query</code></td>
      <td>Search Results</td>
    </tr>
    <tr>
      <td><code>/products/:id</code></td>
      <td>Product Detail Page</td>
    </tr>
    <tr>
      <td><code>/login</code></td>
      <td>Login <em>(Week 3)</em></td>
    </tr>
    <tr>
      <td><code>/signup</code></td>
      <td>Signup <em>(Week 3)</em></td>
    </tr>
  </tbody>
</table>

<hr>

<h2>📅 Weekly Progress</h2>

<h3>✅ Week 1 — Project Setup & Static Backend</h3>

<ul>
  <li>Set up Node.js + Express.js server</li>
  <li>
    Created EJS templates for Home, Product Listing, and Product Detail pages
  </li>
  <li>
    Served static pages through Express routes 
    (<code>/</code>, <code>/products</code>, <code>/products/:id</code>)
  </li>
  <li>
    Implemented fully responsive design using CSS media queries
  </li>
  <li>
    Built mobile hamburger menu with vanilla JavaScript
  </li>
  <li>
    Organized clean folder structure (routes, views, public, assets)
  </li>
  <li>Pushed code to GitHub</li>
</ul>

<h3>✅ Week 2 — Database Integration & Dynamic Content</h3>

<ul>
  <li>Connected MongoDB database using Mongoose</li>
  <li>
    Created <code>Product</code> schema with fields:
    name, price, category, image, description, and stock
  </li>
  <li>
    Built <code>seed.js</code> to populate the database with sample products
  </li>
  <li>
    Home page dynamically renders featured products from the database
  </li>
  <li>
    Product Listing page fetches and displays all products in a grid layout
  </li>
  <li>
    Product Detail page fetches a single product by MongoDB <code>_id</code>
  </li>
  <li>
    Implemented server-side search (filter by name or category via query string)
  </li>
  <li>
    Added <code>.env</code> support using <code>dotenv</code> for secure configuration
  </li>
  <li>Pushed updated code to GitHub</li>
</ul>

<h3>⏳ Week 3 — Auth, Pagination & Deployment (Upcoming)</h3>

<ul>
  <li>User authentication using JWT</li>
  <li>Login and Signup pages</li>
  <li>Add product functionality via form</li>
  <li>Pagination for the Product Listing page</li>
  <li>Deploy to Render or Vercel with live URL</li>
</ul>

<hr>

<h2>📦 NPM Scripts</h2>

```bash
npm start        # Start production server
npm run dev      # Start development server with nodemon
node seed.js     # Seed the database with sample products
```

<hr>

<h2>🔐 Environment Variables</h2>

<p>
  Create a <code>.env</code> file in the root of the project with the following:
</p>

```env
MONGODB_URI=mongodb://localhost:27017/shopease
PORT=3000
```

<p>
  ⚠️ Never commit your <code>.env</code> file. 
  It is already listed in <code>.gitignore</code>.
</p>

<hr>

<h2>🙌 Acknowledgements</h2>

<ul>
  <li>
    <a href="https://developershub.com" target="_blank">
      DevelopersHub
    </a> — Internship Program
  </li>
  <li>
    <a href="https://unsplash.com" target="_blank">
      Unsplash
    </a> — Product images used for demo purposes
  </li>
  <li>
    <a href="https://www.mongodb.com/" target="_blank">
      MongoDB
    </a> — Database
  </li>
  <li>
    <a href="https://mongoosejs.com/" target="_blank">
      Mongoose
    </a> — MongoDB ODM for Node.js
  </li>
</ul>

<hr>

<h2>📄 License</h2>

<p>
  This project is for educational purposes as part of an internship program.
</p>