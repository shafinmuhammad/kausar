import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';
import { arabicMenu, chineseMenu } from '../../details/menu';
import { branches } from '../../details/branches';
import heroImg from '../../assets/beefcircle.png';
import PageHero from '../../components/PageHero/component';
import './style.scss';

const MenuPage = () => {
  const location = useLocation();
  const isDedicatedPage = location.pathname === '/menu';
  const [activeTab, setActiveTab] = useState('arabic');
  const [activeBranchId, setActiveBranchId] = useState(branches[0].id);

  const currentMenu = activeTab === 'arabic' ? arabicMenu : chineseMenu;

  return (
    <div className="menu-page-container">
      {isDedicatedPage && <PageHero title="Our Menu" subtitle="Taste the Best" image={heroImg} />}
      <section className="menu-section page-section bg-white" id="menu" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Taste the Best</span>
          <h2>Discover Our <span>Menu</span></h2>
          <div className="divider"></div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '30px' }} data-aos="fade-up">
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
                transition: 'all 0.3s ease'
              }}
            >
              {branch.name}
            </button>
          ))}
        </div>
        
        <div className="menu-tabs" data-aos="fade-up" data-aos-delay="100">
          <button 
            className={`tab ${activeTab === 'arabic' ? 'active' : ''}`}
            onClick={() => setActiveTab('arabic')}
            style={activeTab !== 'arabic' ? {color: 'var(--text)', borderColor: 'rgba(0,0,0,0.2)'} : {}}
          >
            Arabic Menu
          </button>
          <button 
            className={`tab ${activeTab === 'chinese' ? 'active' : ''}`}
            onClick={() => setActiveTab('chinese')}
            style={activeTab !== 'chinese' ? {color: 'var(--secondary)', borderColor: 'rgba(0,0,0,0.2)'} : {}}
          >
            Chinese Menu
          </button>
        </div>

        <div className="menu-grid">
          {currentMenu.map((item, index) => (
            <div className="menu-card" key={index} tabIndex={0} data-aos="fade-up" data-aos-delay={100 * (index % 4 + 1)}>
              <div className="card-header">
                <h3>{item.name}</h3>
                {item.popular && <span className="popular-tag"><Star size={12} style={{marginRight: '4px'}} /> Popular</span>}
              </div>
              <p>{item.description}</p>
              <div className="card-footer">
                <span className="price">{item.price}</span>
                <button className="order-btn">Order Now</button>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <p>Can't decide? Let us help you!</p>
          <button className="whatsapp-btn">Chat on WhatsApp</button>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
