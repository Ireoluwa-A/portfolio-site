import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// import {HashRouter as Router} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './styles/index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <App />
  </Router>
);