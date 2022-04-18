import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../templates/frontend/images/logo.png"

export default function Navbar() {
  const [showSubMenu, setSubMenu] = useState(false);

  return (
    <div className="navbar">
      <NavLink to="/">
        <img
          className="navbar__logo"
          src={logo}
          alt="Hariart"
        />
      </NavLink>
      <div className="navbar-menu">
        <div className="navbar-menu--navigation">
          <NavLink to="/" className="navbar__link">
            Home
          </NavLink>
          <div
            onMouseOver={() => {
              setSubMenu(true);
            }}
            onMouseLeave={() => setSubMenu(false)}
          >
            <NavLink
              to="/paintings"
              className={() =>
                "navbar__link".concat(
                  [
                    "/window-to-another-world",
                    "/vedic-art",
                    "/landscapes",
                    "/modular",
                  ].includes(useLocation().pathname)
                    ? " active"
                    : ""
                )
              }
            >
              Paintings
            </NavLink>
            {showSubMenu && (
              <div className="navbar-menu__submenu--outter">
                <div className="navbar-menu__submenu--inner">
                  <NavLink
                    to="/window-to-another-world"
                    className="submenu__link"
                  >
                    Window to another world
                  </NavLink>
                  <NavLink to="/vedic-art" className="submenu__link">
                    Vedic Art
                  </NavLink>
                  <NavLink to="/landscapes" className="submenu__link">
                    Landscapes
                  </NavLink>
                  <NavLink to="/modular" className="submenu__link">
                    Modular
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/order" className="navbar__link">
            Order
          </NavLink>
          <NavLink to="/authors" className="navbar__link">
            About us
          </NavLink>
          <NavLink to="/contacts" className="navbar__link">
            Contacts
          </NavLink>
        </div>
        <div className="navbar-menu--languages">
          <NavLink to="/en" className="navbar__link">
            EN
          </NavLink>
          <NavLink to="/ru" className="navbar__link">
            RU
          </NavLink>
          <NavLink to="/lt" className="navbar__link">
            LT
          </NavLink>
        </div>
      </div>
    </div>
  );
}
