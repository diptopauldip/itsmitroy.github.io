import React, { useEffect, useState } from "react";
import "./navbar.module.css";
import { Link } from "gatsby";

// Recommended: Wrap this navbar inside a common container with common width and then maybe wrap them inside a header wrapper that will be sticky, so that navbar and header remains at top fixed.

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Add event listener to handle window resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when the toggle state changes
    if (!isMenuOpen && window.innerWidth < 768) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  return (
    <div className='nav-container'>
      <div className='logo'>
        <a href='/'>Mithun Roy</a>
      </div>
      <div
        className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
        onClick={handleToggleClick}
      >
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <nav>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li onClick={handleNavLinkClick}>
            <Link to='/'>Home</Link>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to='/about'>About</Link>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to='/research'>Research</Link>
          </li>
          <li onClick={handleNavLinkClick}>
            <Link to='/blog'>Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
