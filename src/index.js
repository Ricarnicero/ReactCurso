import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Navbar from './components/Navbar';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
ReactDOM.render(<Navbar></Navbar>,container)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();