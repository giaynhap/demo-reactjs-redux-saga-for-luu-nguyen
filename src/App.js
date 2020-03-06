import React from 'react';
import logo from './logo.svg';
import './App.css';
import store from './core/store'
import { Provider } from 'react-redux';
import FirstApp from './containers/FirstAppContainer'


function App() {
  return (
    <Provider store = {store}>
        <FirstApp></FirstApp>

    </Provider>
  );
}

export default App;
