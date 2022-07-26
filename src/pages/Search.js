import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import "../styles/pages/search.scss";

function Search() {
  return (
    <div className="searchpage">
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default Search;
