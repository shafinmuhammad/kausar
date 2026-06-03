import React from 'react';
import mandiDish from '../../assets/mandi-dish.png';
import round from '../../assets/round.jpg';
import hero from '../../assets/circle.png';
import './style.scss';

const Gallery = () => {
  return (
    <section className="gallery-section page-section bg-black" id="gallery">
      <div className="section-header" data-aos="fade-up">
        <span className="badge">Visual Feast</span>
        <h2>Our <span>Gallery</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="gallery-grid">
        <img src={mandiDish} alt="Gallery item" className="gallery-img" tabIndex={0} data-aos="zoom-in" data-aos-delay="100" />
        <img src={round} alt="Gallery item" className="gallery-img" tabIndex={0} onError={(e) => e.target.src = mandiDish} data-aos="zoom-in" data-aos-delay="200" />
        <img src={hero} alt="Gallery item" className="gallery-img" tabIndex={0} onError={(e) => e.target.src = mandiDish} data-aos="zoom-in" data-aos-delay="300" />
        <img src={mandiDish} alt="Gallery item" className="gallery-img" tabIndex={0} data-aos="zoom-in" data-aos-delay="400" />
        <img src={round} alt="Gallery item" className="gallery-img" tabIndex={0} onError={(e) => e.target.src = mandiDish} data-aos="zoom-in" data-aos-delay="500" />
        <img src={hero} alt="Gallery item" className="gallery-img" tabIndex={0} onError={(e) => e.target.src = mandiDish} data-aos="zoom-in" data-aos-delay="600" />
      </div>
    </section>
  );
};

export default Gallery;
