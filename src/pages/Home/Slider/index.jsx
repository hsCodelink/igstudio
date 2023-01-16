import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "../Slider/Slider.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ClientsSlider = ({ content: { client_1, client_2, client_3 } }) => {
  const slider = useRef();
  const next = () => {
    console.log(slider);
    slider.next();
  };
  const prev = () => {
    console.log(slider);
    slider.prev();
  };
  return (
    <section>
      <div className="container">
        <div className={style.mainOwlcarousel}>
          <div className={style.topRow}>
            <h2>What says our happy Clients</h2>
            <div className={style.arrowBtn}>
              <button
                type="button"
                className="owl-prev"
                onClick={() => {
                  prev();
                }}
              >
                <BsArrowLeft />
              </button>
              <button
                type="button"
                className="owl-next"
                onClick={() => {
                  next();
                }}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
          <OwlCarousel
            className="owl-theme"
            dots={false}
            loop
            margin={10}
            nav
            ref={slider}
          >
            <div className="item">
              <img src={client_1}></img>
              <h4>1</h4>
            </div>
            <div className="item">
              <h4>2</h4>
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
            <div className="item">
              <h4>4</h4>
            </div>
            <div className="item">
              <h4>5</h4>
            </div>
            <div className="item">
              <h4>6</h4>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
