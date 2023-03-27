import React from "react";
import mainImg from "@/imageData/mainImgData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css";

const HomeSwiper = () => {
  return (
    <>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {mainImg.map((el, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={el} alt="" className="swiper-slide-image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HomeSwiper;
