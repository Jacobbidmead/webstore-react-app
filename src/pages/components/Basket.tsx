import { FC, useContext } from "react";
import { ShopContext } from "@/context/shop-context";
import ClearIcon from "@mui/icons-material/Clear";

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

const Basket: FC<Props> = ({ basket }) => {
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
              <ClearIcon onClick={() => removeFromBasket(item)}>
                Delete
              </ClearIcon>
            </div>
          </div>
        ))}
        <div className="basket-total">Total: £{totalPrice}</div>
      </div>
    </div>
  );
};

export default Basket;
