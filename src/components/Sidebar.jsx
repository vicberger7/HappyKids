// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import css from "./Sidebar.module.css";
import logo from "../assets/images/HappyKidsLogo.png";
import { useTranslation } from "react-i18next";

export default function Sidebar() {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "ua" ? "en" : "ua";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={css.menu}>
      <div
        className={css.logo}
        style={{
          cursor: "pointer",
        }}
      >
        <NavLink to="/">
          <img src={logo} alt="Happy Kids Logo" />
        </NavLink>
      </div>
      <nav className={css.nav}>
        <ul className={css.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.red : ""}`
              }
            >
              {t("nav.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.orange : ""}`
              }
            >
              {t("nav.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.yellow : ""}`
              }
            >
              {t("nav.services")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-menu"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.green : ""}`
              }
            >
              {t("nav.food-menu")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.lightblue : ""}`
              }
            >
              {t("nav.gallery")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.blue : ""}`
              }
            >
              {t("nav.career")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${css.link} ${isActive ? css.indigo : ""}`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={toggleLang} className={css.langToggle}>
        {i18n.language === "ua" ? "EN" : "UA"}
      </button>
    </div>
  );
}
