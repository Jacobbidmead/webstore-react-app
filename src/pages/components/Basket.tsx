import { FC, useContext } from "react";
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

export interface Props {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
}

const Basket: FC<Props> = ({ basket, setBasket }) => {
  const { removeFromBasket, totalPrice } = useContext(ShopContext)!;

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h3>Basket</h3>
      </div>
      <div>
        {basket.map((item, index) => (
          <div className="basket-table" key={index}>
            <img className="basket-img" src={item.product.imgUrl} alt="" />
            <div>{item.product.name}</div>
            <div> {item.product.color}</div> {item.size}{" "}
            <div>£{item.product.price}</div>
            <div>
              {" "}
              <button onClick={() => removeFromBasket(item)}>Delete</button>
            </div>
          </div>
        ))}
        <div>Total: £{totalPrice}</div>
      </div>
    </div>
  );
};

export default Basket;
