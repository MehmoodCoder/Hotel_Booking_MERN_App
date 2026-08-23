# Hotel_Booking_MERN_App

✨ Full-stack MERN Hotel Booking Engine! 🏨 Search hotels, pick dates 📅 &amp; book rooms seamlessly. Powered by Node.js, Express, MongoDB Atlas, React &amp; Tailwind CSS. Features JWT auth 🔐, 5 CRUD resources, date-availability logic &amp; admin dashboard! ⚡🚀

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
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
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
    "nodemon": "^3.1.14",
    "svix": "^2.0.0"
  }
}

```

**Note:**  Install packages when needed

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
