import React, { Component } from 'react';
import { Link } from 'react-router';

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <h1>SideMenu</h1>
        <ul>
          <li><Link to="/" onlyActiveOnIndex={true} activeClassName="active-btn">Contacts</Link></li>
          <li><Link to="history" activeClassName="active-btn">History</Link></li>
          <li><Link to="profile" activeClassName="active-btn">Profile</Link></li>
        </ul>
      </div>
    );
  }
}
