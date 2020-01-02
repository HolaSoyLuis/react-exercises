import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import ShoppingCart from './Components/Lesson/App';
import MyComponent from './Components/Lesson/Click';
import Counter from './Components/Lesson/Counter';
import Value from './Components/Lesson/EValue';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<ShoppingCart />, document.getElementById('lesson1'));
ReactDOM.render(<MyComponent />, document.getElementById('lesson2'));
ReactDOM.render(<Counter />, document.getElementById('lesson3'));
ReactDOM.render(<Value />, document.getElementById('lesson4'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();