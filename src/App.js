import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import MainPage from './components/mainpage';



import LYNX from './components/lynx/lynx'
import LYNX2 from './components/lynx/lynx2'
import LYNX3 from './components/lynx/lynx3';
import LYNX4 from './components/lynx/lynx4';
import LYNX5 from './components/lynx/lynx5';
import LYNX6 from './components/lynx/lynx6';
import LYNX7 from './components/lynx/lynx7';

import LYNX31 from './components/lynx3.0/lynx31';
import LYNX32 from './components/lynx3.0/lynx32';
import LYNX33 from './components/lynx3.0/lynx33';
import LYNX34 from './components/lynx3.0/lynx34';
import LYNX35 from './components/lynx3.0/lynx35';
import LYNX36 from './components/lynx3.0/lynx36';
import LYNX37 from './components/lynx3.0/lynxlq35'; 
import LYNX38 from './components/lynx3.0/lynxlq35L'; 


import FALCON from './components/falcon/falcon';
import FALCON2 from './components/falcon/falcon2';
import FALCON3 from './components/falcon/falcon3';
import FALCON4 from './components/falcon/falcon4';
import FALCON5 from './components/falcon/falcon5';
import FALCON6 from './components/falcon/falcon6';
import FALCON7 from './components/falcon/falcon7';


import CONDER from './components/condor/condor';
import CONDER2 from './components/condor/condor2';
import CONDER3 from './components/condor/condor3';
import CONDER4 from './components/condor/condor4';
import CONDER5 from './components/condor/condor5';

import THUNDER from './components/thunder3.0/thunder';
import THUNDER2 from './components/thunder3.0/thunder2';
import THUNDER3 from './components/thunder3.0/thunder3';
import THUNDER4 from './components/thunder3.0/thunder4';
import THUNDER5 from './components/thunder3.0/thunder5';


import THUNDERZOOM from './components/thunder2.0/thunderzoom';
import THUNDERZOOM2 from './components/thunder2.0/thunderzoom2';

import THUNDERR from './components/thunder2.0/thunderr';
import THUNDERR2 from './components/thunder2.0/thunderr2';
import THUNDERR3 from './components/thunder2.0/thunderr3';
import THUNDERR4 from './components/thunder2.0/thunderr4';
import THUNDERR5 from './components/thunder2.0/thunderr5';
import THUNDERR6 from './components/thunder2.0/thunderr6';

import STELLAR from './components/stellar/stellar';
import STELLAR2 from './components/stellar/stellar2';
import STELLAR3 from './components/stellar/stellar3';
import STELLAR4 from './components/stellar/stellar4';
import STELLAR5 from './components/stellar/stellar5';
import STELLAR6 from './components/stellar/stellar6';
import STELLAR7 from './components/stellar/stellar7';


import PANTHER from './components/panther/panther';
import PANTHER2 from './components/panther/panther2';
import PANTHER3 from './components/panther/panther3';
import PANTHER4 from './components/panther/panther4';


import HABROK from './components/habrok/habrok';
import HABROK2 from './components/habrok/habrok2';
import HABROK3 from './components/habrok/habrok3';
import HABROK4 from './components/habrok/habrok4';
import HABROK5 from './components/habrok/habrok5';
import HABROK6 from './components/habrok/habrok6';
import HABROK7 from './components/habrok/habrok7';
import HABROK8 from './components/habrok/habrok8';
import HABROK9 from './components/habrok/habrok9';



import RAPTOR from './components/raptor/raptor';
import RAPTOR2 from './components/raptor/raptor2';
import CHEETAH from './components/cheetah/cheetah';
import CHEETAH2 from './components/cheetah/cheetah2';

import ALPLEX from './components/ALPLEX/alplex';
import ALPLEX2 from './components/ALPLEX/alplex2';
import ALPLEX3 from './components/ALPLEX/alplex3';
import ALPLEX4 from './components/ALPLEX/alplex4';
import ALPLEX5 from './components/ALPLEX/alplex5';
import ALPEX6 from './components/ALPLEX/alpex6';
import ALPEX7 from './components/ALPLEX/alpex7';
import ALPEX8 from './components/ALPLEX/alpex8';
import ALPEX9 from './components/ALPLEX/alpex9';
import ALPEX10 from './components/ALPLEX/alpex10';
import ALPEX11 from './components/ALPLEX/alpex11';
import ALPEX12 from './components/ALPLEX/alpex12';
import ALPEX13 from './components/ALPLEX/alpex13';



import MTC from './components/MTC/mtc';
import MTC2 from './components/MTC/mtc2';
import MTC3 from './components/MTC/mtc3';

import OTHER from './components/OTHER/other';
import OTHER2 from './components/OTHER/other2';


import WEBSITE from './components/website';
import SUPPORT from './components/support';
import DEALER from './components/dealer';
import NEWS from './components/newsupdate';



import FJD1 from './components/fjdProducts/fjd1';
import FJD2 from './components/fjdProducts/fjd2';
import FJD3 from './components/fjdProducts/fjd3';
import FJD4 from './components/fjdProducts/fjd4';
import FJD5 from './components/fjdProducts/fjd5';
import FJD6 from './components/fjdProducts/fjd6';
import FJD7 from './components/fjdProducts/fjd7';
import FJD8 from './components/fjdProducts/fjd8';

import SPARE1 from './components/bipodTripodProducts/spareparts1'
import SPARE2 from './components/bipodTripodProducts/spareparts2'
import SPARE3 from './components/bipodTripodProducts/spareparts3'
import SPARE4 from './components/bipodTripodProducts/spareparts4'
import SPARE5 from './components/bipodTripodProducts/spareparts5'
import SPARE6 from './components/bipodTripodProducts/spareparts6'
import SPARE7 from './components/bipodTripodProducts/spareparts7'
import BIPOD1 from './components/bipodTripodProducts/biPod1'
import BIPOD2 from './components/bipodTripodProducts/bipod2'
import BIPOD3 from './components/bipodTripodProducts/biPod3.js'
import TRIPOD1 from './components/bipodTripodProducts/tripod1'
import TRIPOD2 from './components/bipodTripodProducts/tripod2'
import TRIPOD3 from './components/bipodTripodProducts/tripod3'
import TRIPOD4 from './components/bipodTripodProducts/tripod4'
import TRIPOD5 from './components/bipodTripodProducts/tripod5'

import MAG1 from './components/Magnetech/mag1';
import MAG2 from './components/Magnetech/mag2';
import MAG3 from './components/Magnetech/mag3';
import MAG4 from './components/Magnetech/mag4';
import MAG5 from './components/Magnetech/mag5';
import MAG6 from './components/Magnetech/mag6';
import MAG7 from './components/Magnetech/mag7';
import MAG8 from './components/Magnetech/mag8';
import MAG9 from './components/Magnetech/mag9';
import MAG10 from './components/Magnetech/mag10';
import MAG11 from './components/Magnetech/mag11';
import MAG12 from './components/Magnetech/mag12';
import MAG13 from './components/Magnetech/mag13';
import MAG14 from './components/Magnetech/mag14';
import MAG15 from './components/Magnetech/mag15';
import ScrollToTop from './components/ScrollToTop';

import Ne25 from './components/neos/Ne25';
import Nh25l from './components/neos/Nh25l';
import Nh35l from './components/neos/Nh35l';

import A7E from './components/AC/A7E';

import TC19L from './components/HIKTAC/TC19L.js';


function App() {
  return (
    <HashRouter>
         {/* <ScrollToTop /> */}
      <div className="App">
        <Navbar />

        <ScrollToTop />

        <Routes>
          <Route path="/" element={<MainPage />} />


          <Route path="ne25" element={<Ne25 />} />
          <Route path="nh25l" element={<Nh25l />} />
          <Route path="nh35l" element={<Nh35l />} />

          <Route path="a7e" element={<A7E />} />

          <Route path="tc19l" element={<TC19L/>} />

          <Route path="lynx" element={<LYNX />} />
          <Route path="lynx2" element={<LYNX2 />} />
            <Route path="lynx3" element={<LYNX3 />} />
             <Route path="lynx4" element={<LYNX4 />} />
              <Route path="lynx5" element={<LYNX5 />} />
              <Route path="lynx6" element={<LYNX6 />} />
              <Route path="lynx7" element={<LYNX7 />} />


              <Route path="LE10 3.0" element={<LYNX31 />} />
              <Route path="LE15 3.0" element={<LYNX32 />} />
              <Route path="LH15 3.0" element={<LYNX33 />} />
              <Route path="LH19 3.0" element={<LYNX34 />} />
              <Route path="LH25 3.0" element={<LYNX35 />} />
              <Route path="LH35 3.0" element={<LYNX36 />} />
              <Route path="Lq35" element={<LYNX37 />} />
              <Route path="Lq35l" element={<LYNX38 />} />




                <Route path="fal" element={<FALCON />} />
                <Route path="fal2" element={<FALCON2 />} />
                 <Route path="fal3" element={<FALCON3 />} />
                <Route path="fal4" element={<FALCON4 />} />
                 <Route path="fal5" element={<FALCON5 />} />
                 <Route path="FQ25" element={<FALCON6 />} />
                 <Route path="FH25" element={<FALCON7 />} />



                  <Route path="con" element={<CONDER />} />
                <Route path="con2" element={<CONDER2/>} />
                 <Route path="con3" element={<CONDER3 />} />
                <Route path="con4" element={<CONDER4 />} />
                 <Route path="con5" element={<CONDER5 />} />


                <Route path="thun" element={<THUNDER />} />
                <Route path="thun2" element={<THUNDER2 />} />
                  <Route path="thun3" element={<THUNDER3 />} />
                    <Route path="thun4" element={<THUNDER4 />} />
                  <Route path="thun5" element={<THUNDER5 />} />


                      <Route path="thunzoom" element={<THUNDERZOOM />} />
                       <Route path="thunzoom2" element={<THUNDERZOOM2 />} />


                 <Route path="thunderr" element={<THUNDERR />} />
                   <Route path="thunderr2" element={<THUNDERR2 />} />
                    <Route path="thunderr3" element={<THUNDERR3 />} />
                     <Route path="thunderr4" element={<THUNDERR4 />} />
                      <Route path="thunderr5" element={<THUNDERR5 />} />
                       <Route path="thunderr6" element={<THUNDERR6 />} />



                    <Route path="stel" element={<STELLAR />} />
                      <Route path="stel2" element={<STELLAR2 />} />
                          <Route path="stel3" element={<STELLAR3 />} />      
                    <Route path="stel4" element={<STELLAR4 />} />
                      <Route path="stel5" element={<STELLAR5 />} />
                      <Route path="stel6" element={<STELLAR6 />} />
                      <Route path="SX60LS" element={<STELLAR7 />} />


                             <Route path="panther" element={<PANTHER />} />
                               <Route path="panther2" element={<PANTHER2 />} />
                                 <Route path="panther3" element={<PANTHER3 />} />
                                   <Route path="panther4" element={<PANTHER4 />} />

                       <Route path="hab" element={<HABROK />} />
                       <Route path="hab2" element={<HABROK2 />} />
                       <Route path="hab3" element={<HABROK3 />} />
                        <Route path="hab4" element={<HABROK4 />} />
                         <Route path="hab5" element={<HABROK5 />} />
                          <Route path="hab6" element={<HABROK6 />} />
                          <Route path="HX60LS" element={<HABROK7 />} />
                          <Route path="HE25L 2.0" element={<HABROK8 />} />
                          <Route path="HH35L 2.0" element={<HABROK9 />} />



                          <Route path="raptor" element={<RAPTOR />} />
                         <Route path="raptor2" element={<RAPTOR2 />} />


                      <Route path="cheetah" element={<CHEETAH />} />
                       <Route path="cheetah2" element={<CHEETAH2 />} />



                       <Route path="alplex" element={<ALPLEX />} />
                           <Route path="alplex2" element={<ALPLEX2 />} />
                            <Route path="alplex3" element={<ALPLEX3 />} />
                             <Route path="alplex4" element={<ALPLEX4 />} />
                              <Route path="alplex5" element={<ALPLEX5 />} />

                              <Route path="A50P" element={<ALPEX6 />} />
                              <Route path="A50PL" element={<ALPEX7 />} />
                              <Route path="A40E - KIT" element={<ALPEX8 />} />
                              <Route path="A40EL - KIT" element={<ALPEX9 />} />
                              <Route path="A50E - KIT" element={<ALPEX10 />} />
                              <Route path="A50EL - KIT" element={<ALPEX11 />} />
                              <Route path="A50P - KIT" element={<ALPEX12 />} />
                              <Route path="A50PL - KIT" element={<ALPEX13 />} />

                       
                       
                        <Route path="mtc" element={<MTC />} />
                          <Route path="mtc2" element={<MTC2 />} />
                          <Route path="mtc3" element={<MTC3 />} />

                        <Route path="other" element={<OTHER />} />
                        <Route path="e20" element={<OTHER2 />} />

                           <Route path="website" element={<WEBSITE />} />
                          
                           <Route path="support-info" element={<SUPPORT />} />
                         <Route path='dealer' element={<DEALER/>}/>

                               <Route path='news' element={<NEWS/>}/>

                             <Route path='fr4000' element={<FJD1/>}/>
                             <Route path='fv2000' element={<FJD2/>}/>
                             <Route path='rm21' element={<FJD3/>}/>
                             <Route path='z42p' element={<FJD4/>}/>
                             <Route path='rlm01' element={<FJD5/>}/>
                             <Route path='ms100' element={<FJD6/>}/>
                             <Route path='gm22' element={<FJD7/>}/>
                             <Route path='z4210' element={<FJD8/>}/>


                             <Route path='HO-SF' element={<SPARE1/>}/>
                             <Route path='HO-SSS' element={<SPARE2/>}/>
                             <Route path='HO-PA02' element={<SPARE3/>}/>
                             <Route path='HO-PU50' element={<SPARE4/>}/>
                             <Route path='HO-IP01' element={<SPARE5/>}/>
                             <Route path='HO-IP02' element={<SPARE6/>}/>
                             <Route path='HO-IP03' element={<SPARE7/>}/>

                             <Route path='HO-BPC01' element={<BIPOD1/>}/>
                             <Route path='HO-BPC02' element={<BIPOD2/>}/>
                            <Route path='HO-KLBP' element={<BIPOD3/>}/>
                             
                             <Route path='HO-TPC20' element={<TRIPOD1/>}/>
                             <Route path='HO-TPC25' element={<TRIPOD2/>}/>
                             <Route path='HO-TPC29' element={<TRIPOD3/>}/>
                             <Route path='HO-TPC32' element={<TRIPOD4/>}/>
                             <Route path='HO-TPC40' element={<TRIPOD5/>}/>

                             <Route path='Magnetic Molle Webbing Clip Mount' element={<MAG1/>}/>
                             <Route path='Magnetic Belt Clip' element={<MAG2/>}/>
                             <Route path='Magnetic Weapon Mount for M-Lok Rail' element={<MAG3/>}/>
                             <Route path='Magnetic Mount for Sig Sauer Romeo MSR' element={<MAG4/>}/>
                             <Route path='Magnetic Mount for Vortex VMX-3T Magnifier' element={<MAG5/>}/>
                             <Route path='Universal 1" Magnetic Flashlight Mount' element={<MAG6/>}/>
                             <Route path='Magnetic Weapon Mount for Picatinny Rail' element={<MAG7/>}/>
                             <Route path='30x38.5mm 3x Magnetic Ring Mount Part B only' element={<MAG8/>}/>
                             <Route path='3x Magnetic Receiver for Locking Scope Ring Part A Base only' element={<MAG9/>}/>
                             <Route path='30x38.5mm 3x Magnetic Ring Mount & Receiver Part A+B Complete Set' element={<MAG10/>}/>
                             <Route path='Heavy Duty Magnetic Wall Mount (Female)' element={<MAG11/>}/>
                             <Route path='Rigel II-Home: 1100 Lumen Magnetic Tactical Flashlight Kit for Home or RV' element={<MAG12/>}/>
                             <Route path='Rigel-M: 1000lm Magnetic Weapon Torch Kit For M-Lok Rail (w/ 18650 Batte)' element={<MAG13/>}/>
                             <Route path='Rigel II-M: 1100lm Magnetic Weapon Torch Kit For M-Lok Rails' element={<MAG14/>}/>
                             <Route path='Rigel II-P: 1100lm Magnetic Weapon Torch Kit For Picatinny Rails' element={<MAG15/>}/>


                             
                         
                         



     
     
     
        
        </Routes>
      
      </div>
    </HashRouter>
  );
}

export default App;

