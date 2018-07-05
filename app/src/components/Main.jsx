import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './Main.css';

import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'
import Cart from './Cart'
import Login from '../Containers/Login'

import MenuProduct from './MenuProduct'

import ProfileContainer from '../Containers/ProfileContainer';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={MenuProduct} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default Main;