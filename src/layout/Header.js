import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { user, setUser } = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand className="text-white" tag={Link} to="/home">
        LCO gitfire app
      </NavbarBrand>
      <NavbarText className="text-white">{user?.email}</NavbarText>
      <NavbarToggler onClick={toggle}></NavbarToggler>
      <Collapse isOpen={isOpen} navbar className="justify-content-end">
        <Nav className="ml-auto" navbar>
          {user ? (
            <NavItem>
              <NavLink
                className="text-white"
                onClick={() => setUser(null)}
                tag={Link}
                to="/"
              >
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signin">
                  Signin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" tag={Link} to="/signup">
                  Signup
                </NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
