
import "./homePageGrid.css";
import React from "react";

import Footer from "../Footer";

const HABROK8 = function () {
    return (
        <div>
            <div className="container main-cent" style={{ marginTop: "80px",marginBottom:'30px'}}>
                <div className="cent">
                    


                <div className="sales">
                    <h2 className="under">HE25L 2.0 4K</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1TJ4_1Aw7jjs1UMi8Z3OazcNmtoXnMz4i?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/he25l2.0.png" alt="HE25L 2.0 4K" />
                                    </a>
                                    <h4 className="card-title">PRODUCT PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="/document/HE25L 2.0_Datasheet_V6.0.2_en-US_20251117.pdf" target="_blank" rel="noreferrer">
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
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/10Oi_hkoMu9kNcjqaQ2niTJ0Rejrffzs-?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2b.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B PICS</h4>
                                </div>
                            </div>
                        </div>
                     
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1Qh-gOk3Agty98vnuQ5YxDNee9yWH5tJn?usp=drive_link" target="_blank" rel="noreferrer">
                                 
                                        <img height="100px" width="100px" src="./images/um.jpg" alt="B2B Portal" />
                                  

                                    </a>
                                    <h4 className="card-title">USER MANUAL </h4>
                                </div>
                            </div>
                        </div> */}
                    
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1iYZTg3KOnnwGXFyguKe6_1diLE9_CCyr?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/vd.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">VIDEOS</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1Imn9sBlhcBWzit73yC23wjfSKKobSzov?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/smp.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">SOCIAL MEDIA POSTERS </h4>
                                </div>
                            </div>
                        </div>
                      

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1hFxJtrToaorpfQht7RD4lI73_571UfPm" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD AU </h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1NvV21PAiu_ADm4bj-VxyIlZm2N-CX_Gl" target="_blank" rel="noreferrer">
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

export default HABROK8;
