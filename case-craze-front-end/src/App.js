import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState(null);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'category') {
      setSelectedCategory(value);
    } else if (name === 'price') {
      setPriceRange(value);
    }
  };

  function filteredData(products, categories, selected, priceRange, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
      );
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        (product) => product.categoryId == selected
      );
    }

    if (priceRange) {
      filteredProducts = filteredProducts.filter(({ amount }) => {
        if (priceRange === '0-50') return amount >= 0 && amount <= 50;
        if (priceRange === '50-100') return amount > 50 && amount <= 100;
        if (priceRange === '100-150') return amount > 100 && amount <= 150;
        if (priceRange === 'over-150') return amount > 150;
        return true;
      });
    }

    filteredProducts = filteredProducts.map((product) => {
      const category = categories.find(cat => cat.id === product.categoryId);
      return {
        ...product,
        categoryName: category ? category.name : "Unknown",
      };
    });

    return filteredProducts.map(
      ({ id, imageUrl, title, star, reviews, prevPrice, amount, categoryName }) => (
        <Card
          key={id}
          imageUrl={imageUrl}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          amount={amount}
          categoryName={categoryName}
        />
      )
    );
  }

  const result = filteredData(products, categories, selectedCategory, priceRange, query);

  return (
    <>
      <Sidebar categories={categories} handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Products result={result} />
    </>
  );
}

export default App;
