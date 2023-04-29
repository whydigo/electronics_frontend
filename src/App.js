import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import ServiceSaleRule from "./components/Services/ServicesItems/ServiceSaleRule";
import ServiceLocation from "./components/Services/ServicesItems/ServiceLocation";
import ServiceReturn from "./components/Services/ServicesItems/ServiceReturn";
import ServiceRefund from "./components/Services/ServicesItems/ServiceRefund";
import ServiceOrder from "./components/Services/ServicesItems/ServiceOrder";
import Payment from "./components/Services/ServicesItems/Payment";
import RulesUse from "./components/Services/ServicesItems/RulesUse";
import AboutUs from "./components/Services/ServicesItems/AboutUs";
import Requisites from "./components/Services/ServicesItems/Requisites";
import Menu from "./components/Header/Menu";
import Products from "./components/Cart/Product/Products";
import MainPage from "./components/Pages/MainPage";
import Contacts from "./components/Services/ServicesItems/Contacts";
import PostProducts from "./components/Admin/PostProducts/PostProducts";
import ProductById from "./components/Cart/Product/ProductById";
import Basket from "./components/Basket/Basket";
import CreditCard from "./components/Basket/CreditCard";
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
        <Route path="/creditcard" element={<CreditCard />} />
        {/* ------------------------Категории------------------------ */}
        <Route path="/category/:id" element={<Products text={text} />} />

        {/* ------------------------Авторизация------------------------ */}

        {token ? (
          <Route path="/register" element={<Navigate to="/" />} />
        ) : (
          <Route path="/register" element={<SignUp />} />
        )}
        {token ? (
          <Route path="/login" element={<Navigate to="/" />} />
        ) : (
          <Route path="/login" element={<SignIn />} />
        )}

        {/* ------------------------Сервисы------------------------ */}
        <Route
          path="/services"
          element={<Navigate to="/services/kak-sdelat-zakaz" />}
        />
        <Route path="/" element={<MainPage text={text} />} />

        <Route
          path="/services"
          element={<Navigate to="/services/kak-sdelat-zakaz" />}
        />
        <Route
          path="/services/pravila-prodazhi"
          element={<ServiceSaleRule />}
        />
        <Route path="/services/location" element={<ServiceLocation />} />
        <Route path="/services/vozvrat-tovara" element={<ServiceReturn />} />
        <Route
          path="/services/vozvrat-denezhnyh-sredstv"
          element={<ServiceRefund />}
        />
        <Route path="/services/kak-sdelat-zakaz" element={<ServiceOrder />} />
        <Route path="/services/sposob-oplati" element={<Payment />} />
        <Route
          path="/services/pravila-polzovaniya-torgovoy-ploshchadkoy"
          element={<RulesUse />}
        />
        <Route path="/services/about-us" element={<AboutUs />} />
        <Route path="/services/rekvizity" element={<Requisites />} />
        <Route path="/services/contacts" element={<Contacts />} />

        {/* ------------------------Карты------------------------ */}
        <Route path="/product/:id" element={<ProductById />} />

        {/* ------------------------Админ------------------------ */}
        <Route path="/admin/products/:id" element={<PostProducts />} />

        {token ? (
          <Route path="/profile" element={<Profile />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/" />} />
        )}
        {token ? (
          <Route path="/basket" element={<Basket />} />
        ) : (
          <Route path="/basket" element={<Navigate to="/" />} />
        )}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
