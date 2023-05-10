import React, { createContext, FC, useState, useEffect } from "react";

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

interface ShopContextValue {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (item: BasketItem) => void;
  totalPrice: number;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}

export const ShopContext = createContext<ShopContextValue | null>(null);

export const ShopContextProvider: FC<React.PropsWithChildren<{}>> = (props) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [hasInitialized, setHasInitialized] = useState(false);

  // Load basket from local storage
  useEffect(() => {
    const loadedBasket = localStorage.getItem("basket");
    if (loadedBasket) {
      try {
        const parsedBasket = JSON.parse(loadedBasket);
        console.log("Loaded basket from local storage:", parsedBasket);
        setBasket(parsedBasket);
      } catch (err) {
        console.error("Failed to parse basket from local storage:", err);
      }
    }
    setHasInitialized(true); // Mark as initialized after first load
  }, []);

  // Save basket to local storage whenever it changes
  useEffect(() => {
    if (hasInitialized) {
      // Only save if we have loaded at least once
      try {
        const basketString = JSON.stringify(basket);
        console.log("Saving basket to local storage:", basket);
        localStorage.setItem("basket", basketString);
      } catch (err) {
        console.error("Failed to save basket to local storage:", err);
      }
    }
  }, [basket, hasInitialized]);

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
  const contextValue = {
    basket,
    addToBasket,
    removeFromBasket,
    totalPrice,
    setSelectedSize,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
