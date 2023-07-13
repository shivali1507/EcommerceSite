
import { useState } from 'react';
import Filter from './FilterOptions';
import ProductList from './ProductList';

const CategoryPage = () => {
  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilter = (filter, checked) => {
    if (checked) {
      setAppliedFilters([...appliedFilters, filter]);
    } else {
      const updatedFilters = appliedFilters.filter((item) => item !== filter);
      setAppliedFilters(updatedFilters);
    }
  };

  return (
    <div>
      <h2>Category Page</h2>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1' }}>
          <Filter handleFilter={handleFilter} />
        </div>
        <div style={{ flex: '3' }}>
          <ProductList appliedFilters={appliedFilters} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

