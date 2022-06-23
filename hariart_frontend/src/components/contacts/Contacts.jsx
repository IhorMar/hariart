import React, { useState } from "react";
import "./Contacts.css";
import Footer from "../footer/Footer";
import { useTranslation } from "react-i18next";
import ContactUsHelper from "../../services/handlers/ContactUs";
import { useEffect } from "react";

export default function Contacts() {
  const [contacts, setContacts]= useState();
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
    return !(emailError || phoneError || nameError);
  };

  const onSubmit = () => {
    if (validate()) {
      ContactUsHelper.sendContactUs({
        phone: phone,
        email: email,
        name: name,
        message: message,
        language: localStorage.getItem("Lanuage")
      });
    }
  };

  useEffect(() => { ContactUsHelper.getContacts(setContacts) }, [])

  return (
    <>
      <div className="contacts">
        <div className="contacts__title">{t("contacts.t1")}</div>
        <div className="contacts__subtitle">info@hariart.org</div>
        <div className="contacts__info">
          {contacts && contacts.map((contact, i) => (
            <p key={i}>
              <strong>{contact.fullname}</strong>
              <a href={`mailto:${contact.email}`}> {contact.email} </a>
               {contact.phone} (<em>{t(`${contact.country}`)}</em>)
            </p>
          ))}
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
              onClick={() => onSubmit()}
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
