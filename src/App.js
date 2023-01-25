import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
import Cameras from "./components/Cart/Camera/Cameras";
import Headsets from "./components/Cart/HeadSet/Headsets";
import SmartWatchs from "./components/Cart/Smart-Watch/SmartWatchs";
import MainPage from "./components/Main/MainPage";
import Contacts from "./components/Services/ServicesItems/Contacts";
import Laptops from "./components/Cart/Laptop/Laptops";
import SmartPhones from "./components/Cart/SmatPhone/SmartPhones";
import Tablets from "./components/Cart/Table/Tablets";
import Televisions from "./components/Cart/Television/Televisions";
import PostCamera from "./components/Admin/PostProducts/PostCamera";
import PostLaptop from "./components/Admin/PostProducts/PostLaptop";
import PostHeadset from "./components/Admin/PostProducts/PostHeadset";
import PostSmartphone from "./components/Admin/PostProducts/PostSmartphone";
import PostSmartwatch from "./components/Admin/PostProducts/PostSmartwatch";
import PostTablet from "./components/Admin/PostProducts/PostTablet";
import PostTelevision from "./components/Admin/PostProducts/PostTelevision";
import CameraById from "./components/Cart/Camera/CameraById";
import HeadSetById from "./components/Cart/HeadSet/HeadsetById";
import SmartWatchById from "./components/Cart/Smart-Watch/SmartWatchById";
import LaptopById from "./components/Cart/Laptop/LaptopById";
import SmartPhoneById from "./components/Cart/SmatPhone/SmartPhoneById";
import TabletById from "./components/Cart/Table/TableById";
import TelevisionById from "./components/Cart/Television/TelevisionById";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App">
      <Header setOpenModal={setOpenModal} />
      <Menu setOpenModal={setOpenModal} openModal={openModal} />
      <Routes>
        {/* ------------------------Категории------------------------ */}
        <Route
          path="/category/63cbaae09cfb3fc70c243fce"
          element={<Cameras />}
        />
        <Route
          path="/category/63caaf6db2f72ed28aa640f6"
          element={<SmartWatchs />}
        />
        <Route
          path="/category/63ce643c9288831a7330dc4a"
          element={<Headsets />}
        />
        <Route
          path="/category/63ce9491f74e0891f0e20300"
          element={<Laptops />}
        />
        <Route
          path="/category/63caaf8b48bfffa7fcebe59d"
          element={<SmartPhones />}
        />
        <Route
          path="/category/63ce9096f74e0891f0e202fe"
          element={<Tablets />}
        />
        <Route
          path="/category/63caafc448bfffa7fcebe59f"
          element={<Televisions />}
        />

        {/* ------------------------Авторизация------------------------ */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />

        {/* ------------------------Сервисы------------------------ */}
        <Route
          path="/services"
          element={<Navigate to="/services/kak-sdelat-zakaz" />}
        />
        <Route path="/" element={<MainPage />} />

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
        <Route path="/camera/:id" element={<CameraById />} />
        <Route path="/headset/:id" element={<HeadSetById />} />
        <Route path="/smartwatch/:id" element={<SmartWatchById />} />
        <Route path="/laptop/:id" element={<LaptopById />} />
        <Route path="/smartphone/:id" element={<SmartPhoneById />} />
        <Route path="/tablet/:id" element={<TabletById />} />
        <Route path="/television/:id" element={<TelevisionById />} />

        {/* ------------------------Админ------------------------ */}
        <Route path="/admin/products/camera" element={<PostCamera />} />
        <Route path="/admin/products/laptop" element={<PostLaptop />} />
        <Route path="/admin/products/headset" element={<PostHeadset />} />
        <Route path="/admin/products/smartphone" element={<PostSmartphone />} />
        <Route path="/admin/products/smartwatch" element={<PostSmartwatch />} />
        <Route path="/admin/products/tablet" element={<PostTablet />} />
        <Route path="/admin/products/tv" element={<PostTelevision />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
