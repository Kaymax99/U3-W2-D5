import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import doge from "../doge.svg";

export const CustomNavbar = () => {
  const favLength = useSelector((state) => state.favourites.content.length);

  return (
    <Navbar style={{ backgroundColor: "#005986" }} expand="lg" variant="dark">
      <Container>
        <img
          src={doge}
          alt="logo"
          id="logo"
          className="me-2"
          style={{ width: "36px", height: "36px" }}
        ></img>
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
