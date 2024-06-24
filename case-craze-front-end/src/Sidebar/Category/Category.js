import React from 'react';

function Category({ categories, handleChange }) {
  return (
    <div className="category-filter">
      <h2>Categories</h2>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="category"
              value=""
              onChange={handleChange}
            />
            All
          </label>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <label>
              <input
                type="radio"
                name="category"
                value={category.id}
                onChange={handleChange}
              />
              {category.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
