import { faShop, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">React Shop</Navbar.Brand>
                    <Nav>
                        <Nav.Link as={Link} to="/"><FontAwesomeIcon icon={faShop} /></Nav.Link>
                        <Nav.Link as={Link} to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;
