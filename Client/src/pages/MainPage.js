import React from "react";
import Carousel from "../components/Carousel/Carousel";
import Contact from "../components/Contact/Contact";
import global from "../css/global.module.css";

function MainPage() {
  return (
    <div className={global.body_container}>
      <Carousel />
      <Contact />
    </div>
  );
}

export default MainPage;
