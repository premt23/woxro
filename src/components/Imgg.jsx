import React from 'react';
import Tea from '../Tea.webp';
import './Imgg.css';

function Imgg() {
  return (
    <div>
      <div className='container' style={{ height: '30%' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="right-pane" style={{ position: 'relative' }}>
            <img src={Tea} alt="img" style={{ width: '100%', height: '50%', opacity: 0.4 }} />
            <div
              className="imgg-text" // Apply CSS class for text styles
            >
              <p className="imgg-title">Kerala's Leading Web Design Company</p>
              <p className="imgg-para">Global Web Designing Company That Provides Full-cycle Software Development Services, E-commerce & Mobile App Development Services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Imgg;
