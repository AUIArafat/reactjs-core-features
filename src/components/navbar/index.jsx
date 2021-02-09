import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./navbar.style.css";
import { FaBars } from 'react-icons/fa'; 
import { NavLink} from 'react-router-dom'; 
import "./navbar.style.css";

const Navbar = () => {
  return (
    <>
      <nav className="Nav">
        <FaBars className="Bars"/>

        <div className="NavMenu">
          <NavLink to="/about" className="NavLink">
            About
          </NavLink>
          <NavLink to="/events" className="NavLink">
            Events
          </NavLink>
          <NavLink to="/annual" className="NavLink">
            Annual Report
          </NavLink>
          <NavLink to="/team" className="NavLink">
            Teams
          </NavLink>
          <NavLink to="/blogs" className="NavLink">
            Blogs
          </NavLink>
          <NavLink to="/sign-up" className="NavLink">
            Sign Up
          </NavLink>

        </div>
       
        <nav className="NavBtn">
          <NavLink to="/signin" className="NavBtnLink">Sign In</NavLink>
        </nav>
      </nav>
    </>
  );
}

export default Navbar;
