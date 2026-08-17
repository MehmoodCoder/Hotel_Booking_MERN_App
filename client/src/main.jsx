import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ClerkProvider>
      <App />
    </ClerkProvider>
  </BrowserRouter>,
);
