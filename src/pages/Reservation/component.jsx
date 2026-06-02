import React from 'react';
import { User, Mail, Phone, Users, Calendar, Clock, MessageSquare } from 'lucide-react';
import './style.scss';

const ReservationPage = () => {
  return (
    <div className="reservation-page-container">
    <section className="reservation-section page-section bg-black" id="reservations">
      <div className="section-header dark" data-aos="fade-up">
        <span className="badge dark-badge">Book A Table</span>
        <h2>Make a <span>Reservation</span></h2>
        <div className="divider"></div>
        <p className="subtitle">Reserve your table and enjoy an unforgettable dining experience</p>
      </div>
      
      <div className="reservation-form-container" data-aos="zoom-in" data-aos-delay="100">
        <form className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label><User size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label><Mail size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><Phone size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Phone Number</label>
              <input type="tel" placeholder="+91 12345 67890" />
            </div>
            <div className="form-group">
              <label><Users size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Number of Guests</label>
              <select>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label><Calendar size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label><Clock size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-group full-width">
            <label><MessageSquare size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Special Requests (Optional)</label>
            <textarea placeholder="Any dietary restrictions or special occasions?" rows="4"></textarea>
          </div>
          <button type="button" className="confirm-btn">Confirm Reservation</button>
          <p className="form-footer-text">We'll confirm your reservation via phone or email within 24 hours</p>
        </form>
      </div>
    </section>
      </div>
  );
};

export default ReservationPage;
