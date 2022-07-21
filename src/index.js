import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ManageState from './Context/ManageState';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ManageState>
      <App />
    </ManageState>
  </React.StrictMode>
);

