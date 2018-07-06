import React, { Component } from 'react';

import './Main.css';
import MenuAppBar from './MenuAppBar'
import CartContainer from '../Containers/CartContainer'


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <CartContainer />
      </div>
    );
  }
}

export default Main;
