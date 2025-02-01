import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:name" element={<ContactDetail />} />
          <Route path="/products" element={<Product />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
