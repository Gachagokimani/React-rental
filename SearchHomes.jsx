import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search-homes.css'; // Adjusted to import the correct CSS file

const SearchHomes = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    location: '',
    priceRange: '',
    bedrooms: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here (e.g., API call)
    console.log('Search params:', searchParams);
  };

  return (
    <div className="search-container">
      <div className="search-background"></div>
      <nav className="search-nav">
        <button className="back-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </nav>
      <div className="search-content">
        <h1>Find Your Perfect Home</h1>
        <form onSubmit={handleSearch}>
          <div className="search-filters">
            <input
              type="text"
              placeholder="Location"
              value={searchParams.location}
              onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
            />
            <select
              value={searchParams.priceRange}
              onChange={(e) => setSearchParams({ ...searchParams, priceRange: e.target.value })}
            >
              <option value="">Price Range</option>
              <option value="0-1000">$0 - $1,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000+">$2,000+</option>
            </select>
            <select
              value={searchParams.bedrooms}
              onChange={(e) => setSearchParams({ ...searchParams, bedrooms: e.target.value })}
            >
              <option value="">Bedrooms</option>
              <option value="1">1 Bedroom</option>
              <option value="2">2 Bedrooms</option>
              <option value="3+">3+ Bedrooms</option>
            </select>
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
    </div>
  );
};

export default SearchHomes;
