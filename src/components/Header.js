import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../components/logo.png";
import "./Header.css"; // Import the CSS file

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>
        <span className="navbar-title">EventCity</span>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="navbar-search"
          placeholder="Search Events"
        />
      </div>
      <nav className="navbar-right">
        <Link to="/movies" className="navbar-link">Events</Link>
        <Link to="/admin" className="navbar-link">Admin</Link>
        <Link to="/auth" className="navbar-link">Login</Link>
        {/* Add conditional rendering for Profile/Logout as needed */}
      </nav>
    </header>
  );
};

export default Header;