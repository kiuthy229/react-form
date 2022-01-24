import React from "react";
import { useState, useEffect } from "react";
import "../index.css";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    // 
    fetch(`http://localhost:8080/ideas/search/${searchTerm}`)
      .then((response) => response.json())
      .then(data => {
        setSearchResults(data);
      })
      ;
  }, [searchTerm]);

  return (
    <div className="search">
      
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <ul className="search-results">
        {searchResults.map(result => {
          <li key={result.id}>
            {result.idea}
          </li>
        })}
      </ul>


    </div>
  );
};

export default Search;
