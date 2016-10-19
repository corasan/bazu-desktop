import React, { Component } from 'react';
import fb from '../../firebase.config.js';
import { getContacts } from '../utils/contacts';

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

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ContactsList contacts={this.state.contacts}/>
      </div>
    );
  }
}
