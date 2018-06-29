import React, { Component } from 'react';
import logo from '../logo.svg';
import './Main.css';
import Button from '@material-ui/core/Button';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <Button variant="contained" color="primary">functionando con material ui</Button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Main;
