import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
