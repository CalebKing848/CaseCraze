import React from 'react';

function Price({ handleChange }) {
  return (
    <div className="price-filter">
      <h2>Price</h2>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="0-50"
              onChange={handleChange}
            />
            $0 - $50
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="50-100"
              onChange={handleChange}
            />
            $50 - $100
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="100-150"
              onChange={handleChange}
            />
            $100 - $150
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="price"
              value="over-150"
              onChange={handleChange}
            />
            Over $150
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Price;
