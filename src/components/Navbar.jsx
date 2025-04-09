import React, { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Check if the user has scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <a href="#home" className="logo-link">
            <span className="logo-tech">Learn</span> Tech with Muskan
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={menuOpen ? 'icon-close' : 'icon-menu'}></span>
        </div>

        {/* Navbar Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
