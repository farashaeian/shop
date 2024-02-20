import { Image } from "react-bootstrap";

const Product = (props) => {
    const {id,title,price,category,description,image} = props.data;
    
  return (
  <>
    <div className="col-3">
        <Image src={image} className="w-100"/>
        {title}
        {category}
        {/* {description} */}
        {price}
        {/* {console.log(props.data)} */}
    </div>
  </>
  );
};

export default Product;
