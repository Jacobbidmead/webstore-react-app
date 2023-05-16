import { useState, FC, useContext } from "react";
import norseProjectsData from "../data/norseprojectsProd.json";
import Basket from "./components/Basket";
import { ShopContext } from "@/context/shop-context";
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

const NorseProjects: FC = () => {
  const { addToBasket, setSelectedSize, basket } = useContext(ShopContext)!;

  const [selectedSize, setSelectedSizeLocal] = useState("");

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

          <Link href="/BasketPage" className="basket-counter">
            (
            {basket.length > 0 && (
              <span className="basket-counter">{basket.length}</span>
            )}
            )
            <IconButton>
              <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="store-main-container">
        <div className="store-brand-info">
          <h1 className="brand-name">Norse Projects</h1>
        </div>
        <div className="brand-description">
          Discover Norse Projects, the epitome of timeless Scandinavian design
          and contemporary style. With a carefully curated collection of premium
          clothing and accessories, their web store blends Nordic craftsmanship
          with a modern aesthetic. From clean lines to exceptional attention to
          detail, each piece embodies functionality and minimalist elegance.
          Experience the perfect fusion of versatility and sophistication at
          Norse Projects, where understated luxury meets enduring quality.
        </div>
        <div>
          <div className="store-items-container">
            {norseProjectsData.map((item) => (
              <div key={item.id} className="products">
                <img src={item.imgUrl} alt="" className="product-image" />
                <div className="product-name">{item.name}</div>
                <div className="product-color">{item.color}</div>
                <div className="product-price">£{item.price}</div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <select
                    className="select-size"
                    value={selectedSize}
                    onChange={(event) => setSelectedSize(event.target.value)}
                  >
                    <option value="">Select a size</option>
                    {item.size.map((size, index) => (
                      <option key={index} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={() => addToBasket(item)}>
                    Add to basket
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NorseProjects;
