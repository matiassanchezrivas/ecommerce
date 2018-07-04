import React, { Component } from 'react';
import './Main.css';
import MenuAppBar from './MenuAppBar';
import ProfileContainer from './ProfileContainer';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />
        <ProfileContainer />
      </div>
    );
  }
}

export default Main;