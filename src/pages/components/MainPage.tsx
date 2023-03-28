import { useState, FC } from "react";
import HomeSwiper from "./HomeSwiper";
import mainImg from "@/imageData/mainImgData";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <div className="welcome"></div>
        <HomeSwiper images={mainImg} />
      </div>
    </>
  );
};

export default MainPage;
