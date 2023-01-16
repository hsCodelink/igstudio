import React from "react";
import style from "../Practices/Practices.module.css";
const Practices = ({
  content: {
    business_law_1,
    partnership_law,
    real_estate_law,
    business_law_2,
    landlord_disputes,
    elder_abuse,
  },
}) => {
  const imageText = {
    image1: "BUSINESS LAW",
    image2: "Partnership LAW",
    image3: "REAL ESTATE LAW",
    image4: "BUSINESS LAW",
    image5: "LANDLORD DISPUTES",
    image6: "ELDER ABUSE",
  };
  return (
    <section>
      <div className="container">
        <div className={style.mainPracticesSection}>
          <h3>Area of Practices</h3>
          <div className={style.mainImageSection}>
            <div>
              <img src={business_law_1} className={style.Image1}></img>
              <h5>{imageText.image1}</h5>
            </div>
            <div>
              <img src={partnership_law}></img>
              <h5>{imageText.image2}</h5>
            </div>
            <div>
              <img src={real_estate_law}></img>
              <h5>{imageText.image3}</h5>
            </div>
            <div>
              <img src={business_law_2}></img>
              <h5>{imageText.image4}</h5>
            </div>
            <div>
              <img src={landlord_disputes}></img>
              <h5>{imageText.image5}</h5>
            </div>
            <div>
              <img src={elder_abuse}></img>
              <h5>{imageText.image6}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Practices;
