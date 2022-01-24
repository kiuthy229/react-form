import React, { useState, useEffect } from "react";
import { Route, Switch, NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  //   const submitHandle = (e) => {
  //       e.preventDefault;

  //   };

  return (
    <nav className="navbar">
      <h1>Web Enterprise</h1>
      <div className="links">
        {/* <a href="/idealist">Idea List</a> */}
        <Link className="" to="/idealist"></Link>
        {/* <a href="/ideacreate">Idea Create</a> */}
        <Link className="" to="/ideacreate"></Link>
        {/* <a href="/login">Login</a> */}
        <Link className="" to="/login"></Link>
        <br />
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          //   onChange={handleChange}
        />
        <button
          className="search-button"
          onClick={(e) => setSearchTerm(...searchTerm, e.target.value)}
          value={searchTerm}
        >
          🔎
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
