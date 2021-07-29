import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Boostrap Libs
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//SBAdmin2 Style
import './assets/css/sb-admin-2.css';


import './css/style.css';

//Redux
import { Provider } from 'react-redux';
import { Store } from './redux/store';

ReactDOM.render(
<Provider store={Store}>
    <App /> 
</Provider> , document.getElementById('root'));