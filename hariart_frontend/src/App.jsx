import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Paintings from "./components/paintings/Paintings";
import Order from "./components/order/Order";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import ScrollToTop from "./components/scroll_to_top/ScrollToTop";
import PaintingsGroup from "./components/paintings_group/Paintings_group";
import PaintingDetails from "./components/painting_details/Painting_details";
import SessionTimeout from "./components/timer/Timer";
import { predefineOrder } from "./reducers/Orders";
import { removeAllOrders } from "./reducers/Orders";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const selected = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(predefineOrder()) }, []);

  return (
    <Router>
      {selected.orders.length > 0 && (
        <SessionTimeout
          onTimeOut={() => {
            localStorage.removeItem("ORDERS");
            dispatch(removeAllOrders());
          }}
        />
      )}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route
          path="/product-category/window-to-another-world"
          element={<PaintingsGroup category="window_world" />}
        />
        <Route
          path="/product-category/vedic-art"
          element={<PaintingsGroup category="vedic" />}
        />
        <Route
          path="/product-category/landscapes"
          element={<PaintingsGroup category="landscapes" />}
        />
        <Route
          path="/product-category/modular"
          element={<PaintingsGroup category="modular" />}
        />
        <Route path="/product/:ref" element={<PaintingDetails />} />
        <Route path="/order" element={<Order />} />
        <Route path="/authors" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
