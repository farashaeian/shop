import axios from "axios";
import { useEffect } from "react";
import Product from "./product";

const Shop = () => {
  let products = [];
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      products = res.data;
    });
  }, []);
  
  return (
    <>
      <h1>Shop</h1>
      <div className="row">
        {console.log(products)}
        {products.map((product, index) => {
         return <Product data={product}/>;
        })}
      </div>
    </>
  );
};
export default Shop;
