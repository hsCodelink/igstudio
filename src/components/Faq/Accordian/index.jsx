import style from "../Accordian/Accordion.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";
import { useState } from "react";

const AccordionSection = ({ content: { title, details},show,handleToggle}) => {
  return (
    <div className="container">
      <div className={style.mainAccordion}>
        <div className={style.accrodionHeading}>
          <h4>{title}</h4>{" "}
          <button
            onClick={() => {
                handleToggle();
            }}
          >
            {show ? <RiSubtractFill /> : <AiOutlinePlus />}
          </button>
        </div>
        {show && (
          <div className={style.accordionContent}>
            <p> {details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionSection;
