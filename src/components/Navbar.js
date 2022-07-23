import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/components/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h4>bkwrm.</h4>
      </Link>
      <div className="nav">
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>search</h4>
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>categories</h4>
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>my profile</h4>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
