import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./shared/Navigations/Header";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Footer from "./pages/components/Footer";
import Contact from "./pages/Contact";
import Partner from "./pages/Partner";
import Payment from "./pages/Payment";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

// Redirect => Navigate
