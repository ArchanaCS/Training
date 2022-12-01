import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { CookiesProvider } from 'react-cookie';
import Samplemap from './Samplemap';
import { FaRegFontAwesomeLogoFull } from 'react-icons/fa';
import Randomselect from './Randomselect';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
       <CookiesProvider>
    <Randomselect/>
    </CookiesProvider>
  // </React.StrictMode>
);

