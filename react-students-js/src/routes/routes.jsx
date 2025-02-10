import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Product from "../pages/Product";
import ContactDetail from "../pages/ContactDetail";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact/:id" element={<ContactDetail />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
};

export default AppRoutes;
