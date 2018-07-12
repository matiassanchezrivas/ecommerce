import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import '../components/Main.css';

import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'
import Login from './LoginContainer'
import Register from './RegisterContainer'
import Perfil from './Perfil'

import MenuProduct from '../components/MenuProduct';
import SingleProduct from '../components/SingleProduct';

import ProfileContainer from './ProfileContainer';

import axios from '../config/axios';

import { connect } from 'react-redux'
import { setCurrentUser } from '../action-creators/user'
import CartContainer from './CartContainer';

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
          <Route exact path="/cart" component={CartContainer} />
          <Route exact path="/product" component={MenuProduct} />
          <Route exact path="/product/1" component={SingleProduct} />
          <Route exact path="/profile" component={Perfil} />
          <Route exact path="/user" component= {ProfileContainer} />
          <Route exact path="/register" component={Register} />
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