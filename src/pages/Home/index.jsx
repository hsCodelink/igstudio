import React from "react";
import Introduction from "../../components/Introduction";
import Success from "../../components/Succsess";
import Header from "../../global/Header";
import { card, Images } from "../../shared";
import style from "../Home/Home.module.css";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <div className={style.bannerBg}>
        <Header content={Images} />
        <Banner content={Images} />
      </div>
      <div>
        <section>
          <Introduction />
          <Success/>
        </section>
      </div>
    </div>
  );
};

export default Home;
