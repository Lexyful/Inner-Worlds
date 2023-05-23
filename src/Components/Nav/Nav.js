import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Inner Worlds - HOME Logo (500 × 300 px).svg";
import "./Nav.css";

const Nav = ({ handleLogOut }) => {
  return (
    <header className="nav-bar">
      <NavLink to="/home">
        <img src={Logo} className="logo" alt="Inner Worlds" />
      </NavLink>
      <div className="nav-links">
        <NavLink to="/home" className="nav-link1">
          Home
        </NavLink>
        <NavLink to="/dreams" className="nav-link2">
          My Dreams
        </NavLink>
        <NavLink to="/chart" className="nav-link3">
          DreamChart
        </NavLink>
        <NavLink to="/" className="nav-link4" onClick={handleLogOut}>
          Log Out
        </NavLink>
      </div>
    </header>
  );
};

export default Nav;
