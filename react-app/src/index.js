import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import configureStore from './store';
import {ChakraProvider, extendTheme} from "@chakra-ui/react"

const store = configureStore();


ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);
