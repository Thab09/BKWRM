import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/components/navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h4>LOGO</h4>
      </Link>
      <NavLink
        to="/library"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <h4>Library</h4>
      </NavLink>
      <Link to="/bookshelf/reading">
        <h4>Bookshelf</h4>
      </Link>

      <div className="bookshelf">
        <NavLink
          to="/bookshelf/reading"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>Reading</h4>
        </NavLink>
        <NavLink
          to="/bookshelf/plantoread"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>Plan to Read</h4>
        </NavLink>
        <NavLink
          to="/bookshelf/dropped"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>Dropped</h4>
        </NavLink>
        <NavLink
          to="/bookshelf/completed"
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          <h4>Completed</h4>
        </NavLink>
      </div>

      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <h4>Search</h4>
      </NavLink>
      <NavLink
        to="/profile"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <h4>Profile</h4>
      </NavLink>
      <Link to="/">
        <h4>Logout</h4>
      </Link>
    </div>
  );
}

export default Navbar;
