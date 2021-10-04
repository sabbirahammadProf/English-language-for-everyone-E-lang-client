import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
  <Navbar className="cs-primary-bg">
    <Container>
    <NavLink to="/" className="nav-brand">E-lang for everyone</NavLink>
    <Nav className="ms-auto">
      <NavLink exact activeClassName="active-class" to="/" className="navlink">Home</NavLink>
      <NavLink activeClassName="active-class" to="/about" className="navlink">About</NavLink>
      <NavLink activeClassName="active-class" to="/contact" className="navlink">Contact</NavLink>
      <NavLink activeClassName="active-class" to="/services" className="navlink">Services</NavLink>
      <NavLink activeClassName="active-class" to="/affiliate" className="navlink">Become an affiliate</NavLink>
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Header;