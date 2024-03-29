import { useState, FC, useContext } from "react";
import polarData from "../data/polarProd.json";
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

const Polar: FC = () => {
  const { addToBasket, setSelectedSize, basket, totalItems } =
    useContext(ShopContext)!;

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
            {totalItems > 0 && <span>({totalItems})</span>}
            <IconButton>
              <ShoppingCartIcon
                sx={{ cursor: "pointer" }}
                className="cart-icon"
              />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="store-main-container">
        <div className="store-brand-info">
          <h1 className="brand-name">Polar</h1>
        </div>
        <div className="brand-description">
          Immerse yourself in the vibrant world of Polar Skateboards, where
          skateboarding culture thrives. With a dedication to authenticity and
          creativity, Polar Skateboards brings you a meticulously crafted
          collection of skateboarding decks, apparel, and accessories. From
          their iconic graphics and innovative board designs to their
          comfortable and stylish clothing range, Polar Skateboards caters to
          skateboarders and streetwear enthusiasts alike. Whether you're hitting
          the streets or expressing your unique style, Polar Skateboards offers
          the perfect blend of quality, functionality, and artistic expression.
          Discover the thrill of skating with Polar Skateboards and embrace the
          spirit of individuality on and off the board.
        </div>
        <div>
          <div className="store-items-container">
            {polarData.map((item) => (
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

export default Polar;
