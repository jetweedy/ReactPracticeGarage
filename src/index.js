import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import Garage from './Garage.js'

let cars = [
    {brand:"Toyota", model:"Camry", color:"green", year:1998}
    , {brand:"Ford", model:"Mustang", color:"red", year:2004}
];

ReactDOM.render(<Garage cars={cars} />, document.getElementById('root'));


