import { Routes, Route, Navigate } from "react-router-dom";
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
import Contacts from "./components/Services/ServicesItems/Contacts";
import Menu from "./components/Header/Menu";
import { useState } from "react";

function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <Header setOpenModal={setOpenModal}/>
      <Menu setOpenModal={setOpenModal} openModal={openModal}/>
      <Contacts />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
