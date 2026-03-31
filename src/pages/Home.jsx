import css from "./Home.module.css";
import { useTranslation } from "react-i18next";

import happyKids from "../assets/images/happyKids.png";
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className={css.homeContainer}>
      <img className={css.image} src={happyKids} alt="happyKids" />
      <h1 className={css.title}>{t("home.welcome")}</h1>
      <p className={css.description}>{t("home.description")}</p>
    </div>
  );
}
