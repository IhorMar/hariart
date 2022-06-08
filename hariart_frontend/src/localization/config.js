import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.languages = ["en", "lt", "ru"];

i18n.use(initReactI18next).init({
  fallbackLng: localStorage.getItem("Lanuage") || "en",
  lng: "en",
  resources: {
    en: {
      translations: require("./locales/en.json"),
    },
    lt: {
      translations: require("./locales/lt.json"),
    },
    ru: {
      translations: require("./locales/ru.json"),
    },
  },
  ns: ["translations"],
  defaultNS: "translations",
});

export default i18n;
