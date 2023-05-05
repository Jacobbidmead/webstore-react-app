import { useState, FC } from "react";
import salomonData from "../data/salomonProd.json";

const Salomon: FC = () => {
  
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
                <img src={item.imgUrl} alt="" className="product-image"/>
                <div>{item.name}</div>
                <div>{item.color}</div>
                <div>{item.price}</div>
                <select>
                  <option value="7" >7</option>
                  <option value="8"  >8</option>
                  <option value="9" >9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
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
