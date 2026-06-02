import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo-wbg.png';
import { useIsMobile } from '../../hooks/useIsMobile';
import './style.scss';

const HeaderBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={logo} alt="Kausar Restaurant Logo" className="logo" />
          <span className='company-name' style={{ color: 'white', marginLeft: '10px' }}>Kausar Resto</span>
        </Link>
      </div>

      {isMobile ? (
        <div className="mobile-menu-container">
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          {menuOpen && (
            <div className="mobile-dropdown">
              <ul className="nav-links-mobile">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>HOME</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>ABOUT</Link></li>
                <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''} onClick={() => setMenuOpen(false)}>MENU</Link></li>
                <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''} onClick={() => setMenuOpen(false)}>GALLERY</Link></li>
                <li><Link to="/guestbook" className={location.pathname === '/guestbook' ? 'active' : ''} onClick={() => setMenuOpen(false)}>GUESTBOOK</Link></li>
                <li><Link to="/reservation" className={location.pathname === '/reservation' ? 'active' : ''} onClick={() => setMenuOpen(false)}>RESERVATION</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
              </ul>
              <Link to="/reservation" className="btn-primary mobile-call-btn" style={{textAlign: 'center', textDecoration: 'none', display: 'block'}} onClick={() => setMenuOpen(false)}>Enquire</Link>
            </div>
          )}
        </div>
      ) : (
        <>
          <ul className="nav-links">
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/menu" className={location.pathname === '/menu' ? 'active' : ''}>Menu</Link></li>
            <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link></li>
            <li><Link to="/guestbook" className={location.pathname === '/guestbook' ? 'active' : ''}>Guestbook</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
          <Link to="/reservation" className="btn-primary" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center'}}>Enquire</Link>
        </>
      )}
    </nav>
  );
};

export default HeaderBar;
