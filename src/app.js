import React, { Component } from 'react';
import SideMenu from './SideMenu/SideMenu';

export default class Bazu extends Component {
  render() {
    return (
      <div>
        <SideMenu/>
        {this.props.children}
      </div>
    );
  }
}
