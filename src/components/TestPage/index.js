import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { increment, decrement } from './counter';

class TestPage extends Component {
    render() {
        const { value, onIncrement, onDecrement } = this.props;
        return (
            <div>
                { value }
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    value: state.counter
});

const mapDispatchToProps = dispatch => ({
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
