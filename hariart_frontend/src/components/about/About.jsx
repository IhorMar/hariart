import React from "react";
import "./About.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <div className="about">
        <iframe
          className="videoplayer"
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/0-8DOpYoVO0"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Hariart Adv"
        />
        <div className="about-text">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
          <p>{t("about.p4")}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
