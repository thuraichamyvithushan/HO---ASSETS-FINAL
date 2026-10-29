
import "./homePageGrid.css";
import React from "react";

import Footer from "../Footer";

const ALPEX6 = function () {
    return (
        <div>
            <div className="container main-cent" style={{ marginTop: "80px",marginBottom:'30px'}}>
                <div className="cent">
                    


                <div className="sales">
                    <h2 className="under">A50P</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1KHP3Ax8QuA5YFwsGEONyqHKGX8zrANhY?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/A11.WEBP" alt="A50P" />
                                    </a>
                                    <h4 className="card-title">PRODUCT PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="/document/A50P_Datasheet_V6.0.10_en-US_20260128.pdf" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/excel.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">SPECS SHEET </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1_Z_Lbf0nUaslwxFwQqUH1UqWKzRzrd9Y?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mood.jpg" alt="Huntsman Webpage" />
                                    </a>
                                    <h4 className="card-title">MOOD PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1XChvkK4QNE_P6B7iZzd4R_SBvBX7onkf?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2b.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B PICS</h4>
                                </div>
                            </div>
                        </div>
                     
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1IICZUw3VYTccbSxDUFVx1X4CRnwQ7hIM?usp=drive_link" target="_blank" rel="noreferrer">
                                 
                                        <img height="100px" width="100px" src="./images/um.jpg" alt="B2B Portal" />
                                  

                                    </a>
                                    <h4 className="card-title">USER MANUAL </h4>
                                </div>
                            </div>
                        </div> */}
                    
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1neTXe8F_yQ4nz8b1hA5x9ppjVRrMGMPs?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/vd.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">VIDEOS</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1xamLBkOFMYHwG3Fcp4DzBbVMBOCK_sgw?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/smp.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">SOCIAL MEDIA POSTERS </h4>
                                </div>
                            </div>
                        </div>
                      

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/u/1/folders/1c3r3yM29h3DBwL0Gl4DM9BO83WOXkwkO" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD AU </h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/u/1/folders/1-z3mfGsMPVa-V_84m_2qKaoyYTptnGvK" target="_blank" rel="noreferrer">
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

export default ALPEX6;
