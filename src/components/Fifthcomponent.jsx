import React from 'react';
import './fifthComponent.css';

function Fifthcomponent() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-12">
        <div className="maps-section-main" style={{backgroundImage: "url(https://woxro.com/public/assets/png/woxroglobe.png)", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width: '100%'}}>

            <div style={{ height: '150px', display: 'flex', alignItems: 'center' }}>
              <p style={{fontSize:"1.8rem",fontWeight:"bold",marginTop:"5rem",color: 'white'}}>We offer all kinds of IT services that ensure your success</p>
            </div> 
          </div>
        </div>
        
        <div className="col-md-6 col-12">
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '5rem' }}>
            <button className="btn btn-primary inline-button" style={{ marginRight: '2rem' }}>&#128222; Contact us</button>
            <button className="btn btn-secondary inline-button" style={{ marginRight: '2rem' }}>&#128172; Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fifthcomponent;
