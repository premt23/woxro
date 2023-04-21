import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcom from './components/Firstcom';
import Mynav from './components/Mynav';
import Imgg from './components/Imgg';
import Writings from './components/Writings';
import Fifthcomponent from './components/Fifthcomponent';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Firstcom/>
     <Mynav/>
     <Imgg/>
     <Writings/>
     <Fifthcomponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
