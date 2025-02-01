import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ContactDetails from "./pages/ContactDetail";
import Product from "./pages/Prodcut";

/**
 * App is the main component that wraps the entire app.
 * It renders the Header and then the content of the app, which is determined by the current route.
 * The content is rendered inside a div with class "container mx-auto p-4"
 */
function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:name" element={<ContactDetails />} />
          <Route path="/products" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
