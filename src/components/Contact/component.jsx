import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './style.scss';

const Contact = () => {
  return (
    <section className="contact-section page-section bg-white" id="contact">
      <div className="section-header" data-aos="fade-up">
        <span className="badge">Get In Touch</span>
        <h2>Visit <span>Us</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="contact-content">
        <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
          <div className="info-card">
            <div className="icon-circle"><MapPin size={24} /></div>
            <div>
              <h4>Address</h4>
              <p>Santhigramam, Thurakkal, Manjeri, Kerala 676121, India</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Phone size={24} /></div>
            <div>
              <h4>Phone</h4>
              <p>+91 90726 47474</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Mail size={24} /></div>
            <div>
              <h4>Email</h4>
              <p>info@kausarrestaurant.com</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Clock size={24} /></div>
            <div>
              <h4>Opening Hours</h4>
              <p>Daily: 11:00 AM - 11:00 PM</p>
            </div>
          </div>
          <div className="contact-buttons">
            <button className="whatsapp-btn full-width">Chat on WhatsApp</button>
            <button className="call-btn full-width">Call Now</button>
          </div>
        </div>
        <div className="contact-map" data-aos="fade-left" data-aos-delay="200">
          <div className="map-placeholder">
            <iframe 
              src="https://maps.google.com/maps?q=KAUSAR+RESTAURANT,+Santhigramam,+Thurakkal,+Manjeri,+Kerala+676121&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0, borderRadius: '12px'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
