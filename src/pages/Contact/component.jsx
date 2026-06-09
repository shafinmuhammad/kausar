import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { branches } from '../../details/branches';
import heroImg from '../../assets/banner-1.png';
import PageHero from '../../components/PageHero/component';
import './style.scss';

const ContactPage = () => {
  const location = useLocation();
  const isDedicatedPage = location.pathname === '/contact';
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);
  const activeBranch = branches.find(b => b.id === activeBranchId) || branches[0];

  return (
    <div className="contact-page-container">
      {isDedicatedPage && <PageHero title="Contact Us" subtitle="Get In Touch" image={heroImg} />}
      <section className="contact-section page-section bg-white" id="contact" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Get In Touch</span>
          <h2>Visit <span>Us</span></h2>
          <div className="divider"></div>
        </div>
        
        <div className="contact-content">
          <div className="contact-info" data-aos="fade-right" data-aos-delay="100">
            <div className="branch-selector-wrapper" style={{ marginBottom: '30px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: 'var(--primary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Branch</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {branches.map(branch => (
                  <button
                    key={branch.id}
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
                      minWidth: '100px'
                    }}
                  >
                    {branch.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="info-card">
              <div className="icon-circle"><MapPin size={24} /></div>
              <div>
                <h4>Address</h4>
                <p>{activeBranch.address}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-circle"><Phone size={24} /></div>
              <div>
                <h4>Phone</h4>
                <p>{activeBranch.phone}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-circle"><Mail size={24} /></div>
              <div>
                <h4>Email</h4>
                <p>{activeBranch.email}</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-circle"><Clock size={24} /></div>
              <div>
                <h4>Opening Hours</h4>
                <p>{activeBranch.hours}</p>
              </div>
            </div>
            <div className="contact-buttons">
              <button className="whatsapp-btn" onClick={() => window.open(`https://wa.me/${activeBranch.phone.replace(/[^0-9]/g, '')}`, '_blank')}>Chat on WhatsApp</button>
              <button className="call-btn full-width" onClick={() => window.location.href = `tel:${activeBranch.phone}`}>Call Now</button>
            </div>
          </div>
          <div className="contact-map" data-aos="fade-left" data-aos-delay="200">
            <div className="map-placeholder">
              <iframe 
                key={activeBranch.id}
                src={`https://maps.google.com/maps?q=${activeBranch.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`} 
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
    </div>
  );
};

export default ContactPage;
