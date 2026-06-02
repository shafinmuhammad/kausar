import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
const MenuPage = React.lazy(() => import('./pages/Menu'));
const GalleryPage = React.lazy(() => import('./pages/Gallery'));
const GuestbookPage = React.lazy(() => import('./pages/Guestbook'));
const ReservationPage = React.lazy(() => import('./pages/Reservation'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div className="main-wrapper">
      <HeaderBar />
      
      <Suspense fallback={<div className="loading-fallback" style={{paddingTop: '100px', textAlign: 'center'}}>Loading content...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/guestbook" element={<GuestbookPage />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
