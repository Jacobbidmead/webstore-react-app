import { useState, FC } from "react";
import HomeSwiper from "./HomeSwiper";
import mainImg from "@/imageData/mainImgData";

const MainPage = () => {
  return (
    <>
      <div className="mainpage-container">
        <div className="welcome">Welcome.</div>
        <HomeSwiper images={mainImg} />
        <div></div>
      </div>
    </>
  );
};

export default MainPage;
