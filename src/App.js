import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Header from "./Component/layoutes/Header";
import Footer from "./Component/layoutes/Footer";
import Shop from "./Component/Shop";
import ShopDetails from "./Component/ShopDetails";
import ProductDetails from "./Component/Product/ProductDetails";
import Cart from "./Component/Cart/Cart";
import Registration from "./Component/User/Registration";
import Login from "./Component/User/Login";
import Profile from "./Component/User/Profile";
import Shipping from "./Component/Cart/Shipping";
import ConfirmOrder from "./Component/Cart/ConfirmOrder.";
import Payment from "./Component/Payment/Payment";
import Checkout from "./Component/Checkout";
import Contact from "./Component/Contact";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetails" element={<ShopDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
