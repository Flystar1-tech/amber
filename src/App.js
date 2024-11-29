import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Product from "./components/product";
import Contact from "./components/contact";
import InteractiveGrid from "./components/individuals";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="product" element={<Product />} />
        <Route path="individuals" element={<InteractiveGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
