import React from 'react';
import ReactDOM from 'react-dom/client';
import Test from './Test';
import { Provider } from "react-redux";

import store from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
    <Test />
    </Provider>
  </React.StrictMode>
);
