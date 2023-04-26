import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/icons/menu.png";
import heart from "../../../assets/icons/heart.png";

export default function Header({ onSearch: handleSearch }) {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header__content}>
          <div className={styles.catalogSearch}>
            <img
              className={styles.logo}
              onClick={() => navigate("/")}
              src={logo}
              alt="logo"
            />
            <div className={styles.catalog}>
              <button className={styles.catalogBtn}>
                <img
                  className={styles.menuIcon}
                  src={menuIcon}
                  alt="menu-icon"
                />
                <span>Каталог</span>
              </button>
              <div className={styles.catalog__content}>Контент</div>
            </div>
            <div className={styles.input__wrapper}>
              <input
                className={styles.inp}
                type="text"
                placeholder="Искать смартфоны"
                onChange={() => console.log("search")}
                onSearch={handleSearch}
              />
              <button>
                <span>Найти</span>
              </button>
            </div>
          </div>
          <div className={styles.favorites}>
            <div>
              <img src={heart} alt="heart" />
            </div>
            <div className={styles.text}>Избранное</div>
          </div>
          <button className={styles.loginBtn}>
            <span>Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
}
