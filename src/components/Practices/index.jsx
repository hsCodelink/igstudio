import React, { useEffect } from "react";
import style from "../Practices/Practices.module.css";
import { PRACTICES } from "../../shared";

const Practices = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainPracticesSection}>
          <h3 className="heading">Area of Practices</h3>
          <div className={style.mainImageSection}>
            {PRACTICES.map((item, index) => {
              return (
                <div className={style.practicesWrapper} key={index}>
                  <div className={style.imageWrapper}>
                    <img src={item.src}></img>
                  </div>
                  <div className={style.imageHeading}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practices;
