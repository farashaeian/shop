import { faShop, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <div className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand">React Shop</a>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item me-2">
                            <Link to={"/"} className="nav-link">
                            <FontAwesomeIcon icon={faShop}/>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/cart"} className="nav-link"> 
                            <FontAwesomeIcon icon={faShoppingCart}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Nav;
