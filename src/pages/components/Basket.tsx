import { FC, useEffect } from "react";

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
}

const Basket: FC<Props> = ({ basket, setBasket }) => {
  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.product.id !== productId)
    );
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.product.price, 0);

  return (
    <div>
      <h2>Basket</h2>
      {basket.map((item, index) => (
        <li key={index}>
          {item.product.name} - {item.product.color} - {item.size} - $
          {item.product.price}
          <button onClick={() => removeFromBasket(item.product.id)}>
            Delete
          </button>
        </li>
      ))}
      <div>Total: {totalPrice}</div>
    </div>
  );
};
export default Basket;
