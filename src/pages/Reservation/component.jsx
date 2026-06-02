import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { User, Mail, Phone, Users, Calendar, Clock, MessageSquare, MapPin } from 'lucide-react';
import { branches } from '../../details/branches';
import heroImg from '../../assets/motton.png';
import PageHero from '../../components/PageHero/component';
import './style.scss';

const ReservationPage = () => {
  const location = useLocation();
  const isDedicatedPage = location.pathname === '/reservation';
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);

  return (
    <div className="reservation-page-container">
      {isDedicatedPage && <PageHero title="Reservations" subtitle="Book A Table" image={heroImg} />}
      <section className="reservation-section page-section bg-white" id="reservations" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Book A Table</span>
          <h2>Make a <span>Reservation</span></h2>
          <div className="divider"></div>
          <p className="subtitle" style={{color: 'var(--text)'}}>Reserve your table and enjoy an unforgettable dining experience</p>
        </div>
        
        <div className="reservation-form-container" data-aos="zoom-in" data-aos-delay="100">
          <form className="reservation-form">
            <div className="form-row">
              <div className="form-group full-width" style={{marginBottom: '0'}}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}><MapPin size={16} style={{verticalAlign: 'middle', marginRight: '4px'}}/> Select Branch</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {branches.map(branch => (
                    <button
                      key={branch.id}
                      type="button"
                      onClick={() => setActiveBranchId(branch.id)}
                      style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: '1px solid var(--primary)',
                        backgroundColor: activeBranchId === branch.id ? 'var(--primary)' : 'transparent',
                        color: activeBranchId === branch.id ? '#1d1914' : 'var(--primary)',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        flex: '1 1 auto',
                        minWidth: '90px'
                      }}
                    >
                      {branch.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
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
                <select style={{ backgroundColor: '#fff', color: '#000', paddingLeft: '10px' }}>
                  <option style={{color: '#000'}}>2 Guests</option>
                  <option style={{color: '#000'}}>3 Guests</option>
                  <option style={{color: '#000'}}>4 Guests</option>
                  <option style={{color: '#000'}}>5+ Guests</option>
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
