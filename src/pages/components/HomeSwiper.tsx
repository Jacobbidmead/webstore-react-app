import { ReactComponentElement, useState } from "react";
import mainImg from "@/imageData/mainImgData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "swiper/css";

interface ImageSliderProps {
  images: string[];
}

const HomeSwiper: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const previousImage = () => {
    const newIndex = (currentImageIndex - 1 + mainImg.length) % mainImg.length;
    setCurrentImageIndex(newIndex);
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % mainImg.length;
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className="image-slider">
      <img src={mainImg[currentImageIndex]} alt="slider" />
      <button onClick={previousImage}>Previous</button>
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default HomeSwiper;
