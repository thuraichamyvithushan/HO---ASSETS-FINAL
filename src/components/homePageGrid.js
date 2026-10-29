import "./homePageGrid.css";
import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

import lynx1 from "../images/LE103.jpg"
import lynx2 from "../images/LE15.webp"
import lynx3 from "../images/LH153.jpg"
import lynx4 from "../images/LH193.jpg"
import lynx5 from "../images/LH253.png"
import lynx6 from "../images/LH353.jpg"
import thun6 from "../images/THUN.webp"
import fal2 from "../images/FQ25.jpg"
import hab2 from '../images/HE25L.png'
import hab3 from "../images/HH35L20.png"
import hab8 from '../images/HX60LS.jpg'
import A11 from '../images/A11.webp'
import A12 from '../images/A12.webp'
import Ak2 from '../images/A40EL.jpg'
import Ak5 from '../images/A11.webp'
import Ak6 from '../images/A12.webp'



const HomePageGrid = function () {
    return (
        <div>
            <div className="container main-cent ">
              

                  <div className="cent">
                    <div className="markett">
                    <h2 className="underr">TRIFOLD & BIFOLD </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">

                        <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <a href="https://huntsmanoptics.com.au/wp-content/uploads/2026/10/AU-Bifold-15-10-2026.pdf" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/trw.webp" alt="BIFOLD AUS" />
                                    </a>
                                    <h4 className="card-title">BIFOLD AUS </h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <a href="https://huntsmanoptics.co.nz/wp-content/uploads/2026/10/NZ-Bifold-27-10-2026.pdf" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/tr.jpg" alt="TRIFOLD NZ" />
                                </a> 
                                    <h4 className="card-title">TRIFOLD NZ </h4>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
                 </div>



                {/* A7E */}

                  <div className="cent">
                    <div className="markett">
                    <h2 className="underr">ACTION CAMERA</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">

                         <div className="col-one-equal col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to="./a7e">
                                        <img height="100px" width="100px" src="./images/a7e.png" alt="A7E" />
                                     </Link>
                                    <h4 className="card-title">A7E</h4>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
                 </div>

                     {/* A7E */}

                  <div className="cent">
                    <div className="markett">
                    <h2 className="underr">HIKTAC</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">

                         <div className="col-one-equal col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to="./tc19l">
                                        <img height="100px" width="100px" src="./images/TC19L.png" alt="TC19L" />
                                     </Link>
                                    <h4 className="card-title">TC19L</h4>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
                 </div>


                {/* NEOS */}
                <div className="cent">
    <div className="markett">
    <h2 className="underr">NEOS </h2>
    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>

    <div className="row no-gutters mt-5 home_row neos_row">

        <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card neos_col">
            <div className="card home_card neos_card">
                <div className="card-body neos_body" style={{ textAlign: "center" }}>
                       <Link to='./ne25'>
                        <img height="100px" width="100px" src="./images/ne25.png" alt=" NE25" />
                    </Link>
                    <h4 className="card-title">NE25 </h4>
                </div>
            </div>
        </div>

         <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card neos_col">
            <div className="card home_card neos_card">
                <div className="card-body neos_body" style={{ textAlign: "center" }}>
                       <Link to='./nh25l'>
                        <img height="100px" width="100px" src="./images/nh25.png" alt="product image" />
                </Link> 
                    <h4 className="card-title">NH25L </h4>
                </div>
            </div>
        </div>

         <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card neos_col">
            <div className="card home_card neos_card">
                <div className="card-body neos_body" style={{ textAlign: "center" }}>
                       <Link to='./nh35l'>
                        <img height="100px" width="100px" src="./images/nh35.png" alt="product image" />
                </Link> 
                    <h4 className="card-title">NH35 </h4>
                </div>
            </div>
        </div>

    </div>
</div>
</div>
                 
 




                {/* STELLAR */}
                   <div className="saless">
                    <h2 className="underr">STELLAR </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./stel'>
                                        <img height="100px" width="100px" src="./images/SH35 3.0.jpg" alt="product image" />
                                 </Link>
                                    <h4 className="card-title">SH35 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./stel2'>
                                        <img height="100px" width="100px" src="./images/SH35L 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SH35L 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./stel3'>
                                        <img height="100px" width="100px" src="./images/SH50L 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SH50L 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./stel4'>
                                        <img height="100px" width="100px" src="./images/SQ35L 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SQ35L 3.0</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./stel5'>
                                        <img height="100px" width="100px" src="./images/SQ50L 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SQ50L 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./stel6'>
                                        <img height="100px" width="100px" src="./images/SX60L 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SX60L 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./SX60LS'>
                                        <img height="100px" width="100px" src="./images/SX60LS.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">SX60LS 3.0</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>


                {/* HABROK 4K  */}
               <div className="saless">
                    <h2 className="underr">HABROK 4K </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        {/* <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./hab'>
                                        <img height="100px" width="100px" src="./images/HE25L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HE25L</h4>
                                </div>
                            </div>
                        </div> */}


                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./HH35L 2.0'>
                                        <img height="100px" width="100px" src={hab3} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HH35L 2.0 4K</h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./HE25L 2.0'>
                                        <img height="100px" width="100px" src={hab2} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HE25L 2.0 4K</h4>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./hab2'>
                                        <img height="100px" width="100px" src="./images/HE25LN.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HE25LN</h4>
                                </div>
                            </div>
                        </div> */}
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./hab3'>
                                        <img height="100px" width="100px" src="./images/HQ35L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> HQ35L 4K</h4>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./hab4'>
                                        <img height="100px" width="100px" src="./images/HQ35LN.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HQ35LN</h4>
                                </div>
                            </div>
                        </div> */}

                         <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                              <Link to='./hab5'>
                                        <img height="100px" width="100px" src="./images/HQ50L4K.png" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HQ50L 4K</h4>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./hab6'>
                                        <img height="100px" width="100px" src="./images/HX60L4K.webp" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HX60L 4K</h4>
                                </div>
                            </div>
                        </div> */}
                         <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./HX60LS'>
                                        <img height="100px" width="100px" src={hab8} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HX60LS 4K</h4>
                                </div>
                            </div>
                        </div>
                        
                     
                      
                    </div>
                </div>



                    {/* LYNX 3.0 */}
                    <div className="saless">
                    <h2 className="underr">LYNX</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row  ">
                        {/* 2nd row */}
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./LE10 3.0'>
                                        <img height="100px" width="100px" src={lynx1} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">LE10 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./LE15 3.0'>
                                        <img height="100px" width="100px" src={lynx2} alt="product image" />
                                   </Link>
                                    <h4 className="card-title"> LE15 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./LH15 3.0'>
                                        <img height="100px" width="100px" src={lynx3} alt="product image" />
                                  </Link>
                                    <h4 className="card-title"> LH15 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    {/* <a href=" https://auwebship.inxpress.com/imcs_au/login" target="_blank" rel="noreferrer"> */}
                                       <Link to='./LH19 3.0'>
                                        <img height="100px" width="100px" src="/images/LH193.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">LH19 3.0</h4>
                                </div>
                            </div>
                        </div>

                           <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./LH25 3.0'>
                                        <img height="100px" width="100px" src="/images/LH253.png" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">LH25 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./LH35 3.0'>
                                        <img height="100px" width="100px" src={lynx6} alt="product image" />
                                 </Link>
                                    <h4 className="card-title">LH35 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./Lq35'>
                                        <img height="100px" width="100px" src={lynx6} alt="product image" />
                                 </Link>
                                    <h4 className="card-title">LQ35 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./Lq35l'>
                                        <img height="100px" width="100px" src={lynx6} alt="product image" />
                                 </Link>
                                    <h4 className="card-title">LQ35L 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./lynx'>
                                        <img height="100px" width="100px" src={lynx6} alt="product image" />
                                 </Link>
                                    <h4 className="card-title">LC06S</h4>
                                </div>
                            </div>
                        </div>
                        
                      
                    </div>
                </div>
                  

                  {/* FALCON */}
                <div className="saless">
                <h2 className="underr">FALCON</h2>
                <hr style={{ margin: "0", borderTop: "5px solid #ddd" }} />

                <div className="row no-gutters mt-5 home_row ">

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./fal">
                            <img height="100" width="100" src="./images/FH35.jpg" alt="FH35" />
                        </Link>
                        <h4 className="card-title">FH35</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./FQ25">
                            <img height="100" width="100" src={fal2} alt="FQ25" />
                        </Link>
                        <h4 className="card-title">FQ25</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./FH25">
                            <img height="100" width="100" src="./images/FH25.jpg" alt="FH25" />
                        </Link>
                        <h4 className="card-title">FH25</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./fal2">
                            <img height="100" width="100" src="./images/FH35 2.0.jpg" alt="FH35 2.0" />
                        </Link>
                        <h4 className="card-title">FH35 2.0</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./fal3">
                            <img height="100" width="100" src="./images/FQ35 2.0.jpg" alt="FQ35 2.0" />
                        </Link>
                        <h4 className="card-title">FQ35 2.0</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./fal4">
                            <img height="100" width="100" src="./images/FQ50 2.0.jpg" alt="FQ50 2.0" />
                        </Link>
                        <h4 className="card-title">FQ50 2.0</h4>
                        </div>
                    </div>
                    </div>

                    <div className="col-seven-equal col-lg-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                    <div className="card home_card">
                        <div className="card-body text-center">
                        <Link to="./fal5">
                            <img height="100" width="100" src="./images/FQ50L 2.0.jpg" alt="FQ50L 2.0" />
                        </Link>
                        <h4 className="card-title">FQ50L 2.0</h4>
                        </div>
                    </div>
                    </div>

                </div>
                </div>



                 {/* CONDOR */}
                  <div className="saless">
                    <h2 className="underr">CONDOR</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./con'>
                                        <img height="100px" width="100px" src="./images/CH25L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">CH25L</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./con2'>
                                        <img height="100px" width="100px" src="./images/CH35L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> CH35L</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                <Link to='./con3'>
                                        <img height="100px" width="100px" src="./images/CH35L 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">CH35L 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./con4'>
                                        <img height="100px" width="100px" src="./images/CQ35L 2.0.jpg" alt="product image" />
                                  </Link>
                                    <h4 className="card-title">CQ35L 2.0</h4>
                                </div>
                            </div>
                        </div>

                          <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./con5'>
                                        <img height="100px" width="100px" src="./images/CQ50L 2.0.jpg" alt="product image" />
                                  </Link>
                                    <h4 className="card-title">CQ50L 2.0</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>



                {/* LYNX */}
                     {/* <div className="saless"> 
                    <h2 className="underr">LYNX</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row  ">
                        
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./lynx'>
                                        <img height="100px" width="100px" src="./images/LC06S.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">LC06S</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./lynx2'>
                                        <img height="100px" width="100px" src="./images/LE10S.jpg" alt="product image" />
                                   </Link>
                                    <h4 className="card-title"> LE10S</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./lynx3'>
                                        <img height="100px" width="100px" src="./images/LE15S.webp" alt="product image" />
                                  </Link>
                                    <h4 className="card-title"> LE15S</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   
                                     <Link to='./lynx4'>
                                        <img height="100px" width="100px" src="./images/LH15 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">LH15 2.0</h4>
                                </div>
                            </div>
                        </div>

                           <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./lynx5'>
                                        <img height="100px" width="100px" src="./images/LH19 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> LH19 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                <Link to='./lynx6'>
                                        <img height="100px" width="100px" src="./images/LH25 2.0.jpg" alt="product image" />
                                 </Link>
                                    <h4 className="card-title"> LH25 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./lynx7'>
                                        <img height="100px" width="100px" src="./images/LH35 2.0.jpg" alt="product image" />
                                 </Link>
                                    <h4 className="card-title">LH35 2.0</h4>
                                </div>
                            </div>
                        </div>
                     
                     
                      
                    </div>
                </div> */}




                        {/* THUNDER 3.0 */}
                      <div className="saless">
                    <h2 className="underr">THUNDER 3.0</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./thun'>
                                        <img height="100px" width="100px" src="./images/TH35C 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">TH35C 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./thun2'>
                                        <img height="100px" width="100px" src="./images/TQ35C 3.0.jpg" alt="product image" />
                                   </Link>
                                    <h4 className="card-title"> TQ35C 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./thun3'>
                                        <img height="100px" width="100px" src="./images/TQ50C 3.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> TQ50C 3.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./thun4'>
                                        <img height="100px" width="100px" src="./images/TQ50CL 3.0.jpg" alt="product image" />
                                  </Link>
                                    <h4 className="card-title">TQ50CL 3.0</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-five-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./thun5'>
                                        <img height="100px" width="100px" src={thun6} alt="product image" />
                                  </Link>
                                    <h4 className="card-title">TQ35CL 3.0</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>


                {/* <div className="cent">
                    <div className="market">
                    <h2 className="under">THUNDER ZOOM 2.0 </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        
                        <div className="col-xl-6 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./thunzoom'>
                                        <img height="100px" width="100px" src="./images/TQ60Z 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">TQ60Z 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./thunzoom2'>
                                        <img height="100px" width="100px" src="./images/TH50Z 2.0.jpg" alt="product image" />
                                   </Link>
                                    <h4 className="card-title">TH50Z 2.0</h4>
                                </div>
                            </div>
                        </div>
                        </div>  
                     
                      
                    </div>
                </div> */}


                    {/* THUNDER 2.0 */}
                  <div className="saless">
                    <h2 className="underr">THUNDER 2.0 </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                        <Link to='./thunderr'>
                                        <img height="100px" width="100px" src="./images/TE19 2.0.jpg" alt="product image" />
                                  </Link>
                                    <h4 className="card-title">TE19 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./thunderr2'>
                                        <img height="100px" width="100px" src="./images/TE25 2.0.webp" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> TE25 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./thunderr3'>
                                        <img height="100px" width="100px" src="./images/TH25P 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> TH25P 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <Link to='./thunderr4'>
                                        <img height="100px" width="100px" src="./images/TH35P 2.0.jpg" alt="product image" />
                               </Link>
                                    <h4 className="card-title">TH35P 2.0</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./thunderr5'>
                                        <img height="100px" width="100px" src="./images/TQ35 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">TQ35 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./thunderr6'>
                                        <img height="100px" width="100px" src="./images/TQ50 2.0.jpg" alt="product image" />
                                   </Link>
                                    <h4 className="card-title">TQ50 2.0</h4>
                                </div>
                            </div>
                        </div>


                         <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./thunzoom'>
                                        <img height="100px" width="100px" src="./images/TQ60Z 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">TQ60Z 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-eight col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                   <Link to='./thunzoom2'>
                                        <img height="100px" width="100px" src="./images/TH50Z 2.0.jpg" alt="product image" />
                                   </Link>
                                    <h4 className="card-title">TH50Z 2.0</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>

                    {/* PANTHER 2.0 */}
                <div className="saless">
                    <h2 className="underr">PANTHER 2.0</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./panther'>
                                        <img height="100px" width="100px" src="./images/PQ50L 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">PQ50L 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./panther2'>
                                        <img height="100px" width="100px" src="./images/PH50L 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> PH50L 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./panther3'>
                                        <img height="100px" width="100px" src="./images/PQ35L 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> PQ35L 2.0</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to='./panther4'>
                                        <img height="100px" width="100px" src="./images/PH35L 2.0.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">PH35L 2.0</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>






                    


                    {/* RAPTOR */}
                {/* <div className="cent">
                    <div className="markett">
                    <h2 className="underr">RAPTOR </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                      {/* <div className="col-12 col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <Link to='./raptor'>
                                        <img height="100px" width="100px" src="./images/RH50L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">RH50L</h4>
                                </div>
                            </div>
                        </div>
                      <div className="col-12 col-sm-6 col-md-6 col-xl-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <Link to='./raptor2'>
                                        <img height="100px" width="100px" src="./images/RQ50L.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">RQ50L</h4>
                                </div>
                            </div>
                        </div>
                        
                     
                      
                    </div>
                </div>
                   </div> */}

                    {/* CHEETAH */}
                   {/* <div className="cent">
                    <div className="markett">
                        <h2 className="underr">CHEETAH</h2>
                        <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                        <div className="row no-gutters mt-5 home_row">
                            {/*1st  Single Row with 7 Columns */}
                           {/* <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                          <Link to='./cheetah'>
                                            <img height="100px" width="100px" src="./images/C32F-S.jpg" alt="Internal Drive" />
                                        </Link>
                                        <h4 className="card-title">C32F-S </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                       <Link to='./cheetah2'>
                                            <img height="100px" width="100px" src="./images/C32F-SL.jpg" alt="HO Assets" />
                                        </Link>
                                        <h4 className="card-title">C32F-SL</h4>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div> */}





                    {/* ALPEX */}
                <div className="saless">
                    <h2 className="underr">ALPEX  </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./alplex'>
                                        <img height="100px" width="100px" src="./images/A50T-S.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50T-S</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                         <Link to='./alplex2'>
                                        <img height="100px" width="100px" src="./images/A40E.webp" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> A40E</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}> 
                                    <Link to='./alplex3'>      
                                    <img height="100px" width="100px" src="./images/A40EL.jpg" alt="product image" />
                                    </Link>
                                
                                    <h4 className="card-title">A40EL</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./alplex4'>
                                        <img height="100px" width="100px" src="./images/A50E.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50E</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='./alplex5'>
                                        <img height="100px" width="100px" src="./images/A50EL.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50EL</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50P'>
                                        <img height="100px" width="100px" src={A11} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50P</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-seven-equal col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50PL'>
                                        <img height="100px" width="100px" src={A12} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50PL</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>
                 

                    {/* ALPEX - KIT */}
                 <div className="saless">
                    <h2 className="underr">ALPEX - KIT  </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        
                        <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                         <Link to='/A40E - KIT'>
                                        <img height="100px" width="100px" src="./images/A40E.webp" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> A40E - KIT</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}> 
                                    <Link to='/A40EL - KIT'>      
                                    <img height="100px" width="100px" src={Ak2} alt="product image" />
                                    </Link>
                                
                                    <h4 className="card-title">A40EL - KIT</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50E - KIT'>
                                        <img height="100px" width="100px" src="./images/A50E.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50E - KIT</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50EL - KIT'>
                                        <img height="100px" width="100px" src="./images/A50EL.jpg" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50EL - KIT</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50P - KIT'>
                                        <img height="100px" width="100px" src={Ak5} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50P - KIT</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-XL-2 col-md-2 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                  <Link to='/A50PL - KIT'>
                                        <img height="100px" width="100px" src={Ak6} alt="product image" />
                                    </Link>
                                    <h4 className="card-title">A50PL - KIT</h4>
                                </div>
                            </div>
                        </div>
                     
                      
                    </div>
                </div>


                    {/* M15 TRAIL CAMERAS */}
                <div className="cent">
                    <div className="markett">
                    <h2 className="underr">M15 TRAIL CAMERAS </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}

                         <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                 <Link to='./mtc3'>
                                        <img height="100px" width="100px" src="./images/t161.png" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> T16</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <Link to='./mtc'>
                                        <img height="100px" width="100px" src="./images/HM-M15.png" alt="product image" />
                                    </Link>
                                    <h4 className="card-title">HM-M15</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-one-three col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                 <Link to='./mtc2'>
                                        <img height="100px" width="100px" src="./images/hm.webp" alt="product image" />
                                    </Link>
                                    <h4 className="card-title"> HM-SP5000</h4>
                                </div>
                            </div>
                        </div>

                       
                       
                      
                    </div>
                </div>
                   </div>


                   
           
                    {/* OTHER */}
             {/* <div className="cent">
                    <div className="markett">
                    <h2 className="underr">OTHER </h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">

                        <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <Link to='./other'>
                                        <img height="100px" width="120px" src="./images/e10.png" alt="OSO Home" />
                                    </Link>
                                    <h4 className="card-title">E10</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                       <Link to='#'>
                                        <img height="100px" width="120px" src="./images/E20.webp" alt="OSO Home" />
                                    </Link>
                                    <h4 className="card-title">E20</h4>
                                </div>
                            </div>
                        </div>
                       
                      
                    </div>
                </div>
                 </div> */}




            </div>
            <Footer/>
        </div>
    );
};

export default HomePageGrid;
