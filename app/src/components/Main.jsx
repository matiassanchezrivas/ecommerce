import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import './Main.css';

import Button from '@material-ui/core/Button';
import MenuAppBar from '../Containers/MenuAppBar'
import Cart from './Cart'
import Login from '../Containers/LoginContainer'
import Perfil from '../Containers/Perfil'

import MenuProduct from './MenuProduct'

import ProfileContainer from '../Containers/ProfileContainer';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar {...this.props} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/product" component={MenuProduct} />
          <Route exact path="/profile" component={Perfil} />
          <Redirect from="/" to="/login" />
        </Switch>
      </div>
    );
  }
}

export default Main;