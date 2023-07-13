import { useState } from 'react';

const FilterOptions = ({ handleFilter }) => {
  const [filters, setFilters] = useState({
    RAM: false,
    SDD: false,
    HDD: false,
    ScreenSize: false,
    OS: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({ ...filters, [name]: checked });
    handleFilter(name, checked);
  };

  return (
    <div>
      <h3>Filter By:</h3>
      <label>
        <input type="checkbox" name="RAM" checked={filters.RAM} onChange={handleCheckboxChange} />
        RAM
      </label>
      <br />
      <label>
        <input type="checkbox" name="SDD" checked={filters.SDD} onChange={handleCheckboxChange} />
        SDD
      </label>
      <br />
      <label>
        <input type="checkbox" name="HDD" checked={filters.HDD} onChange={handleCheckboxChange} />
        HDD
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="ScreenSize"
          checked={filters.ScreenSize}
          onChange={handleCheckboxChange}
        />
        Screen Size
      </label>
      <br />
      <label>
        <input type="checkbox" name="OS" checked={filters.OS} onChange={handleCheckboxChange} />
        OS
      </label>
    </div>
  );
};

export default FilterOptions;

