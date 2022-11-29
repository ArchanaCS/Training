// import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {createStore} from 'redux';

const persistConfig = {
  key: 'root',
  storage: storage,
};

const initialState = { 
  total: 0 
};

function todoReducer(prevState = initialState, action) {
  switch (action.type) { 
    case 'setTotal':
      return {...prevState, total: action.payload};
      break;  
    default:
      return prevState;
  }
}

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
