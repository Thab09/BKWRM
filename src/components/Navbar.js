import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">
        <h4>LOGO</h4>
      </NavLink>
      <NavLink to="/">
        <h4>Library</h4>
      </NavLink>
      <NavLink to="/">
        <h4>Bookshelf</h4>
      </NavLink>
      <NavLink to="/">
        <h4>Search</h4>
      </NavLink>
      <NavLink to="/">
        <h4>Profile</h4>
      </NavLink>
      <NavLink to="/">
        <h4>Logout</h4>
      </NavLink>
    </div>
  );
}

export default Navbar;
