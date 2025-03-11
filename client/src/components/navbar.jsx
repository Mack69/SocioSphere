import React from 'react';
import { Link } from "react-router-dom";
import "../CSS/navbar.css";

const Navbar = () => {
    return (
      <header className="navbar">
        <div className="logo">SocioSpehere</div>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/booking">Bookings</Link>
          <Link to="/event">Events</Link>
          <Link to="/complaint">Complaints</Link>
          <Link to="/payment">Payments</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>
    );
  };
  
  export default Navbar;