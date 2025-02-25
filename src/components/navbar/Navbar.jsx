import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 920);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 920);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <h1>
        Pa<span className="green">yy</span>ed
        </h1>
        {/* Hamburger Menu */}
        {isMobile && (
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
          </div>
        )}
      </div>

      {/* Navigation Links */}
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <Link className="navlist-border-icon" to="/">
          HOME
        </Link>
        <Link className="navlist-border-icon" to="/about">
          ABOUT US
        </Link>
        <Link className="navlist-border-icon" to="/contact">
          CONTACT
        </Link>
        <Link className="navlist-border-icon" to="/services">
          SERVICES
        </Link>
      </div>

      {/* Auth Buttons */}
      <div className="auth-buttons">
        <Link
            style={{
              textDecoration: "none",
            }}
            to="/login"
          >
        <button className="login-btn ">
            LOGIN
        </button>
      </Link>
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/signup"
          >
        <button className="signup-btn">
            SIGN UP
        </button>
       </Link>
      </div>
    </nav>
  );
};

export default Navbar;
