import React, { createContext, FC, useState, useEffect } from "react";

export const ShopContext = createContext<ShopContextValue | null>(null);

interface Product {
  id: number;
  type: string;
  name: string;
  color: string;
  size: string[];
  price: number;
  imgUrl: string;
}

interface ShopContextValue {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (item: BasketItem) => void;
  totalPrice: number;
}

interface BasketItem {
  product: Product;
  size: string;
}

const BASKET_STORAGE_KEY = "myapp_basket";

export const ShopContextProvider: FC<React.PropsWithChildren<{}>> = (props) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    const storedBasket = localStorage.getItem(BASKET_STORAGE_KEY);
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(BASKET_STORAGE_KEY, JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (product: Product) => {
    if (selectedSize !== "") {
      const newItem = { product, size: selectedSize };
      setBasket((prevBasket) => [...prevBasket, newItem]);
      setSelectedSize("");
    }
  };

  const removeFromBasket = (item: BasketItem) => {
    setBasket((prevBasket) =>
      prevBasket.filter((basketItem) => basketItem !== item)
    );
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.product.price, 0);
  const contextValue = { basket, addToBasket, removeFromBasket, totalPrice };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
