import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube"
          className="youtube-logo"
        />
        <span className="country-code">IN</span>
      </div>

      <div className="header-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button className="search-button" onClick={handleSearch}>
          🔍
        </button>
        <button className="mic-button">
          🎤
        </button>
      </div>

      <div className="header-right">
        <button className="create-button">➕ Create</button>
      </div>
    </div>
  );
}

export default Header;
