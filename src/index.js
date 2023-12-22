import React from 'react';
import { createRoot } from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './containers/App';
import store from './store';

import './styles/style.css';

const rootReactElement = createRoot(document.getElementById("root"));

rootReactElement.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
