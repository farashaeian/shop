import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./product";

const Shop = () => {

const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts()
  }, []);

  const fetchProducts=()=>{
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data) ;
    });
  }
  
  return (
    <>
      <h1>Shop</h1>
      <div className="row">
        {/* {console.log(products)} */}
        {products.map((product, index) => {
         return <Product key={index} data={product}/>;
        })}
      </div>
    </>
  );
};

export default Shop;
