import Test from './App'; 
import {Provider} from 'react-redux';
import React from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './persist'; 
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Test />
      </PersistGate>
    </Provider>
  );
}