import { useState, FC, useContext } from "react";
import norseProjectsData from "../data/norseprojectsProd.json";
import Basket from "./components/Basket";
import { ShopContext } from "@/context/shop-context";

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

const NorseProjects: FC = () => {
  const { addToBasket, setSelectedSize, basket, setBasket } =
    useContext(ShopContext);

  const [selectedSize, setSelectedSizeLocal] = useState("");

  return (
    <>
      <div>
        <Basket basket={basket} setBasket={setBasket} />
      </div>
      <div className="store-main-container">
        <div className="store-brand-info">
          <h1>Norse Projects</h1>
        </div>
        <div>Norse Projects description</div>
        <div>
          <div className="store-items-container">
            {norseProjectsData.map((item) => (
              <div key={item.id}>
                <img src={item.imgUrl} alt="" className="product-image" />
                <div>{item.name}</div>
                <div>{item.color}</div>
                <div>{item.price}</div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <select
                    value={selectedSize}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  >
                    <option value="">Select a size</option>
                    {item.size.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => addToBasket(item)}>
                    Add to basket
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NorseProjects;
