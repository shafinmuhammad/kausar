import { Link } from 'react-router-dom';
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
          <h1>Savor the Tradition</h1>
          <p>
            Step into our restaurant and discover a dining experience where authentic 
            flavors and warm hospitality meet. Join us to savor expertly crafted Arabic Mandi dishes 
            in a welcoming atmosphere across 5 locations in Kerala.
          </p>
          <div className="hero-btn-container" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Link to="/menu" style={{textDecoration: 'none'}}>
              <button className="btn-primary">ORDER ONLINE</button>
            </Link>
            <Link to="/contact" style={{textDecoration: 'none'}}>
              <button className="btn-primary" style={{backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: '#fff'}}>FIND A BRANCH</button>
            </Link>
            <Link to="/reservation" style={{textDecoration: 'none'}}>
              <button className="btn-primary" style={{backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: '#fff'}}>BOOK A TABLE</button>
            </Link>
          </div>
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
