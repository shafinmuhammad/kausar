import React from 'react';
import { Star } from 'lucide-react';
import './style.scss';

const Guestbook = () => {
  return (
    <section className="guestbook-section page-section bg-white" id="reviews">
      <div className="section-header" data-aos="fade-up">
        <span className="badge">People Talk</span>
        <h2>Our <span>Guestbook</span></h2>
        <div className="divider"></div>
      </div>

      <div className="reviews-grid">
        <div className="review-card" data-aos="fade-up" data-aos-delay="100">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{ marginRight: '2px' }} />)}
          </div>
          <p className="quote">"Best mandi spot in Manjeri! The peri-peri alfaham and zurbian rice are absolutely incredible. A must-visit!"</p>
        </div>
        <div className="review-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{ marginRight: '2px' }} />)}
          </div>
          <p className="quote">"Unique taste with top-notch service. The ambiance and quality of food are exceptional. Highly recommended!"</p>
        </div>
        <div className="review-card" data-aos="fade-up" data-aos-delay="100">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{ marginRight: '2px' }} />)}
          </div>
          <p className="quote">"Best mandi spot in Manjeri! The peri-peri alfaham and zurbian rice are absolutely incredible. A must-visit!"</p>
        </div>
        <div className="review-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{ marginRight: '2px' }} />)}
          </div>
          <p className="quote">"Unique taste with top-notch service. The ambiance and quality of food are exceptional. Highly recommended!"</p>
        </div>
        <div className="review-card" data-aos="fade-up" data-aos-delay="100">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{marginRight: '2px'}}/>)}
          </div>
          <p className="quote">"Best mandi spot in Manjeri! The peri-peri alfaham and zurbian rice are absolutely incredible. A must-visit!"</p>
        </div>
        <div className="review-card" data-aos="fade-up" data-aos-delay="200">
          <div className="stars">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" stroke="none" style={{marginRight: '2px'}}/>)}
          </div>
          <p className="quote">"Unique taste with top-notch service. The ambiance and quality of food are exceptional. Highly recommended!"</p>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
