import { FC, useContext } from "react";
import { ShopContext } from "@/context/shop-context";

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

export interface Props {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
}

const Basket: FC<Props> = ({ basket, setBasket }) => {
  const { removeFromBasket, totalPrice } = useContext(ShopContext);

  return (
    <div className="basket-container">
      <h2>Basket</h2>
      {basket.map((item, index) => (
        <li key={index}>
          {item.product.name} - {item.product.color} - {item.size} - $
          {item.product.price}
          <button onClick={() => removeFromBasket(item)}>Delete</button>
        </li>
      ))}
      <div>Total: {totalPrice}</div>
    </div>
  );
};

export default Basket;
