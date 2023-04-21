import React from 'react';

function Writings() {
  return (
    
    <div className='container'>
      <div className="container" style={{backgroundColor:'white'}}>
        <div className="row">
        <div className="col-12 text-center"><br/><br/>
          <strong style={{letterSpacing:"0.3rem",textTransform:"uppercase",lineHeight:"1.43"}}>services we deliver</strong><br/><br/><br/>
          <center><h2><b> Preparing for your success, we provide truly prominent IT solutions.</b></h2></center><br/><br/><br/><br/>
        </div>

          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white' }}>
            <div className="card-body" style={{ backgroundColor: '#e7f0f7' }}>

                <img src="https://woxro.com/public/assets/png/services/webdesigning.png" alt="Web Designing" />
                <h4 className="card-title"><b>Web Designing</b> </h4>
                <p className="card-text">We create impressive interfaces. Usability + user experience are created based 
                  on a study of preferences and user behavior, using the latest web design trends, 
                  our experience, and achievements.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white' }}>
              <div className="card-body" style={{ backgroundColor:'#f6f5f3' }}>
                <img src="https://woxro.com/public/assets/png/services/webapplication.png" alt="Web Application" />
                <h4 className="card-title"><b>Web Application</b> </h4>
                <p className="card-text">We have completed projects in full-cycle web applications including CRM, HRM, and 
                  project management solutions. Look no further if you are in search of a professional 
                  partner who can develop stunning web applications.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white' }}>
              <div className="card-body" style={{ backgroundColor:'#f6f5f3' }}>
                <img src="https://woxro.com/public/assets/png/services/mobileappdevelopment.png" alt="Mobile App Development" />
                <h4 className="card-title"><b>Mobile App Development</b> </h4>
                <p className="card-text">We develop high-quality and effective applications for your business. Our expertise and 
                  knowledge help us create reliable mobile applications for iOS and Android and cross-platform
                  solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white' }}>
            <div className="card-body" style={{ backgroundColor: '#fcf0e4' }}>

                <img src="https://woxro.com/public/assets/png/services/ecommercedevelopment.png" alt="Ecommerce Development" />
                <h4 className="card-title"><b>Ecommerce Development</b> </h4>
                <p className="card-text">For some of you, our involvement as an eCommerce development and consulting partner will mean 
                  a powerful business launch with the right technology stack. For others – a possibility to give 
                  their business a fresh start.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white'}}>
              <div className="card-body" style={{ backgroundColor: '#f5f6f8' }}>
                <img src="https://woxro.com/public/assets/png/services/digitalmarketing.png" alt="Digital Marketing" />
                <h4 className="card-title"><b>Digital Marketing</b> </h4>
                <p className="card-text">We bring together expertise in digital marketing and sustainability to design and implement ideas 
                  in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your 
                  online visibility.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card h-100" style={{ cursor: 'pointer',border: '1px solid white' }}>
              <div className="card-body" style={{ backgroundColor: '#effbfb' }}>
                <img src="https://woxro.com/public/assets/png/services/graphic.png" alt="Graphic Designing" />
                <h4 className="card-title"><b>Graphic Designing</b> </h4>
                <p className="card-text">For some of you, our involvement as an eCommerce development and consulting partner will mean a 
                  powerful business launch with the right technology stack. For others – a possibility to give their
                  business a fresh start.</p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Writings;
