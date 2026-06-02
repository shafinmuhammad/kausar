import React from 'react';
import { useLocation } from 'react-router-dom';
import img1 from '../../assets/chicken_mandi.png';
import img2 from '../../assets/beef_mandi.png';
import img3 from '../../assets/mutton_mandi.png';
import img4 from '../../assets/alfaham.png';
import img5 from '../../assets/chinese_fried_rice.png';
import img6 from '../../assets/chilli_chicken.png';
import img7 from '../../assets/dragon_chicken.png';
import img8 from '../../assets/chicken_noodles.png';
import heroImg from '../../assets/banner-2.png';
import PageHero from '../../components/PageHero/component';
import './style.scss';

const GalleryPage = () => {
  const location = useLocation();
  const isDedicatedPage = location.pathname === '/gallery';

  const galleryImages = [
    { src: img1, alt: 'Chicken Mandi' },
    { src: img2, alt: 'Beef Mandi' },
    { src: img3, alt: 'Mutton Mandi' },
    { src: img4, alt: 'Alfaham Chicken' },
    { src: img5, alt: 'Chinese Fried Rice' },
    { src: img6, alt: 'Chilli Chicken' },
    { src: img7, alt: 'Dragon Chicken' },
    { src: img8, alt: 'Chicken Noodles' }
  ];

  return (
    <div className="gallery-page-container">
      {isDedicatedPage && <PageHero title="Gallery" subtitle="Visual Feast" image={heroImg} />}
      <section className="gallery-section page-section bg-white" id="gallery" style={isDedicatedPage ? {paddingTop: '60px'} : {}}>
        <div className="section-header" data-aos="fade-up">
          <span className="badge">Visual Feast</span>
          <h2>Our <span>Gallery</span></h2>
          <div className="divider"></div>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((img, index) => (
            <img 
              key={index}
              src={img.src} 
              alt={img.alt} 
              className="gallery-img" 
              data-aos="zoom-in" 
              data-aos-delay={(index % 4 + 1) * 100} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;
