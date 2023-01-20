import React from "react";
import style from "./Grid.module.css";

const Images = [
  {
    image: "img1",
  },
  {
    image: "img2",
  },
  {
    image: "img3",
  },
  {
    image: "img4",
  },
  {
    image: "img5",
  },
  {
    image: "img6",
  },
  {
    image: "img7",
  },
  {
    image: "img8",
  },
];
const Grid = () => {
  return (
    <div className="container">
      <div className={style.mainGridSection}>
        <div className={style.gridWrapper}>
          {Images.map((item, index) => {
            return (
              <div className={style.divWrapper} key={index}>
                <div className={style.imageWrapper}>{item.image}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
