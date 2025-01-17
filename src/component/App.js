import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Doc from './Doc';
import About from './About';

export default class App extends Component {
    render() {
        return (
            <Router>
                <>
                    <Route exact path="/" component={Home} />
                    <Route path="/doc" component={Doc} />
                    <Route path="/about" component={About} />
                </>
            </Router>
        );
    }
}
