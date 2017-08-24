import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestPage extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        };
    }

    increment = () => this.setState(prevState => ({ number: prevState.number + 1 }));
    decrement = () => this.setState(prevState => ({ number: prevState.number - 1 }));

    render() {
        const { number } = this.state;
        return (
            <div>
                { number } gon naje change
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }
}

export default TestPage;
