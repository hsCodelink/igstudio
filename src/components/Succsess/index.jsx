import React from "react";
import { successDetails } from "../../shared";
import style from "./Success.module.css";
import Card from "./Card";

const Success = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainSuccessSection}>
          <div className={style.heading}>
            <h3 className="heading">Why Choose us?</h3>
          </div>
          <div>
            <div className={style.mainCard}>
              {successDetails.map((item, index) => (<Card content={item} key={index} />))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
