import React, { useEffect, useState } from "react";
import "./toggle-menu-mobile-first-complete.css";
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
          <div className='logo'>Logo</div>
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
                <Link to='#'>Home</Link>
              </li>
              <li onClick={handleNavLinkClick}>
                <Link to='#'>About</Link>
              </li>
              <li onClick={handleNavLinkClick}>
                <Link to='#'>Contact</Link>
              </li>
              <li onClick={handleNavLinkClick}>
                <Link to='#'>Services</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
