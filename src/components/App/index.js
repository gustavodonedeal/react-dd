import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import universal from 'react-universal-component';

const UniversalRoute = universal(({ component }) => import(`../${component}`));
const TestPage = () => (<UniversalRoute component={'TestPage'} />);
const App = () => (
    <div>
        <nav>
            <Link to='/test'>Hello</Link>
        </nav>
        <Route path='/test' component={TestPage} />
    </div>
);

export default class extends Component {
    render() {
        return (
            <App />
        );
    }
}