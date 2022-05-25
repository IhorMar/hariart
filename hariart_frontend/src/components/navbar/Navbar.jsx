import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../templates/frontend/images/logo.png";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [showSubMenu, setSubMenu] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="navbar">
      <NavLink to="/">
        <img className="navbar__logo" src={logo} alt="Hariart" />
      </NavLink>
      <div className="navbar-menu">
        <div className="navbar-menu--navigation">
          <NavLink to="/" className="navbar__link">
            {t("navbar.home")}
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
              {t("navbar.paintings")}
            </NavLink>
            {showSubMenu && (
              <div className="navbar-menu__submenu--outter">
                <div className="navbar-menu__submenu--inner">
                  <NavLink
                    to="/product-category/window-to-another-world"
                    className="submenu__link"
                  >
                    {t("navbar.window-to-another-world")}
                  </NavLink>
                  <NavLink
                    to="/product-category/vedic-art"
                    className="submenu__link"
                  >
                    {t("navbar.vedic-art")}
                  </NavLink>
                  <NavLink
                    to="/product-category/landscapes"
                    className="submenu__link"
                  >
                    {t("navbar.landscapes")}
                  </NavLink>
                  <NavLink
                    to="/product-category/modular"
                    className="submenu__link"
                  >
                    {t("navbar.modular")}
                  </NavLink>
                </div>
              </div>
            )}
          </div>
          <NavLink to="/order" className="navbar__link">
            {t("navbar.order")}
          </NavLink>
          <NavLink to="/authors" className="navbar__link">
            {t("navbar.about-us")}
          </NavLink>
          <NavLink to="/contacts" className="navbar__link">
            {t("navbar.contacts")}
          </NavLink>
        </div>
        <div className="navbar-menu--languages">
          <div
            className="navbar__link"
            onClick={() => {
              localStorage.setItem("Lanuage", "en");
              i18n.changeLanguage("en");
            }}
          >
            EN
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              localStorage.setItem("Lanuage", "ru");
              i18n.changeLanguage("ru");
            }}
          >
            RU
          </div>
          <div
            className="navbar__link"
            onClick={() => {
              localStorage.setItem("Lanuage", "lt");
              i18n.changeLanguage("lt");
            }}
          >
            LT
          </div>
        </div>
      </div>
    </div>
  );
}
