import { useContext, useState } from "react";
import { Image } from "react-bootstrap";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, title, price, category, description, image } = props.data;

  const { cartItems, addToCart, removeFromCart, products } = useContext(ShopContext);

  const isInCart = cartItems?.some((item) => item.id === id);

  return (
    <>
      <div className="col-3 mb-5">
        <Image src={image} className="w-100" style={{ maxHeight: "300px" }} />
        <h5>{title}</h5>
        <p>Price: {price}$</p>
        <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
          +
        </button>
        <span className="mx-1">
          {cartItems?.filter((row) => row.id === id)[0]?.count}
        </span>
        {isInCart && (
          <button
            className="btn btn-info btn-sm"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        )}
      </div>
    </>
  );
};

export default Product;
