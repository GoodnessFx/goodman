import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance in your app
reportWebVitals();
