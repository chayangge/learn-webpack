// import a from './a.js';
// a.log('test');
// import { BrowserRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    HashRouter,
    Switch
} from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './hello.js';
import About from './about.js';
import './index.css';

ReactDom.render((
    <Router>
        <Switch>
            <Route exact path="/" component={Hello} />
            <Route exact path="/about" component={About} />
        </Switch>
    </Router>
), document.getElementById('app'));
