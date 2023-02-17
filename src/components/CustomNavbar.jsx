import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CustomNavbar = () => {
  const favLength = useSelector((state) => state.favourites.content.length);

  return (
    <Navbar style={{ backgroundColor: "#005986" }} expand="lg" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          DogeWeather
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-link" to="/favourites">
              Favourites ({favLength})
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
