import React from 'react';
import ReactDOM from 'react-dom';
//import BrowserRouter from 'react-router-dom/BrowserRouter';
import store from "./stores";
import { Provider } from 'react-redux';

// changed above routing from hashrouter to browser router to replace # from url
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'; //added for bootstrap

ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
 