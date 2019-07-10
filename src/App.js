import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ApplicationContainer from './Containers/ApplicationContainer';

export default class App extends Component {
    render () {
        return (
			<div style={{backgroundColor: 'rgb(242, 243, 243)'}}>
				<ApplicationContainer />
			</div>
        )
    }
}
