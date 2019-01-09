import React, { Component } from "react";
const NavBar = ({ totalcounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Count{" "}
        <span className="badge badge-pill badge-secondary">
          {totalcounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
