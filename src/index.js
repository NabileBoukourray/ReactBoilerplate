import React from 'react';
import { Component } from 'react';
import ReactDom from 'react-dom';

class App extends Component {

    render() {
        return (
            <div>
                <h1>React JS Boilerplate</h1>
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector('#root'));