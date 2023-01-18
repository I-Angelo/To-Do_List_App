import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; We dont need this
import App from './App';
// import reportWebVitals from './reportWebVitals'; We also dont need this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




// Basically we are using the lines 7 to 12 in which we are telling the program to do is in line 7 to target 
// line 31 of our HTML file 'index.html' and paste the results in 'root' in html file



// Here is where the configuration for the app lives