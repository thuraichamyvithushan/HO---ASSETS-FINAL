import React from "react";

const Hero = () => {
    const containerStyle = {
        position: "relative",
        width: "100%",
        height: "250px",
    };

    const textStyle = {
        position: "absolute",
        top: "64%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        color: "black",
        textAlign: "center",
        fontFamily: "'Work Sans', sans-serif",
        fontWeight: 900,
        textTransform: "uppercase",
        lineHeight: 1,
        padding: "0 20px", // Add padding for mobile
        width: "100%", // Ensure full width
        boxSizing: "border-box"
    };

    const fancyStyle = {
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='2250' height='900' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Cpath fill='%23800020' d='M0 0h2255v899H0z'/%3E%3Ccircle cx='366' cy='207' r='366' fill='%23FF6B6B'/%3E%3Ccircle cx='1777.5' cy='318.5' r='477.5' fill='%23FF6B6B'/%3E%3Ccircle cx='1215' cy='737' r='366' fill='%23660000'/%3E%3C/g%3E%3C/svg%3E%0A")`,
        backgroundSize: '110% auto',
        backgroundPosition: 'center',
        color: 'transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text'
    };

    // Responsive styles using CSS-in-JS with media queries
    const responsiveStyles = `
        .hero-container {
            height: 250px;
        }
        
        .hero-main-text {
            font-size: 60px;
            margin-bottom: 10px;
        }
        
        .hero-sub-text {
            font-size: 40px;
        }
        
        /* Tablet styles */
        @media (max-width: 768px) {
            .hero-container {
                height: 200px;
            }
            
            .hero-main-text {
                font-size: 45px !important;
                margin-bottom: 8px !important;
            }
            
            .hero-sub-text {
                font-size: 30px !important;
            }
        }
        
        /* Mobile styles */
        @media (max-width: 576px) {
            .hero-container {
                height: 180px;
            }
            
            .hero-main-text {
                font-size: 32px !important;
                margin-bottom: 5px !important;
            }
            
            .hero-sub-text {
                font-size: 22px !important;
            }
        }
        
        /* Small mobile styles */
        @media (max-width: 480px) {
            .hero-container {
                height: 160px;
            }
            
            .hero-main-text {
                font-size: 28px !important;
                margin-bottom: 5px !important;
            }
            
            .hero-sub-text {
                font-size: 18px !important;
            }
        }
        
        /* Extra small mobile */
        @media (max-width: 360px) {
            .hero-container {
                height: 140px;
            }
            
            .hero-main-text {
                font-size: 24px !important;
                margin-bottom: 3px !important;
            }
            
            .hero-sub-text {
                font-size: 16px !important;
            }
        }
    `;

    return (
        <>
            <style>{responsiveStyles}</style>
            <div style={containerStyle} className="hero-container">    
                <div style={textStyle}>
                    <p className="hero-main-text" style={{fontSize: "50px", marginBottom: "10px"}}>Hello Dealer</p>
                    <p className="hero-sub-text" style={{fontSize: "40px"}}><span style={fancyStyle}>Welcome To The Portal</span></p>
                </div>
                <img src="/images/paper.avif" alt="logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
        </>
    );
}

export default Hero;