import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  //  const navStyle = {
  //    color: "white",
  //    textDecoration: "none";
  //  };

  return (
    <nav>
      <h2>Get Go</h2>
      <ul className="nav-links">
        <Link className="nav-items" to="/">
          <li> Home </li>
        </Link>
        <Link className="nav-items" to="/contact">
          <li> Contact </li>
        </Link>
        <Link className="nav-items" to="/services">
          <li> Services </li>
        </Link>
        <Link className="nav-items" to="/about">
          <li> About </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
