import { useState } from "react";
import mainImg from "@/imageData/mainImgData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

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
    <>
      <div className="image-slider">
        <div className="featured">Youre shop for all things streetwear.</div>
        <img
          src={mainImg[currentImageIndex]}
          alt="slider"
          className="swiper-img"
        />
        <div className="swiper-buttons">
          <ArrowBackIcon className="back-arrow" onClick={previousImage}>
            Previous
          </ArrowBackIcon>
          <ArrowForwardIcon className="forward-arrow" onClick={nextImage}>
            Next
          </ArrowForwardIcon>
        </div>
      </div>
    </>
  );
};

export default HomeSwiper;
