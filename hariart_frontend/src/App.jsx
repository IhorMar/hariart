import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Paintings from "./components/paintings/Paintings";
import Order from "./components/order/Order";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";
import PaintingsGroup from "./components/paintings_group/Paintings_group";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route
          path="/product-category/window-to-another-world"
          element={<PaintingsGroup category="window_world" />}
        />
        <Route path="/product-category/vedic-art" element={<PaintingsGroup category="vedic" />} />
        <Route path="/product-category/landscapes" element={<PaintingsGroup category="landscapes" />} />
        <Route path="/product-category/modular" element={<PaintingsGroup category="modular" />} />
        <Route path="/order" element={<Order />} />
        <Route path="/authors" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
