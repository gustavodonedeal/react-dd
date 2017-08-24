import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import universal from 'react-universal-component';

const UniversalRoute = universal(({ component }) => import(`../${component}`));
const TestPage = props => (<UniversalRoute component={'TestPage'} {...props} />);
const AdvertPage = props => (<UniversalRoute component={'Advert'} {...props} />);

const App = () => (
    <div>
        <nav>
            <Link to='/test'>Hello</Link>
        </nav>
        <Route path='/test' component={TestPage} />
        <Route path='/ad/:adId' component={AdvertPage} />
    </div>
);

export default class extends Component {
    render() {
        return (
            <App />
        );
    }
}