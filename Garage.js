import React from 'react';
import ReactDOM from 'react-dom';
import Car from './Car.js';

class Garage extends React.Component {

    constructor(props) {
      super(props);
      this.Cars = props.cars;
//      console.log(JSON.stringify(this.Cars));
    }
    render() {
        var carList = this.Cars.map(function(car, index){
            return (
                <Car key={index} brand={car.brand} model={car.model} color={car.color} year={car.year} />
            );
        });
        return (
            <div>
            <h1>Who lives in my Garage?</h1>
            <p>
            Click on a car to paint it. You'll be prompted for a color.
            </p>
            <ul>{ carList }</ul>
            </div>
        );
    }
}

export default Garage;