import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Created a separate Navbar component
// Using HashLink and NavLink to route within my app freely
// HashLink is used for #link to pinpoint directly where the hash was set
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <HashLink className="navbar-brand" to="/">
            <img
              src="img/dark.jpeg"
              width="30px"
              height="30px"
              className="img-fluid"
              alt="proper"
            />
          </HashLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    HOME
                  </NavLink>
                </li>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  PRODUCTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Navbar;
