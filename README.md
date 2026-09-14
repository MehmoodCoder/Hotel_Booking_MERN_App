# Hotel_Booking_MERN_App

✨ Full-stack MERN Hotel Booking Engine! 🏨 Search hotels, pick dates 📅 &amp; book rooms seamlessly. Powered by Node.js, Express, MongoDB Atlas, React &amp; Tailwind CSS. Features JWT auth 🔐, 5 CRUD resources, date-availability logic &amp; admin dashboard! ⚡🚀

---

## 🚀 Features

* **Authentication & User Management:** Secure sign-up, login, and session persistence powered by Clerk.
* **Room Search & Availability:** Real-time room availability verification based on selected check-in and check-out dates.
* **Smart Booking Engine:** Automated multi-night pricing calculation and guest management system.
* **Automated Email Confirmations:** Instant HTML email receipts sent to users upon successful reservation via Nodemailer SMTP.
* **Media Cloud Management:** Seamless image upload, handling, and fast distribution using Cloudinary and Multer.
* **Hotel Owner Dashboard:** Centralized management panel for tracking total revenue, reservation metrics, and active bookings.
* **Responsive Dark UI:** Fully responsive interface built with Tailwind CSS v4 and interactive notification alerts using React Hot Toast.

---

## 🛠️ Tech Stack

* **Frontend:** React 19, Vite, React Router DOM, Tailwind CSS v4, Axios, React Hot Toast, Clerk React
* **Backend:** Node.js, Express.js (v5), Mongoose ODM, Nodemailer, Cloudinary, Multer, Svix, Stripe SDK, CORS, Dotenv, Nodemon, Stripe
* **Database:** MongoDB Atlas
* **Authentication:** Clerk Express & Clerk React
* **Version Control:** Git, GitHub
* **DevOps:** Vercel

---

## ✨ Features

- 🏗️ **Full-Stack MERN Architecture** – Seamless integration connecting a React 19 client to a Node.js & Express 5 REST API server.
- ⚡ **Axios API Integration** – Clean client-side HTTP requests utilizing structured controllers for real-time frontend-backend communication.
- 🔐 **Authentication & Access Control** – Secure session management and role-based access handling powered by Clerk.
- 📅 **Real-Time Booking & Availability** – Automated room availability checking for custom dates with multi-night price calculation.
- 📧 **Automated Email Confirmation** – Dynamic HTML reservation receipts dispatched instantly via Nodemailer SMTP.
- 🖼️ **Cloud Media Pipeline** – Seamless multi-image room uploads and asset delivery powered by Cloudinary and Multer.
- 📊 **Hotel Owner Analytics Dashboard** – Centralized metrics overview tracking total bookings, occupancy, and cumulative revenue.
- 🗄️ **MongoDB & Mongoose Validation** – Structured database schemas, data validation, and persistent cloud storage using MongoDB Atlas.
- 🌐 **Dynamic Client-Side Routing** – Multi-view navigation managed via React Router DOM for explore, room details, and dashboard views.
- 🎨 **Responsive Dark-Themed UI** – Modern interface designed with Tailwind CSS v4 and interactive notification alerts via React Hot Toast.
- ⚙️ **Centralized Environment Vault** – Secure management of sensitive configurations (`MONGODB_URI`, `CLERK_SECRET_KEY`, Cloudinary, and Nodemailer) via `.env` integration.
- ⚡ **Developer Workflow** – Accelerated development loop using Vite on the frontend and hot-reloading tooling on the backend.

---

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of JavaScript & MongoDB

---

# 📦 MERN Stack: Frontend Architecture Setup Guide

This documentation provides a step-by-step guide to setting up a production-ready **Frontend Workspace** for a MERN stack application using **React + Vite**. It covers project initialization, dependency configuration, and local setup—preparing the UI layer to seamlessly connect with an Express/Node.js backend.

## 1. Initialize Vite Project

Run the following command in your terminal:

```bash
npm init vite
```

### During the prompt configuration, fill out the selections exactly like this:

Proceed? y

Project Name: name

Package Name: name

Select a framework: React

Select a variant: JavaScript

Select oxlintrc? Yes

Install with npm? Yes

---

### 💻 How to Run the frontend of the MERN Project Locally

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Project_dir

# create node_modules folder by running this command
npm i

# Start the local development server
npm run dev
```

---

## 2. Installing Core Dependencies for MERN Stack Backend

Run this command inside your project directory to install npm pakages in pakages.json file:

```bash
npm i @clerk/react
npm i react-router-dom
npm i @tailwindcss/vite
npm i react-hot-toast
npm i axios
```

**It automatically Create package.json if not exists. Like**

```json
{
  "name": "client",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@clerk/react": "^6.14.3",
    "@tailwindcss/vite": "^4.3.3",
    "axios": "^1.19.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-hot-toast": "^2.6.0",
    "react-router-dom": "^7.18.2",
    "tailwindcss": "^4.3.3"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/react": "^19.2.17",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^6.0.4",
    "eslint": "^10.8.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.3",
    "globals": "^17.7.0",
    "vite": "^8.2.0"
  }
}

```

**Note:** Install packages when needed

---

### Installing Tailwind CSS v4 (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

Add plugin to `vite.config.js`:

```js
import tailwindcss from "@tailwindcss/vite";

export default {
  plugins: [tailwindcss()],
};
```

Add to `index.css`:

```css
@import "tailwindcss";
```

### Setting Up React Router v7 (via `create-react-router`)

Installed using the official React Router CLI as per [reactrouter.com](https://reactrouter.com):

```bash
npx create-react-router@latest
cd my-project
npm run dev
```

Or add to an existing Vite project:

```bash
npm install react-router-dom
```

### Will add guide how to install and configure clerk

---

# 📦 MERN Stack: Backend Architecture Setup Guide

## 1. Installing Node.js & NPM
Download and install the LTS version from [Node.js Official Site](https://nodejs.org/).
Verify installation in your terminal:
```bash
node -v
npm -v
```

## 2. Installing MongoDB Community Server & Mongosh
1. Download **MongoDB Community Server** from [MongoDB Download Center](https://www.mongodb.com/try/download/community).
2. Download **MongoDB Shell (`mongosh`)** to run CLI database operations.
3. Start the local server daemon:
```bash
# Verify connection using mongosh CLI
mongosh
```

## 3. Setting Up `package.json` with ES Modules
Initialize your Node project inside any project directory:
```bash
npm init
```

### During the prompt configuration, fill out the selections like this:

package name: (name)

version: (1.0.0) 

description: may add
​
entry point: (server.js)​

test command: just enter​

git repository: (https://github.com/username/repo_name.git)

keywords: may add

author: may add

license: (ISC) may be MIT for open source

type: (commonjs) recommended module

Is this OK? (yes) 

---

### 💻 How to Run the backend of the MERN Project Locally  

If you want to pull this project and run it again locally, simply execute these commands:

```bash
# Navigate to the project folder
cd Project_dir

# create node_modules folder by running this command  
npm i

# Start the local development server
npm start
```

---

To enable modern ES6 `import/export` syntax instead of `require()`, open `package.json` and add `"type": "module"`:
```json
{
  "name": "node",
  "version": "1.0.0",
  "bugs": {
    "url": "https://github.com/username/repo/issues"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/repo.git"
  },
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js" // add manually write "nodemon index.js" if installed
  }
}

```

---

## 4. Installing Core Dependencies for MERN Stack Backend
Run this command inside your project directory to install npm pakages in pakages.json file:
```bash
npm i express
npm i mongoose
npm i nodemon
npm i cors
npm i dotenv
npm i cloudinary
npm i svix
npm i multer
npm i @clerk/express
npm i stripe
bpm i nodemailer
```

**It automatically Create package.json if not exists. Like**

```json
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "type": "module",
  "dependencies": {
    "@clerk/express": "^2.1.61",
    "cloudinary": "^2.10.1",
    "cors": "^2.8.6",
    "dotenv": "^17.4.2",
    "express": "^5.2.1",
    "mongoose": "^9.9.3",
    "multer": "^2.2.0",
    "nodemailer": "^10.0.9",
    "nodemon": "^3.1.14",
    "stripe": "^22.6.2",
    "svix": "^2.0.0"
  }
}

```

**Note:**  Install packages when needed

---

## 📚 Modern Full-Stack Learning Resources

### ⚛️ Frontend Framework & Build Tools
- [React Documentation](https://react.dev) — *(Official docs for hooks, state management, and modern component architecture)*
- [Vite Guide](https://vitejs.dev) — *(Ultra-fast frontend build tool and local development server)*
- [React Router Documentation](https://reactrouter.com) — *(Client-side routing, page navigation, and dynamic loaders)*
- [Tailwind CSS Documentation](https://tailwindcss.com) — *(Utility-first CSS framework for rapid UI and responsive styling)*

### 🔑 Authentication & User Management
- [Clerk Documentation](https://clerk.com/docs) — *(Complete user authentication, webhooks, and session management for React & Express)*

### 🐍 Backend & REST APIs
- [FastAPI Documentation](https://fastapi.tiangolo.com) — *(Modern, high-performance Python framework for building REST APIs)*
- [PyJWT Documentation](https://pyjwt.readthedocs.io) — *(JSON Web Tokens for secure backend authentication and authorization)*

### 📁 File Uploads & Cloud Storage
- [Multer Documentation](https://github.com/expressjs/multer) — *(Node.js middleware for handling `multipart/form-data` and file uploads)*
- [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration) — *(Cloud media management service for storing, optimizing, and transforming images)*

### 🍃 Database & Package Management
- [MongoDB Manual](https://www.mongodb.com/docs/) — *(NoSQL document database, aggregation pipelines, and CRUD operations)*
- [PyMongo Documentation](https://pymongo.readthedocs.io) — *(Official Python driver for MongoDB integration)*
- [NPM Documentation](https://docs.npmjs.com) — *(Node package manager for installing frontend dependencies)*

### 🌐 References & General Tutorials
- [W3Schools Tutorials](https://www.w3schools.com) — *(Quick reference guides for JavaScript, Web APIs, and Node.js)*
- [MDN Web Docs](https://developer.mozilla.org) — *(The gold standard documentation for HTML, CSS, JavaScript, and HTTP standards)*

---

## 👤 Author

**MehmoodCoder**

- 🔗 GitHub: [https://github.com/MehmoodCoder](https://github.com/MehmoodCoder)
- 🌐 Portfolio: [My Portfolio Link](https://mh56-portfolio.vercel.app)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome! If you'd like to improve the API, add new features, or optimize database queries, please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

### **_Happy coding without chai ! ☕_**
