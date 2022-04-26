import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Paintings from "./components/paintings/Paintings";
import WindowToAnotherWorld from "./components/window_to_another_world/Window_to_another_world";
import VedicArt from "./components/vedic_art/Vedic_art";
import Landscapes from "./components/landscapes/Landscapes";
import Modular from "./components/modular/Modular";
import Order from "./components/order/Order";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route
          path="/product-category/window-to-another-world"
          element={<WindowToAnotherWorld />}
        />
        <Route path="/product-category/vedic-art" element={<VedicArt />} />
        <Route path="/product-category/landscapes" element={<Landscapes />} />
        <Route path="/product-category/modular" element={<Modular />} />
        <Route path="/order" element={<Order />} />
        <Route path="/authors" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
