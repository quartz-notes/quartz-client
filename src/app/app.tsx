import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import "/src/app/index.css";
import HomePage from "../pages/home-page";
import { ThemeProvider } from "./providers/theme-provider";
import LoginPage from "@/pages/login-page";
import SignUpPage from "@/pages/signup-page";

function App() {
  return (
    <StrictMode>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
