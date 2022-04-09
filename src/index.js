import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import store from './RoutingStore/Reduxtoolkit/Store';


import { store2 } from './RoutingStore/Redux1/Store';

import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store2}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

