
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";
import { toggleCart } from "../redux/CartSlice";

const Header = () => {
  const dispatch = useDispatch (); // Redux Dispatcher

  const [nav, setNav] = useState(false);

   // Scroll Navbar Change
   const changeValueOnScroll = () => {
     setNav(document.documentElement.scrollTop > 100);
   };

   window.addEventListener("scroll", changeValueOnScroll);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
              <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

              {/* 🛒 Cart Icon - Opens Sidebar */}
              <Nav.Link 
                onClick={() => dispatch(toggleCart())} 
                style={{ cursor: "pointer" }}
              >
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <div className="profile mx-4">
                  <i className="bi bi-door-open "></i>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/profile">
                <div className="profile">
                  <i className="bi bi-person-circle "></i>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
