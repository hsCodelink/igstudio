import React, { useRef } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import style from "../Slider/Slider.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { clients } from "../../../shared";
import SliderCards from "./SliderCard";

const sliderSetting = {
  items: 3,
  // margin:'2px',
  loop: true,
  // mouseDrag:false,
  // touchDrag:false,
  // pullDrag:false,
  // freeDrag:true,
  center: true,
  // merge:true,
  // autoWidth:true,
  // startPosition:5,
  // nav:true,
  // rewind:false,
  slideBy: 3,
  // dots:true,
  // dotsEach:true,
  // autoplay:true,
  // autoplayTimeout:1000,
  // autoplayHoverPause:true,
  // smartSpeed:300,
  // autoplaySpeed:false,
  // navSpeed:true,
};

const Slider = () => {
  const slider = useRef();
  return (
    <section>
      <div className="container">
        <div className={style.mainOwlcarousel}>
          <div className={style.topRow}>
            <h2 className="heading">What says our happy Clients</h2>
            <div className={style.arrowBtn}>
              <button
                type="button"
                className="owl-prev"
                onClick={() => slider.current.prev()}
              >
                <BsArrowLeft />
              </button>
              <button
                type="button"
                className="owl-next"
                onClick={() => slider.current.next()}
              >
                <BsArrowRight />
              </button>
            </div>
          </div>
          <OwlCarousel
            ref={(c) => (slider.current = c)}
            {...sliderSetting}
            className={style.customSlider}
          >
            {clients.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <SliderCards content={item} />
                </div>
              );
            })}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Slider;
