import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test.js';
// import Flux from '../flux/index.js';

// // Define events

// let events = {
//     CHANGE_NAME: Symbol()
// };

// // Combine reducers
// let reducers = Flux.combineReducers({
//     change (action, state = {name: 'Alxw'}) {
//         switch (action.type) {
//             case events.CHANGE_NAME:
//                 let ret = Object.assign({}, state);
//                 ret.name = action.name;
//                 return ret;
//                 break;
//             default:
//                 return state;
//                 break;
//         }
//     }
// });
// console.log('reducers:', reducers);
// let store = Flux.createStore(reducers);

// let actions = Flux.combineActions({
//     change (name) {
//         return {
//             type: events.CHANGE_NAME,
//             name: name
//         };
//     }
// }, store);
// console.log('store:', store);
// console.log('actions:', actions);
class App extends React.Component {
    state = {
        name: '1.....4555'
    }
    handleClick = () => {
        // console.log(111);
        this.setState({
            name: '121'
        });
    };
    render () {
        let {name} = this.state;
        return (
            <div onClick={this.handleClick}>this is app,my name is: {name}
                {/* <Test btnText="btn" /> */}
            </div>
        );
    }
}

// if (module.hot) {
//     module.hot.accept(() => {
//         ReactDOM.render(
//             <App />,
//             document.getElementById('root')
//         );
//     });
// }
if (module.hot) {
    module.hot.accept();
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
