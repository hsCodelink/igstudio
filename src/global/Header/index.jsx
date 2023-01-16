import React from "react";
import style from "../Header/Header.module.css";

const Header = ({ content: { logo } }) => {
  return (
    <header className={style.header}>
      <nav className="container">
        <div className={style.mainNav}>
          <div className={style.logo}>
            <img src={logo} />
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
    </header>
  );
};

export default Header;
