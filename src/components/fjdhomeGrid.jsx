import "./homePageGrid.css";
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const FjdGrid = function () {
    return (
        <div>
            <div className="container main-cent ">
               
               
                            <div className="cent">
                                   <div className="markett">
                                   <h2 className="underr">PRODUCTS </h2>
                                   <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                                   <div className="row no-gutters mt-5 home_row">
                                       {/* 2nd row */}
                                      <div className="col-12 col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                                           <div className="card home_card">
                                               <div className="card-body" style={{ textAlign: "center" }}>
                                                    <Link to='./fr4000'>
                                                    <img height="100px" width="100px" src="./images/fjd1.png" alt="fr4000" />
                                                    </Link>
                                                <h4 className="card-title">FJD FR4000
                                                      ROBOTIC LAWN MOWER</h4>
                                               </div>
                                           </div>
                                       </div>
                                     <div className="col-12 col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                                           <div className="card home_card">
                                               <div className="card-body" style={{ textAlign: "center" }}>
                                                     <Link to='./fv2000'>
                                                     <img height="100px" width="100px" src="./images/fjd2.png" alt="B2B Portal" />
                                                     </Link>
                                                     <h4 className="card-title"> FJD FV2000
                                                      ROBOTIC LAWN MOWER</h4>
                                                    </div>
                                           </div>
                                       </div>
                                       
                                    
                                     
                                   </div>
                               </div>
                                  </div>

                     




{/* 
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./rm21'>
                                        <img height="100px" width="100px" src="./images/fjd3.png" alt="Huntsman Webpage" />
                                  </Link>
                                    <h4 className="card-title"> FJD RM21 ROBOTIC MOWER</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./z42p'>
                                        <img height="100px" width="100px" src="./images/fjd4.png" alt="B2B Portal" />
                                    </Link>
                                    <h4 className="card-title">FJD Z42P
                                     SMART LAWN MOWER</h4>
                                </div>
                            </div>
                        </div>

                           <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./rlm01'>
                                        <img height="100px" width="100px" src="./images/fjd5.jpg" alt="B2B Portal" />
                                    </Link>
                                    <h4 className="card-title"> RLM01 Robotic Line Marker</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                <Link to='./ms100'>
                                        <img height="100px" width="100px" src="./images/fjd6.jpg" alt="Huntsman Webpage" />
                                 </Link>
                                    <h4 className="card-title"> FJD MS100
                                     MOWER KIT</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./gm22'>
                                        <img height="100px" width="100px" src="./images/fjd7.png" alt="B2B Portal" />
                                 </Link>
                                    <h4 className="card-title">FJD GM22
                                    ELECTRIC WALK-BEHIND GREENS MOWER</h4>
                                </div>
                            </div>
                        </div>
                           
                          <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./z4210'>
                                        <img height="100px" width="100px" src="./images/fjd8.webp" alt="B2B Portal" />
                                 </Link>
                                    <h4 className="card-title">FJD Z4210
                                      VERSATILE LAWN MOWER</h4>
                                </div>
                            </div>
                        </div> */}



                     
                     
                      
                    {/* </div>
                </div> */}

              


                




            </div>
            <Footer/>
        </div>
    );
};

export default FjdGrid;
