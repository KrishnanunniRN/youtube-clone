import React, { useRef } from 'react';
import './Scroll.css';

function SideBar() {
  const scrollRef = useRef(null);

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const categories = [
    "All", "News", "Music", "AI", "APIs", "Tamil Cinema",
    "Live", "Thrillers", "Dramedy", "Science Fiction",
    "Gaming", "Cricket", "Databases", "Indian Army",
    "Photography", "Fitness", "Education", "Travel",
    "Finance", "Cooking", "Space", "Art"
  ];
  

  return (
    <div className="sidebar-container">
      <div className="sidebar-scroll" ref={scrollRef}>
        {categories.map((category, index) => (
          <button key={index} className={`sidebar-button ${index === 0 ? 'active' : ''}`}>
            <a href={`#${category}`} className="sidebar-link">{category}</a>
          </button>
        ))}
      </div>
      <button className="scroll-right" onClick={scrollRight}>➔</button>
    </div>
  );
}

export default SideBar;
