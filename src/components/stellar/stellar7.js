
import "./homePageGrid.css";
import React from "react";

import Footer from "../Footer";

const STELLAR7 = function () {
    return (
        <div>
            <div className="container main-cent" style={{ marginTop: "80px",marginBottom:'30px'}}>
                <div className="cent">
                    


                <div className="sales">
                    <h2 className="under">SX60LS 3.0</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1BRmtXq_0YQGYFlA3N0T2dUORcl1amZzy?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/SX60LS.JPG" alt="SX60LS 3.0" />
                                    </a>
                                    <h4 className="card-title">PRODUCT PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="/document/SX60LS%203.0_Datasheet_20251110.pdf" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/excel.png" alt="SX60LS 3.0 specs sheet" />
                                    </a>
                                    <h4 className="card-title">SPECS SHEET </h4>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="#" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mood.jpg" alt="Huntsman Webpage" />
                                    </a>
                                    <h4 className="card-title">MOOD PICS </h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1Vc5e8XnyHQPVQmjwxI0WMcz5eXo6xW4w?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2b.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B PICS</h4>
                                </div>
                            </div>
                        </div>
                     
                        {/* <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1sVLE5XQJnGMsFOQEgC2id51ZDgqudPyy?usp=drive_link" target="_blank" rel="noreferrer">
                                 
                                        <img height="100px" width="100px" src="./images/um.jpg" alt="B2B Portal" />
                                  

                                    </a>
                                    <h4 className="card-title">USER MANUAL </h4>
                                </div>
                            </div>
                        </div> */}
                    
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1tkjOa4GpanWjAn5y47r52-osl6LpA0Pq?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/vd.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">VIDEOS</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1VTuDfpxItvhXCB6QxXcArvSAyAyjISch?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/smp.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">SOCIAL MEDIA POSTERS </h4>
                                </div>
                            </div>
                        </div>
                      

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1sG72nf7VzVgp3rQRnFXVOu-WolRu5tn3" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD AU </h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1KZ7XbbsH96-iEfBovN5-BJSk0jBiyHzS" target="_blank" rel="noreferrer">
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

export default STELLAR7;
