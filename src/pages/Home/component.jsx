import React from 'react';
import Hero from '../../components/Hero';
import About from '../About/component';
import Menu from '../Menu/component';
import Gallery from '../Gallery/component';
import Guestbook from '../Guestbook/component';
import Reservation from '../Reservation/component';
import Contact from '../Contact/component';
import './style.scss';

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Guestbook />
      <Reservation />
      <Contact />
    </div>
  );
};

export default HomePage;
