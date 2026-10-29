    import "./homePageGrid.css";
    import React from "react";
    import Footer from "./Footer";
    import { Link } from "react-router-dom";
    import bipo from '../images/bipo.png';

    const trifoldGrid = function () {
    return (
        <div>
        <div className="container main-cent">
        


            <div className="saless">
                                <h2 className="underr">ACCESSORIES / SPARE PARTS</h2>
                                <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                                <div className="row no-gutters mt-5 home_row">
                                    {/* 2nd row */}
                                    <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-SF'>
                                                    <img height="100px" width="100px" src="./images/s1.jpg" alt="Unleashed" />
                                                </Link>
                                                <h4 className="card-title">HO-SF</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-SSS'>
                                                    <img height="100px" width="100px" src="./images/s2.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title"> HO-SSS</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-PA02'>
                                                    <img height="100px" width="100px" src="./images/s3.jpg" alt="Huntsman Webpage" />
                                                </Link>
                                                <h4 className="card-title"> HO-PA02</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-PU50'>
                                                    <img height="100px" width="100px" src="./images/s4.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-PU50</h4>
                                            </div>
                                        </div>
                                    </div>


                                     <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-IP01'>
                                                    <img height="100px" width="100px" src="./images/s5.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-IP01</h4>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-IP02'>
                                                    <img height="100px" width="100px" src="./images/s6.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-IP02</h4>
                                            </div>
                                        </div>
                                    </div>

                                     <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-IP03'>
                                                    <img height="100px" width="100px" src="./images/s7.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-IP03</h4>
                                            </div>
                                        </div>
                                    </div>
                                
                                
                                </div>
                            </div>


            <div className="cent">
                             <div className="markett">
                             <h2 className="underr">BIPODS </h2>
                             <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                             <div className="row no-gutters mt-5 home_row">
                                 {/* 2nd row */}
                                <div className="col-one-three col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                                     <div className="card home_card">
                                         <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-BPC01'>
                                                 <img height="100px" width="100px" src="./images/b1.jpg" alt="Unleashed" />
                                             </Link>
                                             <h4 className="card-title">HO-BPC01</h4>
                                         </div>
                                     </div>
                                 </div>
                               <div className="col-one-three col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                                     <div className="card home_card">
                                         <div className="card-body" style={{ textAlign: "center" }}>
                                              <Link to='./HO-BPC02'>
                                                 <img height="100px" width="100px" src="./images/b2.jpg" alt="B2B Portal" />
                                             </Link>
                                             <h4 className="card-title">HO-BPC02</h4>
                                         </div>
                                     </div>
                                 </div>

                                

                                  <div className="col-one-three col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                                     <div className="card home_card">
                                         <div className="card-body" style={{ textAlign: "center" }}>
                                              <Link to='./HO-KLBP'>
                                                 <img height="100px" width="100px" src={bipo} alt="HO-KLBP" />
                                             </Link>
                                             <h4 className="card-title">HO-KLBP</h4>
                                         </div>
                                     </div>
                                 </div>

                                 
                                 
                              
                               
                             </div>
                         </div>
                            </div>
         

        
              <div className="saless">
                                <h2 className="underr">TRIPODS  </h2>
                                <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                                <div className="row no-gutters mt-5 home_row">
                                    {/* 2nd row */}
                                    <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                <Link to='./HO-TPC20'>
                                                    <img height="100px" width="100px" src="./images/t1.jpg" alt="Unleashed" />
                                                </Link>
                                                <h4 className="card-title">HO-TPC20</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                                     <Link to='./HO-TPC25'>
                                                    <img height="100px" width="100px" src="./images/t2.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-TPC25</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}> 
                                                <Link to='./HO-TPC29'>      
                                                <img height="100px" width="100px" src="./images/t3.jpg" alt="Huntsman Webpage" />
                                                </Link>
                                            
                                                <h4 className="card-title">HO-TPC29</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                              <Link to='./HO-TPC32'>
                                                    <img height="100px" width="100px" src="./images/t4.jpg" alt="B2B Portal" />
                                                </Link>
                                                <h4 className="card-title">HO-TPC32</h4>
                                            </div>
                                        </div>
                                    </div>
            
                                     <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                        <div className="card home_card">
                                            <div className="card-body" style={{ textAlign: "center" }}>
                                              <Link to='./HO-TPC40'>
                                                    <img height="100px" width="100px" src="./images/t5.jpg" alt="Huntsman Webpage" />
                                                </Link>
                                                <h4 className="card-title">HO-TPC40</h4>
                                            </div>
                                        </div>
                                    </div>
                                 
                                  
                                </div>
                            </div>
        </div>

        <Footer />
        </div>
    );
    };

    export default trifoldGrid;
