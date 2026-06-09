import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/logo-round-2.png';
import { useIsMobile } from '../../hooks/useIsMobile';
import './style.scss';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/menu', label: 'Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function HeaderBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  return (
    <motion.nav
      className={`kh-nav ${scrolled ? 'kh-nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to="/" className="kh-nav__brand">
        <img src={logo} alt="Kausar" className="kh-nav__logo" />
        <span className="kh-nav__name">Kausar Mandhi</span>
      </Link>

      {!isMobile ? (
        <>
          <ul className="kh-nav__links">
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={`kh-nav__link ${location.pathname === to ? 'active' : ''}`}>
                  {label}
                  <motion.span
                    className="kh-nav__underline"
                    layoutId="nav-underline"
                    style={{ display: location.pathname === to ? 'block' : 'none' }}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/reservation" className="btn-primary" style={{ fontSize: '12px', padding: '10px 24px', textDecoration: 'none' }}>
            Enquire
          </Link>
        </>
      ) : (
        <div className="kh-nav__mobile">
          <button
            className="kh-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`kh-hamburger__bar ${menuOpen ? 'open' : ''}`} />
            <span className={`kh-hamburger__bar ${menuOpen ? 'open' : ''}`} />
            <span className={`kh-hamburger__bar ${menuOpen ? 'open' : ''}`} />
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="kh-mobile-menu"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
              >
                <ul>
                  {NAV_LINKS.map(({ to, label }, i) => (
                    <motion.li
                      key={to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                      <Link to={to} className={location.pathname === to ? 'active' : ''}>
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/reservation" className="kh-btn kh-btn--gold" style={{ marginTop: '8px' }}>
                  Enquire Now
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.nav>
  );
}
