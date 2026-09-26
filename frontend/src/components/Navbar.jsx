import { ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <span className="logo-mark">+</span>
          <span>Carely</span>
        </Link>

        <nav className="nav-links">
          <Link to="/find-doctors">
            Find Doctors
          </Link>

          <Link to="/hospitals">
            Hospitals
          </Link>

          <Link to="/services">
            Services
          </Link>

          <Link to="/about">
            About
          </Link>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="login-link">
            Log in
          </Link>

          <Link to="/register" className="nav-button">
            Get started
            <ArrowRight size={17} />
          </Link>
        </div>

        <button className="mobile-menu">
          <Menu size={24} />
        </button>

      </div>
    </header>
  );
}

export default Navbar;