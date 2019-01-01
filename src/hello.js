
import React, { Component } from 'react';

class Hello extends Component {
    goAbout = () => {
        console.log(this.props);
        this.props.history.push('/about');
    };

    render () {
        return (
            <div>
                <h1 onClick={this.goAbout}>hello word</h1>
            </div>
        );
    };
};

export default Hello;
