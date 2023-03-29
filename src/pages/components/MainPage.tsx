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
        <span className="latest-header">Latest</span>
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
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/new-balance-9060-shoes-grey-1_480x_crop_center.jpg?v=1677775137"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/andwanderxSalomonXT-6Shoes-1_1200x_crop_center.progressive.jpg?v=1669296832"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/nike-waffle-one-shoes-summit-white-white-black-orange-1_480x_crop_center.jpg?v=1641891223"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-spiral-shirt-black-white-1_1300x1500_crop_center.progressive.jpg?v=1676295201"
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
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/norse-projects-anton-brushed-flannel-check-shirt-varsity-green-1_480x_crop_center.jpg?v=1666367106"
              alt=""
              className="latest-img"
            />
          </div>
          <div className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/norse-projects-twill-sports-cap-dark-navy-1_5ad3044e-eefc-4ffc-b11a-9c87eca41906_480x_crop_center.jpg?v=1629718580"
              alt=""
              className="latest-img"
            />
          </div>
        </div>
        <div className="salomon-xt-container">
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/files/salomon-xt6-gtx-desktop-banner_1_1200x1800.jpg?v=1672992137"
              alt=""
              className="salomon-xt-img"
            />
          </div>
          <div className="salomon-xt-link">Salomon XT-6 - Shop now</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
