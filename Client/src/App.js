import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SchoolPage from "./pages/SchoolPage";
import SchoolAddPage from "./pages/SchoolAddPage";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/okullar" element={<SchoolPage />} />
        <Route path="/okul_ekle" element={<SchoolAddPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
