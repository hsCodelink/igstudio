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
        <div className={style.clientName}>
          <h5>{name}</h5>
        </div>
        <div className={style.profession}>
          <h6>{profession}</h6>
        </div>
        <div className={style.paragraphContent}>
          <p className="content">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default SliderCards;
