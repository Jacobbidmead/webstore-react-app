import { FC, useContext, useState } from "react";
import salomonData from "../data/salomonProd.json";
import Basket from "./components/Basket";
import { ShopContext } from "@/context/shop-context";

interface Product {
  id: number;
  type: string;
  name: string;
  color: string;
  size: string[];
  price: number;
  imgUrl: string;
}

const Salomon: FC = () => {
  const { addToBasket, setSelectedSize, basket, setBasket } =
    useContext(ShopContext)!;

  const [selectedSize, setSelectedSizeLocal] = useState("");

  return (
    <>
      <div>
        <Basket basket={basket} setBasket={setBasket} />
      </div>
      <div className="store-main-container">
        <div className="store-brand-info">
          <h1>Salomon</h1>
        </div>
        <div>
          The Salomon XT-6 trainers are high-performance shoes designed for
          trail running and outdoor activities. They feature a breathable mesh
          and synthetic upper with Sensifit™ technology and a Quicklace™ system
          for a comfortable and secure fit. The Contagrip® outsole with chevron
          lugs provides excellent traction on any terrain, while the
          EnergyCell™+ foam in the midsole offers cushioning and energy return
          to reduce fatigue during long runs or hikes. These shoes also have
          protective features, including a toecap and mudguard, a gusseted
          tongue to keep out debris, and a reinforced heel for added support and
          stability. With their advanced technology and durable construction,
          the Salomon XT-6 trainers are an excellent choice for anyone looking
          for a high-performance trail running shoe that will help them tackle
          any terrain with confidence and ease.
        </div>
        <div>
          <div className="store-items-container">
            {salomonData.map((item) => (
              <div key={item.id}>
                <img src={item.imgUrl} alt="" className="product-image" />
                <div>{item.name}</div>
                <div>{item.color}</div>
                <div>{item.price}</div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <select
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

export default Salomon;
