
import "./homePageGrid.css";
import React from "react";

import Footer from "../Footer";

const SPARE7 = function () {
    return (
        <div>
            <div className="container main-cent" style={{ marginTop: "80px",marginBottom:'30px'}}>
                <div className="cent">
                    


                <div className="sales">
                    <h2 className="under">HO-IP03</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div  className="mt-5 home_row"
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',           // space between cards
      justifyContent: 'center', // ← this is the magic
      padding: '0 10px',
    }}>
                        {/* 2nd row */}
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1y1C3_u-q6GYfHzVFC_N2hNbPzm4qRWhN?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/s7.jpg" alt="Unleashed" />
                                    </a>
                                    <h4 className="card-title">PRODUCT PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1viDGlAaWXUaZ49ibdyuWc7Gg5w7qHcGL?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/excel.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">SPECS SHEET </h4>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://docs.google.com/spreadsheets/d/14-LYalx1T6fdC6NSDRHKfXPrgXVKzgJ4T_xODicm9A0/edit?usp=sharing" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mood.jpg" alt="Huntsman Webpage" />
                                    </a>
                                    <h4 className="card-title">MOOD PICS </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1IkGhqmBtj1ktsGY4AJhQyMmLGaleQEtq?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2b.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B PICS</h4>
                                </div>
                            </div>
                        </div>
                     
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1LiqNHa1_GLaivRLsNviF-3hRGwsglwmf?usp=drive_link" target="_blank" rel="noreferrer">
                                 
                                        <img height="100px" width="100px" src="./images/um.jpg" alt="B2B Portal" />
                                  

                                    </a>
                                    <h4 className="card-title">USER MANUAL </h4>
                                </div>
                            </div>
                        </div>
                    
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://forms.gle/AZRZnLvboDWo5dBZA" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/vd.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">VIDEOS</h4>
                                </div>
                            </div>
                        </div> */}

                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1fUzXeFDd6g_QeBDuY87vNFwtwx2BD3pp?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/smp.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">SOCIAL MEDIA POSTERS </h4>
                                </div>
                            </div>
                        </div>
                      

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1bPTTtk9fZUOQBnc75AsdoWPb-Lzz0uFz" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD AU </h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1dUuMkrKodqBMyv0HgO9W5Petg6K9HvDA" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/trw.webp" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD NZ </h4>
                                </div>
                            </div>
                        </div> */}

                       
                    </div>
                </div>
                 </div>



             
            </div>
            <Footer/>
        </div>
    );
};

export default SPARE7;
