import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './App';
import ScrollToTop from "./utility/ScrollToTop";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ScrollToTop />
      <App />

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
