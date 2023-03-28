import { useState, FC } from "react";
import HomeSwiper from "./HomeSwiper";
import mainImg from "@/imageData/mainImgData";

const MainPage = () => {
  return (
    <>
      <div className="mainpage-container">
        <div className="welcome">
          <span className="welcome-message">Welcome.</span>
        </div>
        <HomeSwiper images={mainImg} />
        <div className="latest-container">
          <div className="latest-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/nike-sb-janoski-og_-shoes-alabaster-alabaster-chile-red-1_600x696_crop_center.progressive.jpg?v=1679483172"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/nike-sb-janoski-og_-shoes-alabaster-alabaster-chile-red-1_600x696_crop_center.progressive.jpg?v=1679483172"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
