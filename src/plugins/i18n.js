import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "../constants/translations";

void i18n.use(initReactI18next).init({
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources,
  ns: ["translations"],
});

i18n.languages = ["en", "de", "es", "fr"];

export default i18n;
