import React from "react";
import { card } from "../../shared";
import style from "../Succsess/Success.module.css";
import Cards from "./Card";

const Success = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainSuccessSection}>
          <div className={style.heading}>
            <h3>Why Choose us?</h3>
          </div>
          <div>
            <div className={style.mainCard}>
              {card.map((item, index) => {
                return <Cards content={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
