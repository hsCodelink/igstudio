import React from "react";
import style from "../Footer/Footer.module.css";
import {Images} from '../../shared'

const Footer = () => {
  return (
    <footer className={style.bgFooter}>
      <div className="container">
        <div className={style.mainFooterSection}>
          <div className={style.footerWrapper}>
            <div className={style.topRow}>
              <div className={style.footerLogo}>
                <img src={Images.logo}></img>
              </div>
              <div className={style.footerHeader}>
                <ul>
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>Attorneys</a>
                  </li>
                  <li>
                    <a>Practice Areas </a>
                  </li>
                  <li>
                    <a>About Us</a>
                  </li>
                </ul>
              </div>
              <div className={style.footerSocialIcon}>
                <img src={Images.instagram_icon}></img>
                <img src={Images.facebook_icon}></img>
                <img src={Images.twitter_icon}></img>
                <img src={Images.pintrest_icon}></img>
              </div>
            </div>
            <div className={style.copyRightsSection}>
              <div className={style.footerCopyRights}>
                <ul>
                  <li>
                    <a>© 2020 Acme. All right reserved.</a>
                  </li>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
