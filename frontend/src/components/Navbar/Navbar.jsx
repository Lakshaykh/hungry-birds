import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="Logo" className="logo" />
      <ul className="navbar-menu">
        {/* Home Link */}
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          Home
        </Link>

        {/* Dropdown for Cities */}
        <div className="dropdown">
          <a href="#explore-menu" onClick={() => { setMenu("menu"); toggleDropdown(); }} className={menu === "menu" ? "active" : ""}>
            Cities
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                {/* Use Link for navigation to Jaipur page */}
                <Link to="/jaipur" onClick={() => setIsDropdownOpen(false)}>
                  <img src={assets.city_1} alt="Jaipur" className="city-image" />
                  Jaipur
                </Link>
              </li>
              <li>
                {/* Use Link for navigation to Delhi page */}
                <Link to="/delhi" onClick={() => setIsDropdownOpen(false)}>
                  <img src={assets.city_3} alt="Delhi" className="city-image" />
                  Delhi
                </Link>
              </li>
              <li>
                {/* Use Link for navigation to Indore page */}
                <Link to="/indore" onClick={() => setIsDropdownOpen(false)}>
                  <img src={assets.city_2} alt="Indore" className="city-image" />
                  Indore
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Other Links */}
        <Link to="/mobile-app" onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>
          Mobile-app
        </Link>
        <Link to="/contact-us" onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>
          Contact us
        </Link>
      </ul>

      {/* Right section of navbar */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search Icon" />
        <div className="navbar-search-icon"></div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
