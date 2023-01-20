import React from "react";
import style from "../Card/Card.module.css";

const Card = ({ content: { img, rate, title, discription } }) => {
  return (
    <div className={style.subCard}>
      <div className={style.imagaeWrapper}>
        <img src={img}></img>
      </div>
      <div className={style.title}>
        <h5>
          {rate} {title}
        </h5>
      </div>
      <div className={style.paragraphContent}>
        <p className="content">{discription}</p>
      </div>
      <button>Read More</button>
    </div>
  );
};

export default Card;
