import React from "react";
import style from "../Banner/Banner.module.css";

const Banner = ({ content: { massage_icon, home_banner } }) => {
  return (
    <div className={style.bannerBg}>
    <div className="container">
      <div className={style.mainBanner}>
        <div className={style.leftBannerSection}>
          <div className={style.heading}>
            <h1>
              You don’t have to
              <span> Fight them Alone.</span>
            </h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <form className={style.formEmail}>
            <img src={massage_icon}></img>
            <input type="email" placeholder="Enter your email address" />
            <button>Let's Talk</button>
          </form>
        </div>
        <div className={style.rightBannerSection}>
          <img src={home_banner}></img>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
