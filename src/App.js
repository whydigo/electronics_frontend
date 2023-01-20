import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import Service from "./components/Services/Service";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import ServiceSaleRule from "./components/Services/ServicesItems/ServiceSaleRule";
import ServiceLocation from "./components/Services/ServicesItems/ServiceLocation";
import ServiceReturn from "./components/Services/ServicesItems/ServiceReturn";
import ServiceRefund from "./components/Services/ServicesItems/ServiceRefund";
import ServiceOrder from "./components/Services/ServicesItems/ServiceOrder";
import Payment from "./components/Services/ServicesItems/Payment";
import RulesUse from "./components/Services/ServicesItems/RulesUse";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/services" element={<Navigate to="/services/kak-sdelat-zakaz" />} />


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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

 