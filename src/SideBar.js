import React, { useState } from 'react';
import './SideBar.css'; 
import { FaBars, FaHome, FaPlay, FaRegCompass, FaShoppingBag, FaMusic, FaFilm, FaGamepad, FaNewspaper, FaHeart, FaClock, FaList, FaFire, FaHistory } from "react-icons/fa";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`vertical-sidebar bg-dark text-light p-3 ${isOpen ? "expanded" : "collapsed"}`}>
      {/* Top - Menu Button */}
      <div className="menu-button mb-3" onClick={handleToggle}>
        <FaBars size={24} />
      </div>

      {/* Sidebar Content */}
      <div>
        {/* Home / Shorts / Subscriptions */}
        <div className="mb-3">
          <div className="sidebar-item">
            <FaHome size={20} className="me-2" />
            {isOpen && <span>Home</span>}
          </div>
          <div className="sidebar-item">
            <FaPlay size={20} className="me-2" />
            {isOpen && <span>Shorts</span>}
          </div>
          <div className="sidebar-item">
            <FaRegCompass size={20} className="me-2" />
            {isOpen && <span>Subscriptions</span>}
          </div>
        </div>

        <hr className="text-secondary" />

        {/* You Section */}
        {isOpen && (
          <div className="mb-3">
            <h6 className="text-muted">You</h6>
            <div className="sidebar-item"><FaHistory size={20} className="me-2" /><span>History</span></div>
            <div className="sidebar-item"><FaList size={20} className="me-2" /><span>Playlists</span></div>
            <div className="sidebar-item"><FaClock size={20} className="me-2" /><span>Watch later</span></div>
            <div className="sidebar-item"><FaHeart size={20} className="me-2" /><span>Liked videos</span></div>
          </div>
        )}

        <hr className="text-secondary" />

        {/* Explore Section */}
        {isOpen && (
          <div className="mb-3">
            <h6 className="text-muted">Explore</h6>
            <div className="sidebar-item"><FaFire size={20} className="me-2" /><span>Trending</span></div>
            <div className="sidebar-item"><FaShoppingBag size={20} className="me-2" /><span>Shopping</span></div>
            <div className="sidebar-item"><FaMusic size={20} className="me-2" /><span>Music</span></div>
            <div className="sidebar-item"><FaFilm size={20} className="me-2" /><span>Movies</span></div>
            <div className="sidebar-item"><FaGamepad size={20} className="me-2" /><span>Gaming</span></div>
            <div className="sidebar-item"><FaNewspaper size={20} className="me-2" /><span>News</span></div>
            <div className="sidebar-item"><FaRegCompass size={20} className="me-2" /><span>Technology</span></div>
            <div className="sidebar-item"><FaFilm size={20} className="me-2" /><span>TV Shows</span></div>
            <div className="sidebar-item"><FaMusic size={20} className="me-2" /><span>Podcasts</span></div>
            <div className="sidebar-item"><FaHeart size={20} className="me-2" /><span>Health & Fitness</span></div>
            <div className="sidebar-item"><FaGamepad size={20} className="me-2" /><span>Esports</span></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;