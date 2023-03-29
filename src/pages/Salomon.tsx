import { useState, FC } from "react";
import salomonData from "../data/salomonProd.json";

const Salomon: FC = () => {
  console.log(salomonData);
  return (
    <>
      <div className="store-main-container">
        <div className="store-brand-info">
          <h1>Salomon</h1>
        </div>
        <div>Some sort of description about the brand</div>
        <div>
          <div className="store-items-container">
            {salomonData.map((item) => (
              <div>
                <img src={item.imgUrl} alt="" />
                <div>{item.name}</div>
                <div>{item.color}</div>
                <div>{item.price}</div>
                <select>Size</select>
                <button>add to basket</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Salomon;
