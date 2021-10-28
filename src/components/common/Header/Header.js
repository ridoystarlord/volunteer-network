import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="150"
              height="50"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0 fw-bold align-items-center"
              navbarScroll
            >
              <Nav.Link as={NavLink} className="text-dark" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-dark" to="/my-events">
                My Events
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-dark" to="/events">
                All Events
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-dark" to="/blog">
                Blog
              </Nav.Link>
              {user.email
                ? [
                    <p key="name" className="mb-0 mx-3">
                      {user.displayName}
                    </p>,
                    <Button onClick={logout} key="logout" variant="danger">
                      Logout
                    </Button>,
                  ]
                : [
                    <Nav.Link
                      key="register"
                      as={NavLink}
                      className="text-dark"
                      to="/register"
                    >
                      <Button variant="primary">Register</Button>
                    </Nav.Link>,
                    <Nav.Link
                      key="admin"
                      as={NavLink}
                      className="text-dark"
                      to="/admin"
                    >
                      <Button variant="dark">Admin</Button>
                    </Nav.Link>,
                  ]}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
