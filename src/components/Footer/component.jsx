import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import logo from '../../assets/logo-wbg.png';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand" data-aos="fade-up" data-aos-delay="100">
          <div className="footer-logo">
            <img src={logo} alt="Kausar Restaurant Logo" />
            <h3>KAUSAR<br/>RESTAURANT</h3>
          </div>
          <p>Experience authentic Arabic cuisine across Kerala. Serving the finest Mandi since day one.</p>
          <div className="social-icons" style={{display: 'flex', gap: '15px', marginTop: '20px'}}>
            <a href="https://facebook.com/kausarresto" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/kausar_mandi" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="https://wa.me/919072647474" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Our Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/guestbook">Guestbook</Link></li>
            <li><Link to="/reservation">Reservations</Link></li>
          </ul>
        </div>
        
        <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
          <h4>Our Branches</h4>
          <ul>
            <li><Link to="/contact">Manjeri (Main)</Link></li>
            <li><Link to="/contact">Kozhikode (Calicut)</Link></li>
            <li><Link to="/contact">Kottakkal</Link></li>
            <li><Link to="/contact">Tirur</Link></li>
            <li><Link to="/contact">Kondotti</Link></li>
          </ul>
        </div>
        
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h4>Contact Info</h4>
          <ul>
            <li><MapPin size={16} style={{marginRight: '8px', minWidth: '16px'}} /> Santhigramam, Thurakkal, Manjeri (Main)</li>
            <li><Phone size={16} style={{marginRight: '8px', minWidth: '16px'}} /> +91 90726 47474</li>
            <li><Mail size={16} style={{marginRight: '8px', minWidth: '16px'}} /> info@kausarrestaurant.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 KAUSAR RESTAURANT. All Rights Reserved.</p>
        <p>Made with <Heart size={14} fill="currentColor" style={{margin: '0 4px', verticalAlign: 'middle'}} /> in Kerala</p>
      </div>
    </footer>
  );
};

export default Footer;
