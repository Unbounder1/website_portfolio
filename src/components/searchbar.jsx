import React, { useState } from 'react';
import '../styles/search_style.css'; 

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="search-box">
      <button className="btn-search" onClick={() => onSearch(searchTerm)}>
        <i className="fas fa-search"></i>
      </button>
      <input
        type="text"
        className="input-search"
        placeholder="Search By Tags"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
