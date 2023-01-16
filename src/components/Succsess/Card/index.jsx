import React from "react";
import style from "../Card/Card.module.css";

const Cards = ({ content: {img, rate, title, discription } }) => {
  return (
    <div className="container">
      <div className={style.subCard}>
        <img src={img}></img>
        <h5>
          {rate}
          {title}
        </h5>
        <p>{discription}</p>
        <button>Read More</button>
      </div>
    </div>
  );
};

export default Cards;
