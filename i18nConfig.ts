// i18nConfig.ts

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome_message_harry_potter:
        "Welcome to the magical world of Harry Potter",
      welcome_message_rick_morty:
        "Welcome to the strange world of Rick and Morty",
      action_button: "Enter",
    },
  },
  es: {
    translation: {
      welcome_message_harry_potter:
        "Bienvenido al mundo mágico de Harry Potter",
      welcome_message_rick_morty: "Bienvenido al extraño mundo de Rick y Morty",
      action_button: "Entrar",
    },
  },
};

i18n.use(initReactI18next).init({
  resources: resources || {},
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
