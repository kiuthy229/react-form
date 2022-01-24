import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

//   const submitHandle = (e) => {
//       e.preventDefault;
      
//   };


  return(
    <nav className="navbar">
      <h1>Web Enterprise</h1>
      <div className="links">
        <a href="/idealist">Idea List</a>
        <a href="/ideas">Ideas</a>
        <a href="/create">Create</a>
        <a href="/login">Login</a>
        <a href="/ideacreate">Idea Create</a>
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
