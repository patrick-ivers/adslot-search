import React, { Component } from 'react';
import { SearchContainer } from './Search';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                {this.props.children}
            </div>
        );
    }
}
