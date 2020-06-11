import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    paint = () => {
        let color = prompt("Color?");
        this.setState({ color:color });
        this.state.color = color;
    }
    constructor(props) {
      super(props);
      this.state = {
          brand: this.props.brand
          , model: this.props.model
          , color: this.props.color
          , year: this.props.year
      };
    }

    render() {
        return <li style={{color: this.state.color}}><a onClick={this.paint}>{this.state.brand} {this.state.model}</a> <button onClick={() => alert(this.state.year)}>Alert Year</button></li>;
    }
}

export default Car;