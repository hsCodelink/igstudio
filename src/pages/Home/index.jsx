import React from "react";
import Faq from "../../components/Faq";
import Grid from "../../components/Grid";
import Introduction from "../../components/Introduction";
import Practices from "../../components/Practices";
import ContactDetails from "../../components/Subscribe";
import Success from "../../components/Succsess";
import Team from "../../components/Team";
import Banner from "./Banner";
import Slider from "./Slider";

const Home = () => {
  return (
    <>
      <Banner />
      <Grid/>
      <Introduction />
      <Success />
      <Practices />
      <Slider />
      <Team />
      <Faq />
      <ContactDetails />
    </>
  );
};

export default Home;
