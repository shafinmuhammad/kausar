import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useIsMobile } from '../../hooks/useIsMobile';
import img1 from '../../assets/circle.png';
import img2 from '../../assets/beefcircle.png';
import img3 from '../../assets/motton.png';
import './style.scss';

const Hero = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  const [hoveredImage, setHoveredImage] = useState(null);

  const defaultText = {
    title: "Savor the Tradition",
    subtitle: "Step into our restaurant and discover a dining experience where authentic flavors and warm hospitality meet. Join us to savor expertly crafted Arabic Mandi dishes in a welcoming atmosphere across 5 locations in Kerala."
  };
  
  const texts = {
    1: {
      title: "Chicken Alfaham Mandi",
      subtitle: "Experience the smoky perfection of our signature Chicken Alfaham Mandi, marinated in secret Arabic spices and char-grilled to juicy perfection."
    },
    2: {
      title: "Signature Beef Mandi",
      subtitle: "Indulge in our rich and tender Beef Mandi, slow-cooked for hours to melt-in-your-mouth perfection over aromatic basmati rice."
    },
    3: {
      title: "Authentic Mutton Mandi",
      subtitle: "Taste the royal Yemeni heritage with our premium Mutton Mandi, featuring fall-off-the-bone meat served over perfectly seasoned yellow rice."
    }
  };

  const currentText = hoveredImage ? texts[hoveredImage] : defaultText;

  const handleImageClick = () => {
    if (!isMobile) {
      navigate('/menu');
    }
  };

  const renderTitle = (title) => {
    const words = title.split(' ');
    if (words.length <= 1) return title;
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span className="highlight-word">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="app-container" id="home">
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <main className="hero-section">
        <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
          <div key={hoveredImage || 'default'} className="animate-slide-in-text">
            <h1>{renderTitle(currentText.title)}</h1>
            <p className="hero-description">
              {currentText.subtitle}
            </p>
          </div>
          
          {isMobile ? (
            <>
              <div className="mobile-hero-image-wrapper">
                <img src={img1} alt="Chicken Alfaham Mandi" className="mobile-hero-image" />
              </div>
              <div className="hero-btn-container mobile-btns">
                <Link to="/reservation" style={{textDecoration: 'none', width: '100%'}}>
                  <button className="btn-hero btn-hero-primary full-width">ENQUIRE</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="hero-btn-container">
                <Link to="/menu" style={{textDecoration: 'none'}}>
                  <button className="btn-hero btn-hero-primary">ORDER ONLINE</button>
                </Link>
                <Link to="/reservation" style={{textDecoration: 'none'}}>
                  <button className="btn-hero btn-hero-secondary">BOOK A TABLE</button>
                </Link>
              </div>
              
              <div className="hero-stats" data-aos="fade-up" data-aos-delay="300">
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <div className="stat-text-group">
                    <span className="stat-label">Branches</span>
                    <Link to="/contact" className="stat-link">Find a branch →</Link>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <div className="stat-text-group">
                    <span className="stat-label">Years of</span>
                    <span className="stat-sublabel">Heritage</span>
                  </div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <span className="stat-number">3</span>
                  <div className="stat-text-group">
                    <span className="stat-label">Mandi</span>
                    <span className="stat-sublabel">Styles</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        
        <div 
          className="hero-image-container stacked-container" 
          data-aos="zoom-in" 
          data-aos-delay="400"
          onClick={handleImageClick}
          style={{ cursor: !isMobile ? 'pointer' : 'default' }}
        >
          <div 
            className="hero-stacked-img img-3" 
            onMouseEnter={() => setHoveredImage(3)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={img3} alt="Mutton Mandi" />
          </div>
          <div 
            className="hero-stacked-img img-2"
            onMouseEnter={() => setHoveredImage(2)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={img2} alt="Beef Mandi" />
          </div>
          <div 
            className="hero-stacked-img img-1"
            onMouseEnter={() => setHoveredImage(1)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img src={img1} alt="Chicken Alfaham Mandi" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
