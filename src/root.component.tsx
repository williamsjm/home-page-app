import React, { useEffect } from "react";
import i18n from "../i18nConfig"; // Asegúrate de corregir la ruta
import { useTranslation } from "react-i18next";
import HomePage from "./components/Home-page/HomePage";

export default function Root(props) {
  const { i18n } = useTranslation();

  useEffect(() => {
    function updateLanguage(event) {
      i18n.changeLanguage(event.detail);
    }

    window.addEventListener("set-language", updateLanguage);

    return () => {
      window.removeEventListener("set-language", updateLanguage);
    };
  }, [i18n.language]);

  return <HomePage />;
}
