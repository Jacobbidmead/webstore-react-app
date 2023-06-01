import { FC } from "react";
import HomeSwiper from "./HomeSwiper";
import mainImg from "@/imageData/mainImgData";
import Link from "next/link";
import trilogyData from "../../data/trilogyProd.json";

interface Product {
  id: number;
  type: string;
  name: string;
  color: string;
  size: string[];
  price: number;
  imgUrl: string;
}

interface BasketItem {
  product: Product;
  size: string;
}

const MainPage: FC = () => {
  return (
    <>
      <div className="mainpage-container">
        <HomeSwiper images={mainImg} />
        <div className="latest-header"> The Trilogy Tapes.</div>
        <div className="latest-container">
          {" "}
          {trilogyData.map((item) => (
            <Link
              href="/Trilogy"
              className="latest-img-container"
              key={item.id}
            >
              <img src={item.imgUrl} alt="" className="latest-img" />
              <div className="middle-text">
                <div>{item.name}</div>
              </div>
            </Link>
          ))}
        </div>

        <span className="latest-header">Featured for you.</span>

        <div className="latest-container">
          <Link href="/Nike" className="latest-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/nike-sb-janoski-og_-shoes-alabaster-alabaster-chile-red-1_600x696_crop_center.progressive.jpg?v=1679483172"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Nike Janoski OG</div>
            </div>
          </Link>
          <Link href="/NorseProjects" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/norse-projects-fraser-tab-series-hoodie-scoria-blue-1_480x_crop_center.jpg?v=1666367230"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Norse Projects Fraser Hoodie</div>
            </div>
          </Link>
          <Link href="/Salomon" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/andwanderxSalomonXT-6Shoes-1_1200x_crop_center.progressive.jpg?v=1669296832"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Salomon XT-6</div>
            </div>
          </Link>
          <Link href="/Nike" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/nike-waffle-one-shoes-summit-white-white-black-orange-1_480x_crop_center.jpg?v=1641891223"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Nike Waffle Summit</div>
            </div>
          </Link>
          <Link href="/Polar" className="latest-img-container">
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-spiral-shirt-black-white-1_1300x1500_crop_center.progressive.jpg?v=1676295201"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Polar Spiral Shirt</div>
            </div>
          </Link>
          <Link href="/Polar" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/1202/6102/products/polar-big-boy-jeans-light-blue-3_37c29c94-1093-4f50-bba3-1bded6772014_600x696_crop_center.progressive.jpg?v=1647261599"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Polar Big Boy Jeans</div>
            </div>
          </Link>
          <Link href="/NorseProjects" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/norse-projects-anton-brushed-flannel-check-shirt-varsity-green-1_480x_crop_center.jpg?v=1666367106"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Norse Projects Flannel Shirt</div>
            </div>
          </Link>
          <Link href="/NorseProjects" className="latest-img-container">
            {" "}
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/products/norse-projects-twill-sports-cap-dark-navy-1_5ad3044e-eefc-4ffc-b11a-9c87eca41906_480x_crop_center.jpg?v=1629718580"
              alt=""
              className="latest-img"
            />
            <div className="middle-text">
              <div>Norse Proejcts Twill Sports Cap</div>
            </div>
          </Link>
        </div>
        <div className="salomon-xt-container">
          <Link href="/Salomon" className="latest-header">
            Salomon XT-6 - Shop now
          </Link>
          <div>
            <img
              src="https://cdn.shopify.com/s/files/1/2102/5145/files/salomon-xt6-gtx-desktop-banner_1_1200x1800.jpg?v=1672992137"
              alt=""
              className="salomon-xt-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
