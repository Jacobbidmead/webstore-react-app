import { FC, useContext, useState } from "react";
import { ShopContext } from "@/context/shop-context";
import allProdData from "../data/allProd.json";

const Trainers: FC = () => {
  const { addToBasket, setSelectedSize, basket } = useContext(ShopContext)!;

  const trainers = allProdData.filter((item) => item.type === "Trainers");

  const [selectedSize, setSelectedSizeLocal] = useState("");
  return (
    <>
      <div className="store-category-container">
        <div className="store-brand-info">
          <h1 className="brand-name">Trainers</h1>
        </div>

        <div>
          <div className="store-items-container">
            {trainers.map((item) => (
              <div key={item.id} className="products">
                <img src={item.imgUrl} alt="" className="product-image" />
                <div className="product-name">{item.brand}</div>
                <div className="product-name">{item.name}</div>
                <div className="product-color">{item.color}</div>
                <div className="product-price">£{item.price}</div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <select
                    className="select-size"
                    value={selectedSize}
                    onChange={(event) => {
                      setSelectedSize(event.target.value);
                    }}
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

export default Trainers;
