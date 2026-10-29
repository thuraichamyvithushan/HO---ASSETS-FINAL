
import "./homePageGrid.css";
import React from "react";
import lynx1 from '../../images/LE15.webp'

import Footer from "../Footer";

const LYNX32 = function () {
    return (
        <div>
            <div className="container main-cent" style={{ marginTop: "80px",marginBottom:'30px'}}>
                <div className="cent">
                    


                <div className="sales">
                    <h2 className="under">LE15 3.0</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/16kEU826e0w5x9KBuvkpGg6jwSbUUJ4Wa?usp=sharing" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src={lynx1} alt="LE15 3.0" />
                                    </a>
                                    <h4 className="card-title">PRODUCT PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="/document/LE15 3.0_Datasheet_en-US_20251111.pdf" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/excel.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">SPECS SHEET </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1e73JqhK0b25bFvWdmpdoRP6Yag4py69U" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mood.jpg" alt="Huntsman Webpage" />
                                    </a>
                                    <h4 className="card-title">MOOD PICS </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/15YW57nbjeglXBEblAWCEpMT9UXp5A--U?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2b.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B PICS</h4>
                                </div>
                            </div>
                        </div>
                     
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1MHGozLGQkSdaM1qBhoo4TJS2I8iMsfWG?usp=sharing" target="_blank" rel="noreferrer">
                                 
                                        <img height="100px" width="100px" src="./images/um.jpg" alt="B2B Portal" />
                                  

                                    </a>
                                    <h4 className="card-title">USER MANUAL </h4>
                                </div>
                            </div>
                        </div> */}
                    
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1TMTsamFos1jSguNqaaCBiKXglghsHXl_" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/vd.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">VIDEOS</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="1fYwk8Jd7Jy0slmC_MZnnUWXhhJ9aQAvN" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/smp.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">SOCIAL MEDIA POSTERS </h4>
                                </div>
                            </div>
                        </div>
                      
{/* 
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/18H81tu5FEoIIq3bzG3YDHzNcdtlj8Lgh" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="B2B Portal" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD AU </h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                       <a href="https://drive.google.com/drive/folders/1eJ6aOXQzXZdvUCblwNyyznKUTB4DJE95" target="_blank" rel="noreferrer">
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

export default LYNX32;
