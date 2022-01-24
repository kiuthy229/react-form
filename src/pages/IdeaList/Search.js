import React from "react";
import { makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";
import { useStyles } from "./styles.js";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/ideas")
      .then((response) => response.json())
      .then((data) => setIdeas(data));
  }, []);

  // useEffect(() => {
  //   const filteredItems = items.filter((item) =>
  //     item.toLowerCase().contains(searchTerm.toLowerCase())
  //   );
  //   setFilterList(filterList);
  // }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
  };

  const filteredItems = (ideas) => {
    return ideas.filter((idea) =>
      idea.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>One: Search</h1>
      <form>
        <h3>🔎</h3>
        <input placeholder="search..." onChange={handleSearch}></input>
        <h1>{searchTerm}</h1>
        <ul className={classes.list}>
          {filteredItems(ideas) &&
            filteredItems(ideas).map((idea) => (
              <li key={idea.id}>{idea.content}</li>
            ))}
        </ul>
      </form>
    </div>
  );

  //   return <h1>Test</h1>;
};

export default Search;
