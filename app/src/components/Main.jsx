import React, { Component } from 'react';

import './Main.css';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'
import Cart from './Cart'


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Cart/>
      </div>
    );
  }
}

export default Main;
