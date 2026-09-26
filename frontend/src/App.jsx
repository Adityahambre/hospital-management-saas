import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";
import FindDoctors from "./pages/public/FindDoctors";
import Hospitals from "./pages/public/Hospitals";
import Services from "./pages/public/Services";
import About from "./pages/public/About";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/find-doctors" element={<FindDoctors />} />

        <Route path="/hospitals" element={<Hospitals />} />

        <Route path="/services" element={<Services />} />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;