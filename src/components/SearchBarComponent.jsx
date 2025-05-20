import React, { useState } from "react";

const SearchBarComponent = ({ query, setQuery }) => {
  //   console.log(fetchedResult);

  const searchHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.value.toLowerCase());
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        onChange={searchHandler}
        value={query}
        placeholder="Search For a Vehicle/Model/Type..."
        style={{ padding: "5px", width: "210px" }}
      />
    </div>
  );
};

export default SearchBarComponent;
