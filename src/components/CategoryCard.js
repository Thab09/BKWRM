import React from "react";

function CategoryCard({ categoryname, getBooksByCategory }) {
  return (
    <div>
      <div className="category-card">
        <button onClick={() => getBooksByCategory(categoryname)}>
          {categoryname}
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
