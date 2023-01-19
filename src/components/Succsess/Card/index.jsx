import React from "react";
import style from "../Card/Card.module.css";

const Card = ({ content: { img, rate, title, discription } }) => {
  return (
    <div className={style.subCard}>
      <img src={img}></img>
      <h5>
        {rate} {title}
      </h5>
      <p>{discription}</p>
      <button>Read More</button>
    </div>
  );
};

export default Card;
