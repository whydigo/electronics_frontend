import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import Service from "./components/Services/Service";
import Header from "./components/Header/Header";
import ServiceSaleRule from "./components/Services/ServicesItems/ServiceSaleRule";
import ServiceLocation from "./components/Services/ServicesItems/ServiceLocation";
import ServiceReturn from "./components/Services/ServicesItems/ServiceReturn";
import ServiceRefund from "./components/Services/ServicesItems/ServiceRefund";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/services" element={<Service />} />

        <Route
          path="/services/pravila-prodazhi"
          element={<ServiceSaleRule />}
        />
        <Route path="/services/location" element={<ServiceLocation />} />
        <Route path="/services/vozvrat-tovara" element={<ServiceReturn />} />
        <Route path="/services/vozvrat-denezhnyh-sredstv" element={<ServiceRefund />} />
      </Routes>
    </div>
  );
}

export default App;
