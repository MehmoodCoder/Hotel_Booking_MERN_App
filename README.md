# Hotel_Booking_MERN_App
✨ Full-stack MERN Hotel Booking Engine! 🏨 Search hotels, pick dates 📅 &amp; book rooms seamlessly. Powered by Node.js, Express, MongoDB Atlas, React &amp; Tailwind CSS. Features JWT auth 🔐, 5 CRUD resources, date-availability logic &amp; admin dashboard! ⚡🚀

---

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** package manager
- Basic knowledge of JavaScript

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

**Note:**  Install packages when needed

---

### Installing Tailwind CSS v4 (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

Add plugin to `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
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

### ***Happy coding without chai ! ☕***
