import React from "react";
import style from "../SliderCard/SliderCard.module.css";
import { Images } from "../../../../shared";

const SliderCards = ({ content: { img, name, profession, details } }) => {
  return (
    <div className={style.subCard} id="customSubCard">
      <div className={style.cardImage}>
        <img src={img}></img>
      </div>
      <div className={style.tagImage} id="customTagImage">
        <img src={Images.tagimage}></img>
      </div>
      <div className={style.cardContent}>
        <h5>{name}</h5>
        <h6>{profession}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SliderCards;
