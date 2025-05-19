import React, { useRef } from 'react';
import './Scroll.css';

function Scroll({onCategoryClick}) {
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };
  const categories = [
    "All", "News", "Music", "AI", "APIs", "Tamil",
    "Live", "Thrillers", "Dramedy", "Science",
  ];
  return (
    <div className="category-scroll-container">
      <button className="scroll-button left" onClick={scrollLeft}>&#8249;</button>
      <div className="category-scroll" ref={scrollRef}>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn btn-sm rounded-pill me-2 ${index === 0 ? 'btn-light' : 'btn-outline-light'}`}
            onClick={() => onCategoryClick(category)} 
          >
            <a href={`#${category}`} className="text-decoration-none" style={{ color: 'inherit' }}>
              {category}
            </a>
          </button>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>&#8250;</button>
    </div>
  );
}

export default Scroll;