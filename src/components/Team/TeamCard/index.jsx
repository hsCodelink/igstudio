import React from "react";
import style from "./TeamCard.module.css";

const Card = ({ content: { img, name, details } }) => {
  return (
      <div className={style.mainTeamCard}>
        <div className={style.teamImage}>
          <img src={img}></img>
        </div>
        <div className={style.teamDetails}>
          <h5>{name}</h5>
          <h6>{details}</h6>
        </div>
      </div>
  );
};

export default Card;
