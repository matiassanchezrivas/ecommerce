import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './Main.css';

import MenuAppBar from './MenuAppBar'
import Login from '../Containers/Login'
import CartContainer from '../Containers/CartContainer'
import MenuProduct from './MenuProduct'


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Switch>
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={MenuProduct} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default Main;