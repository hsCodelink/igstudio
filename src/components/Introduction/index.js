import React from "react";
import style from "../Introduction/Introduction.module.css";

const Introduction = () => {
  return (
    <section>
      <div className="container">
        <div className={style.mainIntroSection}>
          <div className={style.leftIntroSection}>
            <h2>Let’s Introduce Ourself</h2>
          </div>
          <div className={style.rightIntroSection}>
            <h4>Criminal Lawyer</h4>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit
              Exercitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
