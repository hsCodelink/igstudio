import React from "react";
import FaqSection from "../../components/Faq";
import Introduction from "../../components/Introduction";
import Practices from "../../components/Practices";
import ContactDetails from "../../components/Subscribe";
import Success from "../../components/Succsess";
import TeamSection from "../../components/Team";
import Footer from "../../global/Footer";
import Header from "../../global/Header";
import {clients, faq, Images, team } from "../../shared";
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
        <TeamSection content={team}/>
        <FaqSection content={faq}/>
        <ContactDetails/>
        <Footer/>
      </main>
    </div>
  );
};

export default Home;
