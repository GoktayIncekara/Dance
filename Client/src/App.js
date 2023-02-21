import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/auth-context";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./pages/MainPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import SchoolsPage from "./pages/SchoolsPage";
import SchoolAddPage from "./pages/SchoolAddPage";
import Footer from "./components/Footer/Footer";
import SchoolPage from "./pages/SchoolPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/okullar" element={<SchoolsPage />} />
        <Route path="/okullar/:id" element={<SchoolPage />} />
        <Route path="/okul_ekle" element={<SchoolAddPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
