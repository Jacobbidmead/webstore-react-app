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
  setBasket: (basket: BasketItem[]) => void;
  removeFromBasket: (productId: number) => void;
}

const Basket: FC<Props> = ({ basket, setBasket, removeFromBasket }) => {
  const totalPrice = basket.reduce((acc, item) => acc + item.product.price, 0);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const handleRemoveFromBasket = (productId: number) => {
    removeFromBasket(productId);
  };

  return (
    <div>
      <h2>Basket</h2>
      {basket.map((item, index) => (
        <li key={index}>
          {item.product.name} - {item.product.color} - {item.size} - $
          {item.product.price}
          <button onClick={() => handleRemoveFromBasket(item.product.id)}>
            Delete
          </button>
        </li>
      ))}
      <div>Total: {totalPrice}</div>
    </div>
  );
};

export default Basket;
