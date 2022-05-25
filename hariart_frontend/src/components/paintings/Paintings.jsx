import React from "react";
import { NavLink } from "react-router-dom";
import "./Paintings.css";
import Footer from "../footer/Footer";
import modular from "../../../templates/frontend/images/modular.jpg";
import window from "../../../templates/frontend/images/window-to-another-world.jpg";
import vedic_art from "../../../templates/frontend/images/vedic-art.jpg";
import landscapes from "../../../templates/frontend/images/landscapes.jpg";
import { useTranslation } from "react-i18next";

export default function Paintings() {
  const { t } = useTranslation();

  return (
    <>
      <div className="paintings">
        <NavLink className="painting" to="/product-category/modular">
          <img className="painting__picture" src={modular} alt="Modular" />
          <div className="painting__title">{t("paintings.modular")}</div>
        </NavLink>
        <NavLink
          className="painting"
          to="/product-category/window-to-another-world"
        >
          <img
            className="painting__picture"
            src={window}
            alt="Window to another world"
          />
          <div className="painting__title">
            {t("paintings.window-to-another-world")}
          </div>
        </NavLink>
        <NavLink className="painting" to="/product-category/vedic-art">
          <img className="painting__picture" src={vedic_art} alt="Vedic Art" />
          <div className="painting__title">{t("paintings.vedic-art")}</div>
        </NavLink>
        <NavLink className="painting" to="/product-category/landscapes">
          <img
            className="painting__picture"
            src={landscapes}
            alt="Landscapes"
          />
          <div className="painting__title">{t("paintings.landscapes")}</div>
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
