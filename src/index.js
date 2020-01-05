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
import Controller from './Components/Lesson/UPar';
import Colorful from './Components/Lesson/Colorful';
import MagicEightBall from './Components/Lesson/Magic';
import Toggle from './Components/Lesson/Toggle';
import CheckUserAge from './Components/Lesson/Pass';
import GameOfChance from './Components/Lesson/Win';

ReactDOM.render(<Home />, document.getElementById('root'));
ReactDOM.render(<ShoppingCart />, document.getElementById('lesson1'));
ReactDOM.render(<MyComponent />, document.getElementById('lesson2'));
ReactDOM.render(<Counter />, document.getElementById('lesson3'));
ReactDOM.render(<Value />, document.getElementById('lesson4'));
ReactDOM.render(<Controller />, document.getElementById('lesson5'));
ReactDOM.render(<Colorful />, document.getElementById('lesson6'));
ReactDOM.render(<MagicEightBall />, document.getElementById('lesson7'));
ReactDOM.render(<Toggle />, document.getElementById('lesson8'));
ReactDOM.render(<CheckUserAge />, document.getElementById('lesson9'));
ReactDOM.render(<GameOfChance />, document.getElementById('lesson10'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();