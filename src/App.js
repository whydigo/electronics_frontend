import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Header/Menu";
import MainPage from "./Pages/MainPage";
import AboutUs from "./components/Services/ServicesItems/AboutUs";
import Requisites from "./components/Services/ServicesItems/Requisites";
import Contacts from "./components/Services/ServicesItems/Contacts";
import PostProducts from "./components/Admin/PostProducts/PostProducts";
import SignUp from "./components/Authorization/SignUp";
import SignIn from "./components/Authorization/SignIn";
import ProfilePage from "./Pages/ProfilePage";
import CartPage from "./Pages/CartPage";
import ProductPage from "./Pages/ProductPage";
import ProductsPage from "./Pages/ProductsPage";

function App() {
  const [text, setText] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const token = localStorage.getItem("token");

  return (
    <div className="App">
      <Header
        openModal={openModal}
        setOpenModal={setOpenModal}
        text={text}
        setText={setText}
      />
      <Menu setOpenModal={setOpenModal} openModal={openModal} />
      <Routes>
        <Route path="/" element={<MainPage text={text} />} />
        <Route path="/category/:id" element={<ProductsPage text={text} />} />
        <Route path="/services/about-us" element={<AboutUs />} />
        <Route path="/services/rekvizity" element={<Requisites />} />
        <Route path="/services/contacts" element={<Contacts />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/admin/products/:id" element={<PostProducts />} />
        {token ? (
          <>
            <Route path="/register" element={<Navigate to="/" />} />
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/basket" element={<CartPage />} />
          </>
        ) : (
          <>
            <Route path="/register" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/profile" element={<Navigate to="/" />} />
            <Route path="/basket" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
