import React, { Component } from 'react';
import fb from '../../firebase.config.js';

import ContactsList from './contactsList';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {contacts: {}}
  }

  componentWillMount() {
    let user = fb.auth().currentUser;
    fb.database().ref('contacts').ref(user.uid).on('value', (contacts) => {
      this.setState({contacts: contacts.val()});
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
