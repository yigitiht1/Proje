import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="container1">
        <div className="navbar">
          <Link className="navbar-brand text-white" to="/">
            <button type="button" className="navbar-button">
              Anasayfa
            </button>
          </Link>

          <Link className="navbar-brand text-white" to="/about">
            <button type="button" className="navbar-button">
              Hakkımızda
            </button>
          </Link>

          <Link to="/login">
            <button type="button" className="navbar-button">
              Giriş Yap
            </button>
          </Link>

          <Link to="/Kayit Ol">
          <button type="button" className="navbar-button">
              Şimdi Katıl
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
