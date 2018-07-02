import React, { Component } from 'react';

import './Main.css';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
