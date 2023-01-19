import React from "react";
import style from "../Header/Header.module.css";
import { Images } from "../../shared";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <nav>
          <div className={style.mainNav}>
            <div className={style.logo}>
              <img src={Images.logo} />
            </div>
            <div className={style.menu}>
              <ul>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Attorneys</a>
                </li>
                <li>
                  <a>Practice Areas</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
              </ul>
            </div>
            <div className={style.contactButton}>
              <button>Contact Us</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
