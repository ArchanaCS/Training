import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import { CookiesProvider } from 'react-cookie';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
       <CookiesProvider>
    <Login />
    </CookiesProvider>
  // </React.StrictMode>
);

