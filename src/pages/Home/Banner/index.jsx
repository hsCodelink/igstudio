import React from "react";
import style from "../Banner/Banner.module.css";
import { Images } from "../../../shared";

const Banner = () => {
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
            <div className={style.paragraphConent}>
              <p className="content">
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
                curabitur sodales conubia ut inceptos faucibus himenaeos tortor
                eget, hac massa gravida arcu interdum proin curae.
              </p>
            </div>
            <form>
              <div className={style.mainFormWrapper}>
                <div className={style.formEmail}>
                  <img src={Images.massage_icon}></img>
                </div>
                <input type="email" placeholder="Enter your email address" />
                <button>Let's Talk</button>
              </div>
            </form>
          </div>
          <div className={style.rightBannerSection}>
            <img src={Images.home_banner}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
