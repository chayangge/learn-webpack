// import React from 'react';

// const About = () => (
//     <div>
//         <h1>这是关于页</h1>
//     </div>
// );

// export default About;

// /**
//  * 通用弹层统一容器
//  */
import React, { Component } from 'react';

class Hello extends Component {
    goHome = () => {
        console.log(this.props);
        this.props.history.push('/');
    };

    render () {
        return (
            <div>
                <h1 onClick={this.goHome}>这是关于页</h1>
            </div>
        );
    };
};

export default Hello;
