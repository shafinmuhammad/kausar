import img1 from '../../assets/circle.png';
import img2 from '../../assets/beefcircle.png';
import img3 from '../../assets/motton.png';
import './style.scss';

const Hero = () => {
  return (
    <div className="app-container" id="home">
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <main className="hero-section">
        <div className="hero-content" data-aos="fade-right" data-aos-delay="200">
          <h1>Authentic Flavors &<br />Unforgettable Dining</h1>
          <p>
            Step into our restaurant and discover a dining experience where authentic 
            flavors and warm hospitality meet. Join us to savor expertly crafted dishes 
            in a welcoming atmosphere that feels like home.
          </p>
          <a href="tel:+919946395402" className="hero-btn-container">
            <button className="btn-primary">ENQUIRY NOW</button>
          </a>
        </div>
        <div className="hero-image-container stacked-container" data-aos="zoom-in" data-aos-delay="400">
          <div className="hero-stacked-img img-3">
            <img src={img3} alt="Catering Food 3" />
          </div>
          <div className="hero-stacked-img img-2">
            <img src={img2} alt="Catering Food 2" />
          </div>
          <div className="hero-stacked-img img-1">
            <img src={img1} alt="Catering Food 1" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
