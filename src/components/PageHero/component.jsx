import React from 'react';
import './style.scss';

const PageHero = ({ title, subtitle, image }) => {
  return (
    <div className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay"></div>
      <div className="page-hero-content" data-aos="fade-up">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;
