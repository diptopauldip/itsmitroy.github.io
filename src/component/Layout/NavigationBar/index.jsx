import React, { useEffect, useState } from "react";
import "./navigationbar.css";
import { Link } from "gatsby";

const NavigationBar = () => {
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
    <div className='header-sticky'>
      <div className='common-container'>
        <div className='nav-container'>
          <div className='logo'>
            <Link to='/'>MR</Link>
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
      </div>
    </div>
  );
};

export default NavigationBar;
