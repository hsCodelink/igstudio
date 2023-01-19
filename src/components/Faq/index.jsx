import React, { useState, useEffect } from "react";
import { faq } from "../../shared";
import style from "../Faq/Faq.module.css";
import AccordionSection from "./Accordian";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section>
      <div className="container">
        <div className={style.mainFaqSection}>
          <div className={style.leftFaqSection}>
            <h2>FAQ</h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.{" "}
            </p>
          </div>
          <div className={style.rightFaqSection}>
            {faq.map((item, index) => {
              return (
                <div key={index} className={style.faq}>
                  <AccordionSection
                    content={item}
                    show={activeIndex === index}
                    handleToggle={() => {
                      setActiveIndex(activeIndex === index ? null : index);
                    }}
                    title={item.title}
                    details={item.details}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
