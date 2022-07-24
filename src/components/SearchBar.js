import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/components/searchbar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  //   const navigate = useNavigate();

  const [searchBy, setSearchBy] = useState("book");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input, searchBy);
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="search">
        <input
          className="searchbar"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <input type="submit" value="search" className="searchbutton" />
      </div>
      <div className="searchby">
        <span>search by:</span>
        <ul>
          <li
            onClick={(e) => setSearchBy(e.target.textContent)}
            className={searchBy === "book" ? "active" : ""}
          >
            book
          </li>
          <li
            onClick={(e) => setSearchBy(e.target.textContent)}
            className={searchBy === "author" ? "active" : ""}
          >
            author
          </li>
          <li
            onClick={(e) => setSearchBy(e.target.textContent)}
            className={searchBy === "text" ? "active" : ""}
          >
            text
          </li>
        </ul>
      </div>
    </form>
  );
}

export default SearchBar;
