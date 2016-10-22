import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';
require('./styles/main.scss');

export default class Bazu extends Component {
  render() {
    return (
      <div className="app-container">
        <SideMenu/>
        <div className="app-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
