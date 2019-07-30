import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/icons/car-parking-color.png";
import About from "../assets/icons/about.png";
import Search from "../assets/icons/search.png";

export const Navbar = () => {
  return (
    <nav className="">
      <ul className="ulnav">
        <div className="contain-nav">
          <Link className="" exact to="/">
            <img src={Logo} alt="logo" className="icons-nav" />
          </Link>
          <li className="nav-li">
            <Link className="nav-link" exact to="/about">
              <img src={About} alt="about" className="icons-nav" />
            </Link>
          </li>
          <li className="nav-li">
            <Link className="nav-link" exact to={`/VehicleId/`}>
              <img src={Search} alt="search" className="icons-nav" />
            </Link>
          </li>
          <li className="nav-li">
            <NavLink className="nav-link" exact to="/">
              <p>Home</p>
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
