import { Button } from "../Button";
import { products } from "../data";
import "./Products.css";

export const Products = () => {
  return (
    <div className="container">
      {products.map((item) => (
        <div key={item.id} className="div1">
          <img src={item.image} alt="" className="img" />
          <div className="div2">
            <p className="p">{item.name}</p>

            <div className="div_img">
              <img
                className="img2"
                src={`src/components/ratings/rating-${Math.round(
                  item.rating.stars * 10
                )}.png`}
                alt=""
                style={{ width: "120px", height: "20px" }}
              />

              <p>{item.rating.count}</p>
            </div>

            <br />
            <p>${item.priceCents}</p>
            <select name="2" id="">
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
