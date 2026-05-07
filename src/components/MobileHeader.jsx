import { useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./MobileHeader.module.css";
import logo from "../assets/images/HappyKidsLogo.png";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "ua" ? "en" : "ua";
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <header className={css.header}>
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

        <button onClick={toggleLang} className={css.langToggle}>
          {i18n.language === "ua" ? "EN" : "UA"}
        </button>

        <div className={css.socials}>
          <a
            href="https://www.facebook.com/happy.kids.980967"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/happy.kids_2017?igsh=ZzR6eWg3bHZjbDEz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        <div className={css.burger} onClick={() => setOpen(true)}>
          ☰
        </div>
      </header>

      {/* Overlay Menu */}
      <div className={`${css.menu} ${open ? css.open : ""}`}>
        <div className={css.closeWrapper}>
          <button className={css.close} onClick={() => setOpen(false)}>
            ✕
          </button>
        </div>
        <nav>
          <a href="/">{t("nav.home")}</a>
          <a href="/about">{t("nav.about")}</a>
          <a href="/services">{t("nav.services")}</a>
          <a href="/food-menu">{t("nav.food-menu")}</a>
          <a href="/gallery">{t("nav.gallery")}</a>
          <a href="/career">{t("nav.career")}</a>
          <a href="/contact">{t("nav.contact")}</a>
        </nav>
      </div>
    </>
  );
}
