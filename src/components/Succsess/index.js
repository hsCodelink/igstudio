import React from "react";
import { card } from "../../shared";
import style from "../Succsess/Success.module.css";
import Card from "./Card/Card";

const Success = () => {
  return (
    <div className="container">
      <div className={style.mainSuccessSection}>
        <div className={style.heading}>
          <h3>Why Choose us?</h3>
        </div>
        <div>
            <Card content={card}/>
        </div>
      </div>
    </div>
  );
};

export default Success;
