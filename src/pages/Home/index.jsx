import React from "react";
import Introduction from "../../components/Introduction";
import Practices from "../../components/Practices";
import Success from "../../components/Succsess";
import Header from "../../global/Header";
import { card, clients, Images } from "../../shared";
import style from "../Home/Home.module.css";
import Banner from "./Banner";
import ClientsSlider from "./Slider";

const Home = () => {
  return (
    <div>
      <Header content={Images} />
      <main>
        <Banner content={Images} />
        <Introduction />
        <Success/>
        <Practices content={Images}/>
        <ClientsSlider content={clients}/>
      </main>
    </div>
  );
};

export default Home;
