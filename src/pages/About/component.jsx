import React from 'react';
import { ChefHat, Clock, Star, Heart } from 'lucide-react';
import banner2 from '../../assets/banner-2.png';
import mandiDish from '../../assets/mandi-dish.png';
import './style.scss';

const AboutPage = () => {
  return (
    <div className="about-page-container">
    <section className="about-section page-section bg-white" id="about">
      <div className="section-header" data-aos="fade-up">
        <span className="badge">Our Story</span>
        <h2>Welcome To KAUSAR RESTAURANT</h2>
        <div className="divider"></div>
      </div>
      
      <div className="about-content" data-aos="fade-up" data-aos-delay="200">
        <div className="about-text">
          <p>KAUSAR RESTAURANT, located in Santhigramam, Manjeri, is a hidden gem for food lovers. Renowned for its exceptional Mandi dishes, this restaurant specializes in Chicken, Beef, and Mutton Mandi, each slow-cooked to perfection with aromatic spices and served on a bed of fragrant basmati rice.</p>
          <p>At KAUSAR, the Chicken Mandi stands out—a succulent marinated chicken is meticulously cooked and served over a bed of fragrant rice, delivering a perfect balance of flavor. For beef lovers, the Beef Mandi is a must-try, featuring tender beef that has been slow-cooked with aromatic spices, all complemented by vibrant basmati rice. Not to be missed is the Mutton Mandi, where you can experience the authentic essence of tender mutton, rich with spices.</p>
          <a href="#menu" className="explore-link">Explore Our Menu &rarr;</a>
        </div>
        <div className="about-image-container">
          <div className="image-overlay">
            <h3>A Hidden Gem</h3>
            <p>in the Heart of Manjeri</p>
          </div>
          <img src={banner2} alt="Restaurant Interior" onError={(e) => e.target.src = mandiDish} />
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
