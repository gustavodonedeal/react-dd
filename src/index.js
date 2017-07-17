import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Search from './components/Search';
import AdView from './components/AdView';
import Header from './components/Header';
// import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path='/' component={Search}/>
        <Route path='/ad/:adId' component={AdView}/>
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
