import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/Authorization/SignIn";
import SignUp from "./components/Authorization/SignUp";
import Service from "./components/Services/Service";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/services" element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
