import Product from "./product";
import {useContext} from "react";
import {ShopContext} from "../../context/shopContext";

const Shop = () => {

    const {cartItems, addToCart, removeFromCart, products} = useContext(ShopContext);

    return (
        <>
            <h1>Shop</h1>
            <div className="row">
                {products.map((product, index) => {
                    return <Product key={index} data={product}/>;
                })}
            </div>
        </>
    );
};

export default Shop;
