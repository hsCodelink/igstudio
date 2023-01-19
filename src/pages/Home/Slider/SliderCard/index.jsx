import React from "react";
import style from "../SliderCard/SliderCard.module.css";
import { Images } from "../../../../shared";

const SliderCards = ({ content: { img, name, profession, details } }) => {
  return (
    <div className={style.subCard} id="customSubCard">
      <img src={img}></img>
      <div className={style.tagImage} id="customTagImage">
        <img src={Images.tagimage}></img>
      </div>
      <h5>{name}</h5>
      <h6>{profession}</h6>
      <p>{details}</p>
    </div>
  );
};

export default SliderCards;
