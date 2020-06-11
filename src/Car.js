import React from 'react';
import ReactDOM from 'react-dom';

class Car extends React.Component {
    paint = () => {
        let color = prompt("Color?");
        this.setState({ color:color });
        this.state.color = color;
    }
    alertDirectArrow = (x, ev) => {
        alert(x + " | " + ev.type);
    }
    alertYearBound(x) {
        alert(x);
    }
    alertYearScopedInline() {
        alert(this.state.year);
    }
    alertYearScopedInClass = () => {
        alert(this.state.year);
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
        return (<li style={{color: this.state.color}}>
            <a onClick={this.paint}>{this.state.brand} {this.state.model}</a>
            <br />
            <button onClick={(ev) => this.alertDirectArrow(this.state.year, ev)}>Direct arrow function call</button>
            <br />
            <button onClick={this.alertYearBound.bind(this,this.state.year)}>Bind argument to generate curried function.</button>
            <br />
            <button onClick={() => this.alertYearScopedInline()}>Inirect call to function as method of 'this'.</button>
            <br />
            <button onClick={this.alertYearScopedInClass}>Direct reference to pre-scoped function.</button>
            </li>);
    }
}

export default Car;