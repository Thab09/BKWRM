import React from "react";

function SearchResults() {
  const result = 1;
  if (result === 0) {
    return (
      <div>
        <h5>No results found</h5>
      </div>
    );
  }
  return (
    <div>
      <h5>Some results found</h5>
    </div>
  );
}

export default SearchResults;
