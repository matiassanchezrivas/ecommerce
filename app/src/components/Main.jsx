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

import axios from '../config/axios';

import { connect } from 'react-redux'
import { setCurrentUser } from '../action-creators/user'

class Main extends React.Component {

  componentDidMount() {
    console.log('entra al did mount')
    axios.get('/user/me')
      .then(res => res.data)
      .then((user) => {
        this.props.setCurrentUser(user)
      })
      .catch(
        (err) => {
          console.log('no hay usuario logueado')
        })
  }

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

function mapDispatchToProps(dispatch) {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  };
}

const mapStateToProps = function (state) {
  return {
    //currentUser: state.users.currentUser,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)