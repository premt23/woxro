import React from 'react';
import './firstCom.css';

function Firstcom() {
  return (
    <div className='container'>
      <div className='disapp'>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
          <div style={{ marginLeft: "1%", marginTop: "0.3%" }}>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <p><b>Now Hiring: </b>Looking for a job in Full Stack Development?</p>
            </a>
          </div>
          <div>
            <a href="#" style={{ color: "white", textDecoration: "none" }}>
              <i
                className="fas fa-phone"
                aria-hidden="true"
                style={{ marginRight: "10px" }}
              >
                <strong> <b>+91 487 2080 212</b> </strong>
              </i>
              <i
                className="fas fa-map-marker-alt"
                aria-hidden="true"
                style={{ marginLeft: "10px" }}
              >
                <h6 style={{ color: "white", display: "inline" }}>
                  Leshore Business Park, Thrissur
                </h6>
              </i>
            </a>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'white',padding:"1%"}}>
      <img src="https://woxro.com/public/assets/png/woxrologo.png" alt="woxro" width="205.875" height="56"/>
        
      </div>
    </div>
  );
}

export default Firstcom;
