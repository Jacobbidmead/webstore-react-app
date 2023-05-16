import { FC, useContext } from "react";
import Basket from "./components/Basket";
import { ShopContext } from "@/context/shop-context";

const BasketPage: FC = () => {
  const { basket, setBasket } = useContext(ShopContext)!;
  return (
    <>
      <Basket basket={basket} setBasket={setBasket} />
    </>
  );
};

export default BasketPage;
