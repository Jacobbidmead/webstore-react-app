import { useState, FC } from "react";
import salomonData from "../data/salomonProd.json";
import Basket from "./components/Basket";

interface Product {
  id: number;
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

const Salomon: FC = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [basketTotal, setBasketTotal] = useState(0);

  const addToBasket = (product: Product) => {
    if (selectedSize !== "") {
      setBasket([...basket, { product, size: selectedSize }]);
      setBasketTotal(basketTotal + product.price);
      setSelectedSize("");
    }
  };

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
        <div>
          <Basket basket={basket} setBasket={setBasket} />
        </div>
      </div>
    </>
  );
};

export default Salomon;
