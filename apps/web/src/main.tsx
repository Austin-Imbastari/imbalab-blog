import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

//react router dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);

window.addEventListener('blur', () => {
  document.title = 'I miss you...';
});

window.addEventListener('focus', () => {
  document.title = 'Lets blog<3';
});
