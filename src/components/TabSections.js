import React, { useState, useEffect } from 'react';
import './Tabs.css';

import HomePageGrid from './homePageGrid'; 
import FjdGrid from '../components/fjdhomeGrid'
import trifoldGrid from './trifoldGrid';
import mignetechGrid from './MagnetechHome';
import blaze from "../images/bla.png";


const ComingSoon = () => (
  <div style={{
    textAlign: 'center',
    padding: '20px',
    color: 'white',
    backgroundColor: '#111' 
  }}>
    <h2>Coming Soon...</h2>
    <p>This page is under construction.</p>
  </div>
);


const brands = [
  {
    label: 'Hikmicro',
    component: HomePageGrid,
    targetId: 'hikmicro',
    logo: '/images/HIKMI.webp',
  },
  {
    label: 'BLAZE',
    component: ComingSoon,
    targetId: 'speras',
    logo: blaze,
  },
  {
    label: 'Magne-Tech',
    component: mignetechGrid,
    targetId: 'magnetech',
    logo: '/images/ima2.png',
  },
  {
    label: 'FJDynamics',
    component: FjdGrid,
    targetId: 'fjdynamics',
    logo: '/images/fjdy.png',
  },
  {
    label: 'Huntsman Tripod and Bipod',
    component: trifoldGrid,
    targetId: 'huntsman',
    logo: '/images/bit.png',
  },
];

const TabSections = () => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (activeCard !== null) {
      const section = document.getElementById('brand-content');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [activeCard]);

  return (
  
    <div className="cards-container">
    
      <div className="cards-grid first-row">
        {brands.slice(0, 3).map(({ label, logo }, index) => (
          <div
            key={index}
            className="brand-card-wrapper"
            onClick={() => setActiveCard(index)}
          >
            <div className={`brand-card ${activeCard === index ? 'active' : ''}`}>
              <img src={logo} alt={label} className="brand-logo" />
            </div>
            <div className={`brand-label-box ${activeCard === index ? 'active' : ''}`}>
              <p className="brand-label">{label}</p>
            </div>
          </div>
        ))}
      </div>

  
      <div className="cards-grid second-row">
        {brands.slice(3).map(({ label, logo }, index) => {
          const realIndex = index + 3;
          return (
            <div
              key={realIndex}
              className="brand-card-wrapper"
              onClick={() => setActiveCard(realIndex)}
            >
              <div className={`brand-card ${activeCard === realIndex ? 'active' : ''}`}>
                <img src={logo} alt={label} className="brand-logo" />
              </div>
              <div className={`brand-label-box ${activeCard === realIndex ? 'active' : ''}`}>
                <p className="brand-label">{label}</p>
              </div>
            </div>
          );
        })}
      </div>

   
      {activeCard !== null && (
        <section
          id="brand-content"
          className={`brand-section ${activeCard !== null ? 'active-padding' : ''}`}
          style={{ marginTop: '150px' }}
        >
          {React.createElement(brands[activeCard].component)}
        </section>
      )}
    </div>
  );
};

export default TabSections;
