import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "../styles/components/searchbar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  //   const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="search-container">
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
          <span>search by</span>
          <ul>
            <li>book</li>
            <li>author</li>
            <li>text</li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
