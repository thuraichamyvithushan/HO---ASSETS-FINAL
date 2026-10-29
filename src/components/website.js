import React from 'react';
import './website.css';
import Footer from "./Footer";


const brands = [
  {
    label: 'Hikmicro',
    logo: '/images/HIKMI.webp',
    link: 'https://www.hikmicrotech.com/',
  },
  {
    label: 'Speras Au/Nz',
    logo: '/images/ima.png',
    link: 'https://www.speraslight.com/',
  },
  {
    label: 'Magne-Tech',
    logo: '/images/ima2.png',
    link: 'https://magne-tech.com/',
  },
  {
    label: 'FJDynamics',
    logo: '/images/fjdy.png',
    link: 'https://www.fjdynamics.com/',
  },
  {
    label: 'Huntsman Tripod and Bipod',
    logo: '/images/2.png',
    link: 'https://huntsmanoptics.com/',
  },
];

const WEBSITE = () => {
  return (
    <div>
    <div className="website-container">
      <h4>WEBSITES</h4>
      <div className="website-grid first-row">
        {brands.slice(0, 3).map(({ label, logo, link }, index) => (
          <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="website-card-wrapper">
            <div className="website-card">
              <img src={logo} alt={label} className="website-logo" />
            </div>
            {/* <div className="website-label-box">
              <p className="website-label">{label}</p>
            </div> */}
          </a>
        ))}
      </div>

      <div className="website-grid second-row">
        {brands.slice(3).map(({ label, logo, link }, index) => (
          <a key={index + 3} href={link} target="_blank" rel="noopener noreferrer" className="website-card-wrapper">
            <div className="website-card">
              <img src={logo} alt={label} className="website-logo" />
            </div>
            {/* <div className="website-label-box">
              <p className="website-label">{label}</p>
            </div> */}
          </a>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default WEBSITE;
