import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";
import Complaint from "./pages/Complaint";
import Event from "./pages/Event";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile"; 
import Contact from "./pages/Contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  // Show Navbar on all pages except Login
  const showNavbar = !["/Login","/contact","/"].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/event" element={<Event />} />
        <Route path="/complaint" element={<Complaint />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;