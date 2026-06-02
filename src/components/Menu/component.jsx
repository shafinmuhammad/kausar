import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { arabicMenu, chineseMenu } from '../../details/menu';
import './style.scss';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('arabic');

  const currentMenu = activeTab === 'arabic' ? arabicMenu : chineseMenu;

  return (
    <section className="menu-section page-section bg-primary" id="menu">
      <div className="section-header dark" data-aos="fade-up">
        <span className="badge dark-badge">Taste the Best</span>
        <h2>Discover Our <span>Menu</span></h2>
        <div className="divider"></div>
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

      <div className="menu-grid">
        {currentMenu.map((item, index) => (
          <div className="menu-card" key={index} data-aos="fade-up" data-aos-delay={100 * (index % 4 + 1)}>
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
  );
};

export default Menu;
