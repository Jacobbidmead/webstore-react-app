import { FC, useContext } from "react";
import { ShopContext } from "@/context/shop-context";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";

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
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            // backgroundColor: "#fbfbfbcc",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <IconButton>
              <HomeIcon />
            </IconButton>
          </Link>
          <div className="basket-counter">
            ({basket.length > 0 && <span>{basket.length}</span>})
          </div>
        </Toolbar>
      </AppBar>
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
    </>
  );
};

export default Basket;
