import React from "react";
import {  NavLink, Link } from "react-router-dom";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" >
            Home<br /> මෙනුව
          </Link>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
            About<br /> විස්තර
          </NavLink>
        </li>
        <li>
          <NavLink to="/stock" className={({ isActive }) => isActive ? "active" : ""}>
            Stock Level<br /> දිස්ත්‍රික්ක තොග
          </NavLink>
        </li>
        <li>
          <NavLink to="/price" className={({ isActive }) => isActive ? "active" : ""}>
            Price Changing<br /> මිල වෙනස්වීම
          </NavLink>
        </li>
        <li>
          <NavLink to="/rank" className={({ isActive }) => isActive ? "active" : ""}>
            Ranking<br /> තොග වෙනස්වීම්
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
            Contact <br />ඇමතුම්
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
