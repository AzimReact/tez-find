import React from "react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";
import styles from "./styles.module.scss";
import logo from "../../../assets/logo.png";
import menuIcon from "../../../assets/icons/menu.png";
import heart from "../../../assets/icons/heart.png";
import { Input } from "antd";

export const Header = ({ onSearch: handleSearch }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        onClick={() => navigate("/")}
        src={logo}
        alt="logo"
      />

      <div className={styles.navigation}>
        <div className={styles.catalog}>
          <button className={styles.catalogBtn}>
            <img className={styles.menuIcon} src={menuIcon} alt="menu-icon" />
            <span className="txt3">Каталог</span>
          </button>
          <div className={styles.catalog__content}>Контент</div>
        </div>

        <div className={styles.search__wrapper}>
          <Input
            className={styles.search__input_container}
            placeholder="Введи свой телефон"
            allowClear
            enterButton="Найти"
            size="large"
            onSearch={handleSearch}
          />
          <button>
            <span className="txt3">Найти</span>
          </button>
        </div>
      </div>

      <div className={styles.favorites}>
        <div>
          <img src={heart} alt="heart" />
        </div>
        <span className="txt3">Избранное</span>
      </div>

      <button className={styles.loginBtn}>
        <span className="txt3">Войти</span>
      </button>
    </div>
  );
};
