// import a from './a.js';
// a.log('test');
import React from 'react';
import ReactDom from 'react-dom';
import Hello from './hello.js';
import './index.css';

// document.querySelector('#app').innerHTML = 'Hello World!';

ReactDom.render(
    <h1>hello world..<Hello/>...</h1>,
    // React.createElement(<Hello />),
    document.getElementById('app')
);
