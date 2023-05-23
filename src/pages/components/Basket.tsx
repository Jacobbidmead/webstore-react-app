import { FC, useContext } from "react";
import { ShopContext } from "@/context/shop-context";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "@mui/material";
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
  quantity: number;
}

export interface Props {
  basket: BasketItem[];
  setBasket: React.Dispatch<React.SetStateAction<BasketItem[]>>;
}

const Basket: FC<Props> = ({ basket }) => {
  const { removeFromBasket, totalPrice, totalItems } = useContext(ShopContext)!;

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
            ({totalItems > 0 && <span>{totalItems}</span>})
          </div>
        </Toolbar>
      </AppBar>
      <div className="basket-container">
        <div className="basket-header">
          <h3>Basket</h3>
        </div>
        <div>
          {basket?.map((item, index) => (
            <div className="basket-table" key={index}>
              <div className="basket-item"> {item.quantity} </div>
              <img className="basket-img" src={item.product.imgUrl} alt="" />
              <div className="basket-item">{item.product.name}</div>
              <div className="basket-item"> {item.product.color}</div>{" "}
              <div className="basket-item"> {item.size} </div>
              <div className="basket-item">£{item.product.price}</div>
              <div className="basket-item">
                {" "}
                <ClearIcon
                  onClick={() => removeFromBasket(item)}
                  sx={{ cursor: "pointer" }}
                >
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
