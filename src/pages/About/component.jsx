import React from 'react';
import { useLocation } from 'react-router-dom';
import { ChefHat, Clock, Star, Heart } from 'lucide-react';
import building from '../../assets/building.png';
import mandiDish from '../../assets/mandi-dish.png';
import banner1 from '../../assets/banner-1.png';
import banner1Mini from '../../assets/banner-1-mini.png';
import PageHero from '../../components/PageHero/component';
import { useIsMobile } from '../../hooks/useIsMobile';
import './style.scss';

const AboutPage = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const isDedicatedPage = location.pathname === '/about';
  
  const heroImg = isMobile ? banner1Mini : banner1;

  return (
    <div className="about-page-container">
      {isDedicatedPage && <PageHero title="About Us" subtitle="A Culinary Journey" image={heroImg} />}
      <section className="about-section page-section bg-white" id="about" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Our Story</span>
          <h2>Welcome To KAUSAR RESTAURANT</h2>
          <div className="divider"></div>
        </div>
      
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <div className="about-text">
          <p>Originating from our roots in Santhigramam, Manjeri, KAUSAR RESTAURANT has grown into a beloved destination for food lovers across Kerala. We specialize in authentic Arabic Mandi dishes—Chicken, Beef, and Mutton—each slow-cooked to perfection with aromatic spices and served on a bed of fragrant basmati rice.</p>
          <p>What started as a single branch in Manjeri has now blossomed into 5 thriving locations, including Calicut, Kottakkal, Tirur, and Kondotti. Our Chicken Mandi stands out as a succulent masterpiece, while our Beef and Mutton Mandi deliver the authentic essence of tender, spice-rich traditional cooking.</p>
          <a href="#menu" className="explore-link">Explore Our Menu &rarr;</a>
        </div>
        <div className="about-image-container">
          <div className="image-overlay">
            <h3>A Culinary Journey</h3>
            <p>From Manjeri to across Kerala</p>
          </div>
          <img src={building} alt="Restaurant Interior" onError={(e) => e.target.src = mandiDish} />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
          <span className="icon"><ChefHat size={32} /></span>
          <h4>Expert Chefs</h4>
          <p>Traditional recipes passed down through generations</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
          <span className="icon"><Clock size={32} /></span>
          <h4>Slow-Cooked</h4>
          <p>Each dish prepared with patience and precision</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
          <span className="icon"><Star size={32} /></span>
          <h4>Quality First</h4>
          <p>Only the finest ingredients and aromatic spices</p>
        </div>
        <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
          <span className="icon"><Heart size={32} /></span>
          <h4>Made with Love</h4>
          <p>Every plate served with warmth and care</p>
        </div>
      </div>
    </section>
      </div>
  );
};

export default AboutPage;
