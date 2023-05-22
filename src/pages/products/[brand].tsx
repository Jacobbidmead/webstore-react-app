import { FC, useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "@/context/shop-context";
import allProdData from "../../data/allProd.json";
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
  brand: string;
}

const ProductPage: FC = () => {
  const router = useRouter();
  const { addToBasket, setSelectedSize, basket } = useContext(ShopContext)!;

  const brand = router.query.brand;

  const [selectedSize, setSelectedSizeLocal] = useState("");

  let products: Product[] = [];

  // Check if the category is defined before filtering the products.
  if (brand) {
    products = allProdData.filter((product) => product.brand === brand);
  }

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
            {basket.length > 0 && (
              <span className="basket-counter">({basket.length})</span>
            )}
            <IconButton>
              <ShoppingCartIcon sx={{ cursor: "pointer" }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <div>
        <div className="store-brand-info">
          <h1 className="brand-name">{brand}</h1>
        </div>

        <div>
          <div className="store-items-container">
            {products.map((item) => (
              <div key={item.id} className="products">
                <img src={item.imgUrl} alt="" className="product-image" />
                <div className="product-name">{item.brand}</div>
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
                    onChange={(event) => {
                      setSelectedSize(event.target.value);
                    }}
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

export default ProductPage;
