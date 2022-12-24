import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
import "./nav.css" 
import logo from "../../assets/coder.png"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
          <img src={logo} class="logo"/>
          </NavLink>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to="/blogs" activeStyle>
            Blogs
          </NavLink>
          <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;