import { useState, useEffect } from "react";
import mainImg from "@/imageData/mainImgData";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ImageSliderProps {
  images: string[];
}
const colors = ["#FFC0CB", "#FFDAB9", "#FFFFE0", "#E0FFFF", "#D8BFD8"];

const HomeSwiper: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [colorIndex, setColorIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

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
        <div
          className="featured"
          style={{ backgroundColor: colors[colorIndex] }}
        >
          Youre shop for all things streetwear.
        </div>
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
