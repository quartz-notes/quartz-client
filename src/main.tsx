import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./views/App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import LoginScreen from "./views/LoginScreen.tsx";
import RegistrationScreen from "./views/RegistrationScreen.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/registration" element={<RegistrationScreen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
