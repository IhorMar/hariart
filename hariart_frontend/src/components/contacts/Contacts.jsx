import React, { useState } from "react";
import "./Contacts.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const validate = () => {
    if (!name) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (
      !/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(phone)
    ) {
      if (!phone) {
        setPhoneError("contacts.required-field");
      } else {
        setPhoneError("contacts.error-phone");
      }
    } else {
      setPhoneError(false);
    }
    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
        email
      )
    ) {
      if (!email) {
        setEmailError("contacts.required-field");
      } else {
        setEmailError("contacts.error-email");
      }
    } else {
      setEmailError(false);
    }
  };

  return (
    <>
      <div className="contacts">
        <div className="contacts__title">{t("contacts.t1")}</div>
        <div className="contacts__subtitle">info@hariart.org</div>
        <div className="contacts__info">
          <p>
            <strong>Kaushalya devi dasi</strong>
            <a href="mailto:katrusja.ko@gmail.com"> katrusja.ko@gmail.com </a>
            +380502164374 (<em>{t("country.ua")}</em>)
          </p>
          <p>
            <strong>Gagattarini devi dasi </strong>
            <a href="mailto:satila81@gmail.com"> satila81@gmail.com </a>
            +380672494440 (<em>{t("country.ua")}</em>)
          </p>
          <p>
            <strong>Aleksey Mandryko</strong>
            <a href="mailto:manallex@gmail.com"> manallex@gmail.com </a>
            +380931630764 (<em>{t("country.ua")}</em>)
          </p>
          <p>
            <strong>Mukunda Murari </strong>
            <a href="mailto:mukundamuraridas108@gmail.com">
              mukundamuraridas108@gmail.com
            </a>{" "}
            +37065484649 (<em>{t("country.lt")}</em>)
          </p>
          <p>
            <strong>Eugene Akhmetzyanov</strong>
            <a href="mailto:das10816@yandex.ru"> das10816@yandex.ru </a>
            +79655960146 (<em>{t("country.ru")}</em>)
          </p>
          <p>
            <strong>Jurga Saule </strong>
            <a href="mailto:Jurga.Saule.dasi@outlook.com">
              Jurga.Saule.dasi@outlook.com
            </a>{" "}
            +4796863657 (<em>{t("country.nw")}</em>)
          </p>
        </div>
        <div className="contacts__writing">
          <div className="contacts__title">{t("contacts.t2")}</div>
          <div className="contacts__form">
            <div className="personal-info">
              <div className="personal-info__text">
                <input
                  className="input"
                  type="text"
                  placeholder={t("contacts.name")}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                />
                {nameError && (
                  <label className="personal-info__text--error">
                    *{t("contacts.required-field")}*
                  </label>
                )}
              </div>
              <div className="personal-info__text">
                <input
                  className="input"
                  type="text"
                  placeholder={t("contacts.phone")}
                  onChange={(e) => setPhone(e.target.value)}
                  required={true}
                />
                {phoneError && (
                  <label className="personal-info__text--error">
                    *{t(phoneError)}*
                  </label>
                )}
              </div>
              <div className="personal-info__text">
                <input
                  className="input"
                  type="text"
                  placeholder={t("contacts.email")}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
                {emailError && (
                  <label className="personal-info__text--error">
                    *{t(emailError)}*
                  </label>
                )}
              </div>
            </div>
            <textarea
              name="your-message"
              cols="40"
              rows="5"
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid="false"
            />
            <button
              className="submit-form"
              type="submit"
              onClick={() => validate()}
            >
              {t("contacts.send")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
