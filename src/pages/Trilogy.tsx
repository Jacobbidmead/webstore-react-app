import { useState, FC, useContext } from "react";
import trilogyData from "../data/trilogyProd.json";
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

const Trilogy: FC = () => {
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
              <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <div className="store-main-container">
        <div className="store-brand-info">
          <h1 className="brand-name">The Trilogy Tapes</h1>
        </div>
        <div className="brand-description">
          A record label come graphic-centered clothing line launched in 2008 by
          Palace graphic designer Will Bankhead, The Trilogy Tapes is a brand
          that’s come a long way since its conceptual music blog days. As a
          skater during the early ‘90s and frequent dweller of the legendary
          London skate-scene gatekeeper Slam City Skates, Bankhead’s
          fully-fledged immersion in both skate and music culture has helped
          shape the brand into what it is today. Having mixed tracks alongside
          Honest Jon’s co-owner Mark Ainley and having had the opportunity to
          work with experimental musicians and electronic icons such as Bee
          Mask, Sassy J and Futura, fun-loving Bankhead brings a sense of
          contemporary authenticity into the market, backed by his own iconic
          signature designs and music-related artwork. Bankhead’s time as one of
          the visual directors behind Mo’Wax Records is as ever evident now as
          it was in the 1990’s, with bold block prints and brash colour pairings
          taking centre-stage throughout each and every release. Their initial
          debut dropped at Brian and Edward Toft’s Hanon in 2008, with their
          noted sense of avant-garde and abstract surrealism boding well into
          their eclectic mix of multi-dimensional t-shirts, tote bags and hooded
          sweaters. Custom designs are representative of the brand’s ties to
          bespoke vinyl artwork, with references to releases from artists such
          as DJ Sundae, Flights and Geo Rip taking form from season to season.
        </div>
        <div>
          <div className="store-items-container">
            {trilogyData.map((item) => (
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

export default Trilogy;
