// components/NavPage.jsx
import React from "react";
import Navbar2 from "./navdrive"; // your custom navbar
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Drive = () => {
  return (
    <>
      <Navbar2 />
     

      {/* Content Section */}
      <div className="container" style={{ marginBottom: "80px", marginTop: "80px", width: "80%" }}>
     

        <div className='row' style={{ justifyContent: "center" }}>
          {/* Card 1 */}
          <div className="col-xl-4 col-md-4 col-sm-12 mt-3 anime">
            <div className="card text-center">
              <div className="card-body">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="https://web.facebook.com/HuntsmanThermography?_rdc=1&_rdr"
                >
                  <img height="80px" width="80px" alt="websitemap" src="./images/socialM.png" />
                </Link>
                <h4 className="card-title mt-3">Thermal Footage Influencers Map</h4>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-xl-4 col-md-4 col-sm-12 mt-3 anime">
            <div className="card text-center">
              <div className="card-body">
                <Link
                  to="https://www.linkedin.com/company/huntsman-optics-ltd/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img height="80px" width="80px" src="./images/onsite.png" alt="LinkedIn" />
                </Link>
                <h4 className="card-title mt-3">HO Internal
                   Map</h4>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-xl-4 col-md-4 col-sm-12 mt-3 anime">
            <div className="card text-center">
              <div className="card-body">
                <Link
                  to="https://login.bigcommerce.com/login"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img height="80px" width="80px" src="./images/off.png" alt="BigCommerce" />
                </Link>
                <h4 className="card-title mt-3">HO Internal Drive For Customers Map</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      
    </>
  );
};

export default Drive;
