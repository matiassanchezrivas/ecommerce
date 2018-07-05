import React, { Component } from 'react';
<<<<<<< HEAD
import { Route, Redirect, Switch } from 'react-router-dom';
import './Main.css';
import Button from '@material-ui/core/Button';
import MenuAppBar from './MenuAppBar'
import Cart from './Cart'
import Login from '../Containers/Login'
=======
import './Main.css';
import MenuAppBar from './MenuAppBar';
import ProfileContainer from './ProfileContainer';
>>>>>>> fc333ba243dd1f786f84ab25cf5029fdc8403c7e


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
<<<<<<< HEAD
        <Switch>
          <Route exact path="/login" component={Login} />
          <Redirect from="/" to="/login" />
        </Switch>
=======
        <ProfileContainer />
>>>>>>> fc333ba243dd1f786f84ab25cf5029fdc8403c7e
      </div>
    );
  }
}

export default Main;