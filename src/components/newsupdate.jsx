import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import "./newsupdate.css"; 

const NEWS = function () {
  return (
    <div className="news-main-container">
      <div className="news-content-wrapper text-center">
        
        {/* Hero Section */}
        <div className="news-hero-section">
          <h1 className="news-hero-title">NEW UPDATES</h1>
        </div>
        
        <div className="news-row news-row-start news-margin-bottom news-fade-in">
          <div className="news-col-4 news-left-image">
            <img src="./images/NEWS.jpg" alt="LC06S" className="news-image" />
          </div>
          <div className="news-col-8 news-right-desc">
            <h5>One</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, quisquam!</p>
          </div>
        </div>

        <div className="news-row news-row-start news-margin-bottom news-fade-in">
          <div className="news-col-4 news-left-image">
             <img src="./images/NEWS.jpg" alt="LC06S" className="news-image" />
          </div>
          <div className="news-col-8 news-right-desc">
            <h5>Two</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ipsa..</p>
          </div>
        </div>

        <div className="news-row news-row-start news-margin-bottom news-fade-in">
          <div className="news-col-4 news-left-image">
         <img src="./images/NEWS.jpg" alt="LC06S" className="news-image" />
          </div>
          <div className="news-col-8 news-right-desc">
            <h5>Three</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, excepturi?</p>
          </div>
        </div>

        <div className="news-row news-row-start news-margin-bottom news-fade-in">
          <div className="news-col-4 news-left-image">
         <img src="./images/NEWS.jpg" alt="LC06S" className="news-image" />
          </div>
          <div className="news-col-8 news-right-desc">
            <h5>Four</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facere!</p>
          </div>
        </div>

        <div className="news-row news-row-start news-margin-bottom news-fade-in">
          <div className="news-col-4 news-left-image">
          <img src="./images/NEWS.jpg" alt="LC06S" className="news-image" />
          </div>
          <div className="news-col-8 news-right-desc">
            <h5>Five</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, sit!</p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default NEWS;
