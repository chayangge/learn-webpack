import React from 'react';

class Test extends React.Component {
    state = {
        text: 'son'
    }
    handleClick = () => {
        console.log(111);
    };
    render () {
        return (
            <button onClick={this.handleClick}>props：{this.props.btnText}</button>
        );
    }
}

export default Test;
