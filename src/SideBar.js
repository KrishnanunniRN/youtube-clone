import React, { useState } from 'react';
import './SideBar.css';
import { FaBars, FaHome, FaPlay, FaRegCompass, FaShoppingBag, FaMusic, FaFilm, FaGamepad, FaNewspaper, FaHeart, FaClock, FaList, FaFire, FaHistory } from "react-icons/fa";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      {/* Top - Menu Button */}
      <div className="menu-button" onClick={handleToggle}>
        <FaBars size={24} />
      </div>

      {/* Scrollable Sidebar Content */}
      <div className="flex-1">
        {/* Home / Shorts / Subscriptions */}
        <div className="section">
          <div className="section-item">
            <FaHome size={24} />
            {isOpen && <span>Home</span>}
          </div>
          <div className="section-item">
            <FaPlay size={24} />
            {isOpen && <span>Shorts</span>}
          </div>
          <div className="section-item">
            <FaRegCompass size={24} />
            {isOpen && <span>Subscriptions</span>}
          </div>
        </div>

        <hr style={{ borderColor: 'gray' }} />

        {/* You Section */}
        {isOpen && (
          <div className="section">
            <div className="section-title">You</div>
            <div className="section-item"><FaHistory /><span>History</span></div>
            <div className="section-item"><FaList /><span>Playlists</span></div>
            <div className="section-item"><FaClock /><span>Watch later</span></div>
            <div className="section-item"><FaHeart /><span>Liked videos</span></div>
          </div>
        )}

        <hr style={{ borderColor: 'gray' }} />

        {/* Explore Section */}
        {isOpen && (
          <div className="section">
            <div className="section-title">Explore</div>
            <div className="section-item"><FaFire /><span>Trending</span></div>
            <div className="section-item"><FaShoppingBag /><span>Shopping</span></div>
            <div className="section-item"><FaMusic /><span>Music</span></div>
            <div className="section-item"><FaFilm /><span>Movies</span></div>
            <div className="section-item"><FaGamepad /><span>Gaming</span></div>
            <div className="section-item"><FaNewspaper /><span>News</span></div>
            <div className="section-item"><FaRegCompass /><span>Technology</span></div>
            <div className="section-item"><FaFilm /><span>TV Shows</span></div>
            <div className="section-item"><FaMusic /><span>Podcasts</span></div>
            <div className="section-item"><FaHeart /><span>Health & Fitness</span></div>
            <div className="section-item"><FaGamepad /><span>Esports</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
