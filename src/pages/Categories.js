import React from "react";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const getBooksByCategory = async (category) => {
    const data = await fetch(
      `https://openlibrary.org/subjects/` + category + `.json`
    );
    const detailData = await data.json();
    console.log(detailData);
  };
  return (
    <div className="categories-page">
      <CategoryCard
        categoryname="Love"
        getBooksByCategory={getBooksByCategory}
      />
      {/* <div className="category-card">
        <button
          value="Love"
          className="love-category"
          onClick={getBooksByCategory}
        >
          Love
        </button>
      </div> */}
    </div>
  );
}

export default Categories;
