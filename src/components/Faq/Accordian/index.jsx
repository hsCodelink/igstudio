import style from "../Accordian/Accordion.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { RiSubtractFill } from "react-icons/ri";

const AccordionSection = ({ show, handleToggle, title, details }) => {
  return (
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
          <p className="content"> {details}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
