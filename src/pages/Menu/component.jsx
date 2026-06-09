import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';
import { arabicMenu, chineseMenu } from '../../details/menu';
import { branches } from '../../details/branches';
import heroImg from '../../assets/beefcircle.png';
import swiggyIcon from '../../assets/swiggy.svg';
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
      <section className="menu-section page-section bg-menu" id="menu" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Taste the Best</span>
          <h2>Discover Our <span>Menu</span></h2>
          <div className="divider"></div>
        </div>

        <div className="branch-selector-container" data-aos="fade-up">
          {branches.map(branch => (
            <button
              key={branch.id}
              onClick={() => setActiveBranchId(branch.id)}
              className={`branch-select-btn ${activeBranchId === branch.id ? 'active' : ''}`}
            >
              {branch.name}
            </button>
          ))}
        </div>
        
        <div className="menu-tabs" data-aos="fade-up" data-aos-delay="100">
          <button 
            className={`tab ${activeTab === 'arabic' ? 'active' : ''}`}
            onClick={() => setActiveTab('arabic')}
          >
            Arabic Menu
          </button>
          <button 
            className={`tab ${activeTab === 'chinese' ? 'active' : ''}`}
            onClick={() => setActiveTab('chinese')}
          >
            Chinese Menu
          </button>
        </div>

        {/* Elegant Table d'hôte Menu Container */}
        <div className="menu-paper-card" data-aos="fade-up" data-aos-delay="200">
          <div className="menu-paper-inner">
            {/* Corner decorations */}
            <div className="corner-decor top-left"></div>
            <div className="corner-decor top-right"></div>
            <div className="corner-decor bottom-left"></div>
            <div className="corner-decor bottom-right"></div>

            {/* Menu Header Ornament */}
            <div className="menu-paper-header">
              <svg className="flourish flourish-left" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12C8 12 12 4 18 4C24 4 28 10 32 10C34 10 34 8 33 7C32 6 30 7 30 9C30 11 32 12 34 11" stroke="#c59d5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="4" r="2.5" fill="#c59d5f"/>
              </svg>
              
              <h3 className="menu-paper-title">Kausar Mandhi</h3>
              
              <svg className="flourish flourish-right" width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12C8 12 12 4 18 4C24 4 28 10 32 10C34 10 34 8 33 7C32 6 30 7 30 9C30 11 32 12 34 11" stroke="#c59d5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="4" r="2.5" fill="#c59d5f"/>
              </svg>
            </div>

            <div className="menu-paper-divider">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>

            {/* Menu Items */}
            <div className="menu-paper-list">
              {currentMenu.map((item, index) => (
                <div className="menu-paper-item" key={index}>
                  <div className="item-name-group">
                    <span className="item-name">{item.name}</span>
                    {item.popular && (
                      <span className="item-badge">
                        <Star size={8} fill="currentColor" style={{ marginRight: '3px' }} />
                        POPULAR
                      </span>
                    )}
                  </div>
                  <div className="item-dots"></div>
                  <span className="item-description">{item.description}</span>
                  <span className="item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="menu-footer-note" data-aos="fade-up">
          Can't decide? Our staff are happy to guide you.
        </div>

        <div className="menu-cta" data-aos="fade-up">
          <div style={{display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap'}}>
            <a href="https://wa.me/919072647474" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
              <button className="whatsapp-btn">Chat on WhatsApp</button>
            </a>
            <a href="https://www.swiggy.com/search?query=Kausar+Restaurant" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}>
              <button className="whatsapp-btn" style={{backgroundColor: '#fc8019', color: 'white', display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px'}}>
                <img src={swiggyIcon} alt="Swiggy" width="24" height="24" style={{ filter: 'brightness(0) invert(1)' }} />
                Swiggy
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;
