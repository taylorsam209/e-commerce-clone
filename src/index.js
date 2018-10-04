import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import unregister from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store.js";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
unregister();
