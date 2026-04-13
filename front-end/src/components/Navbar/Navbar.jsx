import React, { useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = ({ isAllProducts, onGoHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    setIsMobileMenuOpen(false); // Fechar menu mobile ao clicar
    if (isAllProducts) {
      e.preventDefault();
      if (onGoHome) onGoHome();
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${(scrolled || isAllProducts || isMobileMenuOpen) ? 'scrolled' : ''}`}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div className="logo" style={{ height: '40px', cursor: 'pointer', zIndex: 1002 }}>
          <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>
            <img src={assets.logo} alt="Mansão Maromba" style={{ height: '100%', filter: 'brightness(0) invert(1)' }} />
          </a>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Inicio</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Sobre</a></li>
          <li><a href="#products" onClick={(e) => handleNavClick(e, 'products')}>Produtos</a></li>
          <li><a href="#footer" onClick={(e) => handleNavClick(e, 'footer')}>Contato</a></li>
        </ul>

        <button className="btn btn-outline desktop-btn" style={{ padding: '8px 20px', fontSize: '11px' }}>
          Comprar Agora
        </button>

        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
