// src/components/Filter.js
import React from 'react';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
      <option value="all">All</option>
      <option value="fiction">Fiction</option>
      <option value="non-fiction">Non-Fiction</option>
      <option value="bestsellers">Bestsellers</option>
    </select>
  );
};

export default Filter;
