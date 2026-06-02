import React from 'react';
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
          <p>Experience authentic Arabic cuisine in the heart of Manjeri. Serving the finest Mandi since day one.</p>
          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">ig</a>
            <a href="#">tw</a>
          </div>
        </div>
        
        <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reservations">Reservations</a></li>
          </ul>
        </div>
        
        <div className="footer-links" data-aos="fade-up" data-aos-delay="300">
          <h4>Our Specialties</h4>
          <ul>
            <li><a href="#menu">Chicken Mandi</a></li>
            <li><a href="#menu">Beef Mandi</a></li>
            <li><a href="#menu">Mutton Mandi</a></li>
            <li><a href="#menu">Peri Peri AL Faham</a></li>
            <li><a href="#menu">Zurbian Rice</a></li>
          </ul>
        </div>
        
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h4>Contact Info</h4>
          <ul>
            <li><MapPin size={16} style={{marginRight: '8px'}} /> Santhigramam, Thurakkal, Manjeri, Kerala 676121</li>
            <li><Phone size={16} style={{marginRight: '8px'}} /> +91 90726 47474</li>
            <li><Mail size={16} style={{marginRight: '8px'}} /> info@kausarrestaurant.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 KAUSAR RESTAURANT. All Rights Reserved.</p>
        <p>Made with <Heart size={14} fill="currentColor" style={{margin: '0 4px', verticalAlign: 'middle'}} /> in Manjeri</p>
      </div>
    </footer>
  );
};

export default Footer;
