
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Menu from "./pages/menu/Menu";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Contect_us from "./pages/contect_us/Contect_us";
import Header from "./components/Layouts/Header";
import Addtocart from "./pages/add-to-cart/Addtocart"; // Import Sidebar
import Checkout from "./pages/Checkout/Checkout";
import Login from "./pages/Authontication/Login";
import Profile from "./pages/Authontication/Profile";

function App() {
  return (
    <Router>
      <Addtocart /> {/* Include Sidebar Component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contect_us />} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </Router>
  );
}

export default App;
