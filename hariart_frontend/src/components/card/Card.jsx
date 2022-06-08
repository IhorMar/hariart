import React from "react";
import "./Card.css";
import picture from "../../../templates/frontend/images/no_image.png";
import { useTranslation } from "react-i18next";

export default function Card({ image, title, onClick }) {
  const { t } = useTranslation();

  return (
    <div className="card" onClick={() => onClick()}>
      <img className="card__image" src={image || picture} alt="No image" />
      <div className="card__info">
        <div className="card__title">{title}</div>
        <button className="card__button">{t("card.button")}</button>
      </div>
    </div>
  );
}
