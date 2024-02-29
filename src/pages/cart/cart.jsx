import {useContext} from "react";
import {ShopContext} from "../../context/shopContext";
import Product from "../shop/product";

const Cart = () => {
    const { cartItems, addToCart, removeFromCart, products } = useContext(ShopContext);
  return (
    <>
      <h1>Your Cart Items</h1>
        <div className={'row'}>
            {products.map((p)=>{
                if(cartItems.some((i) => i.id === p.id && i.count >0))
                    return <Product data={p}></Product>
            })}
        </div>
    </>
  );
};

export default Cart;
