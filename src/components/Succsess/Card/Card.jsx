import React from "react";
import style from "../Card/Card.module.css";

const Card = ({ content: [{ img, title, discription }] }) => {
  return (
    <div className="container">
      <div className={style.mainCard}>
        <div className={style.subCard}>
          <img src={img}></img>
          <h5>98% Success Rate</h5>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
