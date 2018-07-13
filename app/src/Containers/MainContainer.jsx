import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import '../css/Main.css';

import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'
import Login from './LoginContainer'
import Register from './RegisterContainer'
import Perfil from './Perfil'
import Users from './UsersContainer'
import OrdersAdminContainer from './OrdersAdminContainer'

import Products from './ProductsContainer'

import SingleProduct from '../components/SingleProduct';

import ProfileContainer from './ProfileContainer';

import axios from '../config/axios';

import { connect } from 'react-redux'
import { setCurrentUser } from '../action-creators/user'
import CartContainer from './CartContainer';
import MenuProductContainer from './MenuProductContainer';

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
          <Route exact path="/product" component={MenuProductContainer} />
          <Route exact path="/product/1" component={SingleProduct} />
          <Route exact path="/profile" component={Perfil} />
          <Route exact path="/user" component={ProfileContainer} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/admin/orders" component={OrdersAdminContainer} />
          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/products" component={Products} />
          <Redirect from="/" to="/admin/products" />
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