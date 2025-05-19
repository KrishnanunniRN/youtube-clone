import React, { useState } from "react";
import "./Header.css";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top p-2 ">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="youtube-logo me-2"
            style={{ height: "30px" }}
          />
          <span className="text-muted small">IN</span>
        </div>
        <div className="d-flex flex-grow-1 mx-2">
          <input
            type="text"
            className="form-control rounded-pill me-2"
            placeholder="Search"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            className="btn btn-outline-secondary rounded-pill"
            onClick={() => onSearch(searchTerm)}
          >
            <i className="bi bi-search">Search</i>
          </button>
          <button className="btn btn-dark rounded-circle ms-2">
            <i className="bi bi-mic-fill"></i>
          </button>
        </div>
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-light rounded-pill">
            <i className="bi bi-plus-lg me-1"></i> Create
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;