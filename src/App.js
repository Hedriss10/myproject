import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactDetail from "./pages/ContactDetail";

function App() {
  return (
    <Router>
      <Header />
      <Aside />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/:name" element={<ContactDetail/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;