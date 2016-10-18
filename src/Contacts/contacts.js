import React, { Component } from 'react';
import fb from '../../firebase.config.js';

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {contacts: {}}
  }

  componentWillMount() {
    fb.database().ref('contacts').on('value', (contacts) => {
      this.setState({contacts: contacts.val()});
    });
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
      </div>
    );
  }
}
