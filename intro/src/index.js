import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import allreducers from './reducers'
import { BasketProvider } from './context/BasketContext';



const store = createStore(allreducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <BasketProvider>
      <App />
      </BasketProvider>
    </Provider>
    </BrowserRouter>  
  </React.StrictMode>
);


