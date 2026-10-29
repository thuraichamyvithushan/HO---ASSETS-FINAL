import "./support.css";
import React from "react";
import Footer from "./Footer";

const SUPPORT = function () {
  return (
    <div>
      <div className="support-container" style={{ marginTop: "80px", marginBottom: "30px" }}>
        <div className="support-content-wrapper">
          <div className="support-box">
            <h2 className="support-heading">Return Material Authorization (RMA) Application</h2>
            <hr style={{ margin: "0", borderTop: "5px solid #ddd" }} />

            <img
              src="/images/support.jpg"
              alt="Support Illustration"
              className="support-image"
            />

            <h6 className="support-subheading">
              Welcome to Huntsman Optics’ RMA Application page.
            </h6>
            <p className="support-text">
              We use skilled Technicians for warranty assessments, repairs, and calibrations in our
              National Service Centre. For warranty assessment, repair, or calibration, completing
              an RMA form is essential.
            </p>
            <p className="support-text">
              Please use the link below to fill out all sections or the MA Form and click Submit to
              lodge your request. We aim to respond within 48 hours on business days with return
              authorization, including an RMA number for tracking, a form to sign, and return
              shipping address.
            </p>
            <p className="support-text">
              Ensure the signed MA form is included in your return package.
            </p>

                              <a href="https://www.huntsmanoptics.com/fault-warranty-apply/" target="_blank">
            <button className="support-button">RMA APPLICATION</button>
                                </a>
            
 </div>

            <img
              src="/images/support2.jpeg"
              alt="Support Illustration"
              className="support-image"
            />

              <h3 className="support-subheading">
            Shooting Accuracy Troubleshooting Form​
            </h3>
            <p className="support-text">
             Download this form to provide detailed information about any zeroing issues you are experiencing with your Hikmicro product. This information will help our support team diagnose and resolve your problem quickly and efficiently.
            </p>

         

          <div className="support-button-group">
             <a href="/document/Zeroing-Form.pdf" 
                      download
                       className="support-button"
                   >
                     DOWNLOAD FORM
              </a>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScK7zTKInPTRTTejtdsAkoyIDlx7DsqT5gcwTj2vP1pd0tplw/viewform" target="_blank">
               <button className="support-button">AUSTRALIA ONLINE FORM</button>
                 </a>
                     <a href="https://docs.google.com/forms/d/e/1FAIpQLScO6P0uD_cyvgF-y3hrA5ec-Ear5fo24IpcWXaGjxgh9wp7lw/viewform?usp=send_form" target="_blank">
                     <button className="support-button">NEW ZEALAND ONLINE FORM</button>
                  </a>

        </div>

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SUPPORT;
