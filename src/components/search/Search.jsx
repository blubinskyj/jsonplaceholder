import React from "react";
import "./Search.css";

const Search = ({ inputValue, handleInput }) => {
  return (
    <>
      <input
        value={inputValue}
        onChange={handleInput}
        type="text"
        className="search"
        placeholder={"User name ..."}
      />
    </>
  );
};

export default Search;
