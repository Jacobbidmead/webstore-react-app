import { FC, useEffect, useState } from "react";
import salomonData from "../../data/salomonProd.json";

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

interface Props {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
  removeFromBasket: (product: Product, size: string) => void;
}

const Basket: FC<Props> = ({ basket, setBasket }) => {
  const totalPrice = basket.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <div>
      <h2>Basket</h2>
      {basket.map((item, index) => (
        <li key={index}>
          {item.product.name} - {item.product.color} - {item.size} - $
          {item.product.price}
        </li>
      ))}
      <div>Total: {totalPrice}</div>
      <button onClick={() => removeFromBasket(item.product, item.size)}>
        Delete
      </button>
    </div>
  );
};

export default Basket;
