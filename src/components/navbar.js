import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLoginOpen(false);
  };

  const toggleLogin = () => setLoginOpen(!loginOpen);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/logo2.png" alt="Logo" style={{ height: '40px' }} />
        <NavLink to="/">
          <h6>Huntsman Assets</h6>
        </NavLink>
      </div>

      {/* Hamburger toggle */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label={menuOpen ? "Close menu" : "Open menu"}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Navigation links */}
      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        <ul className="navbar-menu">
          <li>
            <NavLink to="/dealer" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
              Dealer Locator
            </NavLink>
          </li>

          <li>
            <NavLink to="/support-info" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
              Support & Info
            </NavLink>
          </li>

          <li>
            <NavLink to="/website" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
              Websites
            </NavLink>
          </li>

          <li className={`dropdown ${loginOpen ? 'open' : ''}`}>
            <a href="#!" onClick={(e) => { e.preventDefault(); toggleLogin(); }}>
              Login
            </a>
            <ul className="dropdown-menu">
              <li>
                <a href="https://huntsmanopticsau.store.unleashedsoftware.com/login" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  AU
                </a>
              </li>
              <li>
                <a href="https://huntsmanopticsnz.store.unleashedsoftware.com/login" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  NZ
                </a>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMenuOpen(false)}>
              New Updates <FontAwesomeIcon icon={faBell} style={{ marginLeft: '6px' }} />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
