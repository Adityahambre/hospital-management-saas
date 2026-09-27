import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appointments from "./pages/patient/Appointments";
import Home from "./pages/public/Home";
import FindDoctors from "./pages/public/FindDoctors";
import Hospitals from "./pages/public/Hospitals";
import Services from "./pages/public/Services";
import About from "./pages/public/About";
import FindDoctor from "./pages/patient/FindDoctor";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Queue from "./pages/patient/Queue";
import PatientLayout from "./layouts/PatientLayout";
import PatientDashboard from "./pages/patient/PatientDashboard";
import HealthRecords from "./pages/patient/HealthRecords";
import Prescriptions from "./pages/patient/Prescriptions";
import Payments from "./pages/patient/Payments";
import Profile from "./pages/patient/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public website */}
        <Route path="/" element={<Home />} />
        <Route path="/find-doctors" element={<FindDoctors />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Patient portal */}
      <Route path="/patient" element={<PatientLayout />}>
  <Route index element={<PatientDashboard />} />
  <Route path="appointments" element={<Appointments />} />
  <Route path="find-doctor" element={<FindDoctor />} />
  <Route path="queue" element={<Queue />} />
  <Route path="records" element={<HealthRecords />} />
  <Route path="prescriptions" element={<Prescriptions />} />
  <Route path="payments" element={<Payments />} />
  <Route path="profile" element={<Profile />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;