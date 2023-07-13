import React, { useState, useEffect } from 'react';
import products from './products.json';

const ProductList = ({ appliedFilters }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  useEffect(() => {
    filterProducts();
  }, [appliedFilters]);

  useEffect(() => {
    loadMoreProducts();
  }, [filteredProducts]);

  const filterProducts = () => {
    let filtered = [...products];

    appliedFilters.forEach((filter) => {
      filtered = filtered.filter((product) => product[filter]);
    });

    setFilteredProducts(filtered);
  };

  const loadMoreProducts = () => {
    setVisibleProducts(filteredProducts.slice(0, 3));
  };

  const handleLoadMore = () => {
    const currentLength = visibleProducts.length;
    const nextProducts = filteredProducts.slice(currentLength, currentLength + 3);
    setVisibleProducts([...visibleProducts, ...nextProducts]);
  };

  return (
    <div className="product-list">
      {visibleProducts.map((product, index) => (
        <div key={index} className="product">
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <p>RAM: {product.RAM}</p>
            <p>SDD: {product.SDD}</p>
            <p>HDD: {product.HDD}</p>
            <p>Screen Size: {product.ScreenSize}</p>
            <p>OS: {product.OS}</p>
          </div>
          <div className="product-image">
            <img src={product.picture} alt={product.name} />
          </div>
        </div>
      ))}
      {visibleProducts.length < filteredProducts.length && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default ProductList;

