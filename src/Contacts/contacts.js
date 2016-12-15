import React, { Component } from 'react';
import fb from '../../firebase.config.js';
import { getContacts } from '../utils/contactsApi';
import { userLogout } from '../utils/authApi';

import ContactsList from './contactsList';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {contacts: {}}
  }

  componentWillMount() {
    getContacts((contacts) => {
      this.setState({contacts: contacts});
    });
  }

  logout = () => {
    userLogout();
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <button></button>
        <ContactsList contacts={this.state.contacts}/>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
