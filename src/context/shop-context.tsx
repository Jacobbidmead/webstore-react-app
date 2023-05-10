import React, { createContext, FC, useState } from "react";

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
  removeFromBasket: (productId: number) => void;
  totalPrice: number;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

interface BasketItem {
  product: Product;
  size: string;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopContextProvider: FC<React.PropsWithChildren<{}>> = (props) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [selectedSize, setSelectedSize] = useState("");

  const addToBasket = (product: Product) => {
    if (selectedSize !== "") {
      const newItem = { product, size: selectedSize };
      setBasket((prevBasket) => [...prevBasket, newItem]);
      setSelectedSize("");
    }
  };

  const removeFromBasket = (productId: number) => {
    setBasket((prevBasket) =>
      prevBasket.filter((item) => item.product.id !== productId)
    );
  };

  const totalPrice = basket.reduce((acc, item) => acc + item.product.price, 0);
  const contextValue = {
    basket,
    addToBasket,
    removeFromBasket,
    totalPrice,
    selectedSize,
    setSelectedSize,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
