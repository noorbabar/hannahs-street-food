import React, { useEffect } from 'react';
import './Navigation.css';

function Navigation() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e) => {
      e.preventDefault();
      
      const targetId = e.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <a href="#food">Food</a>
        <a href="#coffees">Coffee</a>
        <a href="#drinks">Drinks</a>
        <a href="#icecreams">Ice Creams</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navigation;