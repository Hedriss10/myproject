import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes/routes";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto p-4">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
